"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { productsData, isOnSale, type Product } from "@/data/products";

export type SortKey =
  | "menu_order"
  | "popularity"
  | "rating"
  | "date"
  | "price"
  | "price-desc";

// Effective price drives both sorting and the price filter.
export const effectivePrice = (p: Product) =>
  isOnSale(p) ? p.salePrice! : p.price;

interface ShopFilterValue {
  sortBy: SortKey;
  setSortBy: (value: SortKey) => void;
  minPrice: number | null;
  setMinPrice: (value: number | null) => void;
  maxPrice: number | null;
  setMaxPrice: (value: number | null) => void;
  priceCeiling: number; // highest product price — the slider's upper bound
  products: Product[]; // filtered + sorted result
}

const ShopFilterContext = createContext<ShopFilterValue | null>(null);

export function ShopFilterProvider({ children }: { children: React.ReactNode }) {
  const [sortBy, setSortBy] = useState<SortKey>("menu_order");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const priceCeiling = useMemo(
    () => Math.ceil(Math.max(...productsData.map(effectivePrice))),
    []
  );

  const products = useMemo(() => {
    let list = [...productsData];

    if (minPrice !== null) {
      list = list.filter((p) => effectivePrice(p) >= minPrice);
    }
    if (maxPrice !== null) {
      list = list.filter((p) => effectivePrice(p) <= maxPrice);
    }

    switch (sortBy) {
      case "popularity":
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "date":
        list.sort((a, b) => b.id - a.id);
        break;
      case "price":
        list.sort((a, b) => effectivePrice(a) - effectivePrice(b));
        break;
      case "price-desc":
        list.sort((a, b) => effectivePrice(b) - effectivePrice(a));
        break;
      default:
        break; // menu_order keeps the source order
    }

    return list;
  }, [sortBy, minPrice, maxPrice]);

  const value = useMemo(
    () => ({
      sortBy,
      setSortBy,
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice,
      priceCeiling,
      products,
    }),
    [sortBy, minPrice, maxPrice, priceCeiling, products]
  );

  return (
    <ShopFilterContext.Provider value={value}>
      {children}
    </ShopFilterContext.Provider>
  );
}

export function useShopFilter() {
  const ctx = useContext(ShopFilterContext);
  if (!ctx) throw new Error("useShopFilter must be used inside ShopFilterProvider");
  return ctx;
}
