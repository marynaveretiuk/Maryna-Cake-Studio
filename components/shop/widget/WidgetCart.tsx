"use client";

import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";
import { useCart, formatPrice } from "@/context/CartContext";

// Shop sidebar widget - mini cart contents.
export default function WidgetCart() {
  const { items, subtotal, removeItem } = useCart();

  return (
    <section className="widget widget_shopping_cart">
      <h5 className="widget-title">Cart</h5>

      <div className="widget_shopping_cart_content">
        {items.length === 0 ? (
          <p className="shop-mini-cart__empty-message">
            No products in the cart.
          </p>
        ) : (
          <>
            <ul className="shop-mini-cart cart_list product_list_widget">
              {items.map((item) => (
                <li key={item.id} className="shop-mini-cart-item mini_cart_item">
                  <button
                    type="button"
                    className="remove remove_from_cart_button"
                    aria-label={`Remove ${item.title} from cart`}
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </button>
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
                    {item.quantity} ×{" "}
                    <span className="amount">{formatPrice(item.price)}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="shop-mini-cart__total total">
              <strong>Subtotal:</strong>{" "}
              <span className="amount">{formatPrice(subtotal)}</span>
            </p>

            <div className="shop-mini-cart__buttons buttons">
              <SlideLink href="/cart" className="btn-link">
                <div className="btn-reveal">
                  <span>View cart</span>
                  <span className="reveal">View cart</span>
                </div>
              </SlideLink>
              <SlideLink href="/checkout" className="btn-link checkout">
                <div className="btn-reveal">
                  <span>Checkout</span>
                  <span className="reveal">Checkout</span>
                </div>
              </SlideLink>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
