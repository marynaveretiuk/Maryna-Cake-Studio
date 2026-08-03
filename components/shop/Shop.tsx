"use client";

import { useEffect, useState } from "react";
import {
  ShopFilterProvider,
  useShopFilter,
  type SortKey,
} from "@/context/ShopFilterContext";
import Product from "@/components/shop/Product";
import Sidebar from "@/components/shop/Sidebar";
import PaginationLoadMore from "@/components/shop/pagination/PaginationLoadMore";

const PRODUCTS_PER_PAGE = 9;

// Shop page - filter / sort state + product grid + sidebar.
export default function Shop() {
  return (
    <ShopFilterProvider>
      <ShopContent />
    </ShopFilterProvider>
  );
}

function ShopContent() {
  const { sortBy, setSortBy, products } = useShopFilter();
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  // Reset paging whenever the filtered/sorted list changes.
  useEffect(() => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [products]);

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;
  const shownTo = Math.min(visibleCount, products.length);

  return (
    <section className="shop-section space">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h1 className="page-title">Shop</h1>

            <div className="shop-topbar">
              <p className="shop-result-count" role="alert">
                {products.length === 0
                  ? "No results"
                  : `Showing ${products.length === shownTo ? `all ${products.length}` : `1–${shownTo} of ${products.length}`} results`}
              </p>

              <form className="shop-ordering" onSubmit={(e) => e.preventDefault()}>
                <select
                  name="orderby"
                  className="orderby"
                  aria-label="Shop order"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                >
                  <option value="menu_order">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </form>
            </div>

            <div className="row shopContainer">
              {visibleProducts.map((product) => (
                <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>

            <PaginationLoadMore
              hasMore={hasMore}
              onLoadMore={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + PRODUCTS_PER_PAGE, products.length)
                )
              }
            />
          </div>

          <div className="col-md-3 shop-sidebar--right">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
