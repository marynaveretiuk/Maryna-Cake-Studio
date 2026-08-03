"use client";

import { useState } from "react";
import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";
import { useCart, formatPrice } from "@/context/CartContext";

// Header cart - bag icon with item count + a dropdown mini-cart.
// Reads the shared cart state; opens/closes on click.
export default function HeaderCart() {
  const { items, count, subtotal } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="cart-container">
      <div className="icon-cart" onClick={toggleCart}>
        <i className="icon-ecommerce-bag" aria-hidden="true" />
        <span className={`cart-count${count > 99 ? " cart-count--wide" : ""}`}>
          {count}
        </span>
      </div>

      <div className={`cart-widget ${isCartOpen ? "widget-visible" : ""}`}>
        {items.length === 0 ? (
          <p className="shop-mini-cart__empty-message">No products in the cart.</p>
        ) : (
          <>
            <ul className="shop-mini-cart cart_list product_list_widget">
              {items.map((item) => (
                <li key={item.id} className="shop-mini-cart-item mini_cart_item">
                  <SlideLink href={`/shop-details/${item.slug}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={370}
                      className="attachment-shop_thumbnail"
                    />
                    {item.title}
                  </SlideLink>
                  <span className="quantity">
                    {item.quantity} × <span className="amount">{formatPrice(item.price)}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="shop-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="amount">{formatPrice(subtotal)}</span>
            </p>

            <div className="shop-mini-cart__buttons buttons">
              <SlideLink href="/cart" className="button">
                <div className="btn-reveal">
                  <span>View cart</span>
                  <span className="reveal">View cart</span>
                </div>
              </SlideLink>
              <SlideLink href="/checkout" className="button checkout">
                <div className="btn-reveal">
                  <span>Checkout</span>
                  <span className="reveal">Checkout</span>
                </div>
              </SlideLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
