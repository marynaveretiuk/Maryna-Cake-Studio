"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { isOnSale, type Product } from "@/data/products";

export interface CartItem {
  id: number;
  slug: string;
  title: string;
  price: number; // effective unit price (sale price when on sale)
  image: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number; // total quantity across all items
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "glacier-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  // Persist on every change.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage may be unavailable */
    }
  }, [items]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    const price = isOnSale(product) ? product.salePrice! : product.price;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          title: product.title,
          price,
          image: product.images[0],
          quantity,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(
    () =>
      items.reduce(
        (acc, item) => {
          acc.count += item.quantity;
          acc.subtotal += item.price * item.quantity;
          return acc;
        },
        { count: 0, subtotal: 0 }
      ),
    [items]
  );

  const value = useMemo(
    () => ({ items, count, subtotal, addItem, removeItem, updateQuantity, clear }),
    [items, count, subtotal, addItem, removeItem, updateQuantity, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`;
}
