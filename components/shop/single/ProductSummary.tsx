"use client";

import { useState } from "react";
import ProductPrice from "@/components/shop/ProductPrice";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

// Single product - summary column: title, rating, price, short description,
// quantity selector and add-to-cart button, plus category meta.
export default function ProductSummary({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const reviewCount = product.reviews.length;

  // Add to cart, then signal CartNotice (above the product) to show the message.
  const handleAdd = () => {
    addItem(product, qty);
    window.dispatchEvent(
      new CustomEvent("shop:cart-added", { detail: { title: product.title, qty } })
    );
  };

  return (
    <div className="summary">
      <h1 className="product_title">{product.title}</h1>

      {reviewCount > 0 && (
        <div className="shop-product-rating">
          {/* Opens the Reviews tab */}
          <a
            href="#reviews"
            className="review-link"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("shop:show-reviews"));
            }}
          >
            ({reviewCount} customer review{reviewCount > 1 ? "s" : ""})
          </a>
        </div>
      )}

      <ProductPrice product={product} />

      <div className="product-short-description">
        <p>{product.shortDescription}</p>
      </div>

      <form className="cart" onSubmit={(e) => e.preventDefault()}>
        {/* Quantity stepper */}
        <div className="shop-qty">
          <button
            type="button"
            className="minus"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <input
            type="number"
            className="qty"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
            aria-label="Quantity"
          />
          <button
            type="button"
            className="plus"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
          >
            +
          </button>
        </div>

        <button
          type="submit"
          className="single_add_to_cart_button btn-link"
          onClick={handleAdd}
        >
          <div className="btn-reveal">
            <span>Add to cart</span>
            <span className="reveal">Add to cart</span>
          </div>
        </button>
      </form>

      <div className="product_meta">
        <span className="posted_in">
          {product.categories.length > 1 ? "Categories: " : "Category: "}
          {product.categories.map((cat, i) => (
            <span key={cat}>
              {i > 0 && ", "}
              {cat}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
