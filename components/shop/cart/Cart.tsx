"use client";

import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";
import { useCart, formatPrice } from "@/context/CartContext";

// Cart page
export default function Cart() {
  const { items, subtotal, removeItem, updateQuantity } = useCart();

  return (
    <section className="shop-section shop-cart space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">Cart</h1>

            {items.length === 0 ? (
              <div className="cart-empty">
                <p className="cart-empty__message" role="status">
                  Your cart is currently empty.
                </p>
                <SlideLink href="/shop" className="btn-link">
                  <div className="btn-reveal">
                    <span>Return to shop</span>
                    <span className="reveal">Return to shop</span>
                  </div>
                </SlideLink>
              </div>
            ) : (
              <>
                {/* Line items */}
                <div className="cart-table">
                  <div className="row cart-table__head d-none d-md-flex">
                    <div className="col-md-1">
                      <span className="screen-reader-text">Remove item</span>
                    </div>
                    <div className="col-md-2">
                      <span className="screen-reader-text">Thumbnail</span>
                    </div>
                    <div className="col-md-2">Product</div>
                    <div className="col-md-2">Price</div>
                    <div className="col-md-3">Quantity</div>
                    <div className="col-md-2">Subtotal</div>
                  </div>

                  {items.map((item) => {
                    const href = `/shop-details/${item.slug}`;
                    return (
                      <div key={item.id} className="row align-items-center cart-item">
                        <div className="col-2 col-md-1 col-remove">
                          <button
                            type="button"
                            className="remove"
                            aria-label={`Remove ${item.title} from cart`}
                            onClick={() => removeItem(item.id)}
                          />
                        </div>

                        <div className="col-3 col-md-2 col-thumb">
                          <SlideLink href={href}>
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={300}
                              height={370}
                            />
                          </SlideLink>
                        </div>

                        <div className="col-7 col-md-2 col-name">
                          <SlideLink href={href}>{item.title}</SlideLink>
                        </div>

                        <div className="col-12 col-md-2 col-price" data-title="Price">
                          <span className="amount">{formatPrice(item.price)}</span>
                        </div>

                        <div className="col-12 col-md-3 col-qty" data-title="Quantity">
                          <div className="shop-qty">
                            <button
                              type="button"
                              className="minus"
                              aria-label="Decrease quantity"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="qty"
                              min={0}
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, Math.max(0, Number(e.target.value) || 0))
                              }
                              aria-label={`${item.title} quantity`}
                            />
                            <button
                              type="button"
                              className="plus"
                              aria-label="Increase quantity"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="col-12 col-md-2 col-subtotal" data-title="Subtotal">
                          <span className="amount">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <form className="cart-coupon" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    className="cart-coupon__input"
                    placeholder="Coupon code"
                    aria-label="Coupon code"
                  />
                  <button type="submit" className="btn-link">
                    <div className="btn-reveal">
                      <span>Apply coupon</span>
                      <span className="reveal">Apply coupon</span>
                    </div>
                  </button>
                </form>

                {/* Order summary */}
                <h2 className="cart-summary-title">Cart totals</h2>
                <div className="cart-summary">
                  <div className="cart-summary__row">
                    <span>Subtotal</span>
                    <span className="amount">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="cart-summary__row cart-summary__row--total">
                    <span>Total</span>
                    <span className="amount">{formatPrice(subtotal)}</span>
                  </div>

                  <SlideLink
                    href="/checkout"
                    className="btn-link cart-summary__checkout"
                  >
                    <div className="btn-reveal">
                      <span>Proceed to checkout</span>
                      <span className="reveal">Proceed to checkout</span>
                    </div>
                  </SlideLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
