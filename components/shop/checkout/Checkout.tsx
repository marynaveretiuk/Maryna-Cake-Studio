"use client";

import SlideLink from "@/components/common/SlideLink";
import PaymentMethods from "@/components/shop/checkout/PaymentMethods";
import { useCart, formatPrice } from "@/context/CartContext";

// A short country list for the billing select. Extend as needed.
const COUNTRIES = [
  "United States (US)",
  "United Kingdom (UK)",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Other",
];

// Checkout page - billing details form
export default function Checkout() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <section className="shop-section shop-checkout space">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Checkout</h1>
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
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="shop-section shop-checkout space">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Checkout</h1>

            <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                {/* Billing details */}
                <div className="col-md-7">
                  <div className="checkout-fields">
                    <h3>Billing details</h3>

                    <div className="row">
                      <p className="form-row col-md-6">
                        <label htmlFor="billing_first_name">
                          First name <span className="required">*</span>
                        </label>
                        <input type="text" id="billing_first_name" required />
                      </p>
                      <p className="form-row col-md-6">
                        <label htmlFor="billing_last_name">
                          Last name <span className="required">*</span>
                        </label>
                        <input type="text" id="billing_last_name" required />
                      </p>

                      <p className="form-row col-12">
                        <label htmlFor="billing_company">
                          Company name <span className="optional">(optional)</span>
                        </label>
                        <input type="text" id="billing_company" />
                      </p>

                      <p className="form-row col-12">
                        <label htmlFor="billing_country">
                          Country / Region <span className="required">*</span>
                        </label>
                        <select id="billing_country" defaultValue="" required>
                          <option value="" disabled>
                            Select a country / region…
                          </option>
                          {COUNTRIES.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </p>

                      <p className="form-row col-12">
                        <label htmlFor="billing_address_1">
                          Street address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="billing_address_1"
                          placeholder="House number and street name"
                          required
                        />
                      </p>
                      <p className="form-row col-12">
                        <label htmlFor="billing_address_2" className="screen-reader-text">
                          Apartment, suite, unit, etc. (optional)
                        </label>
                        <input
                          type="text"
                          id="billing_address_2"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                        />
                      </p>

                      <p className="form-row col-md-6">
                        <label htmlFor="billing_city">
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" id="billing_city" required />
                      </p>
                      <p className="form-row col-md-6">
                        <label htmlFor="billing_state">
                          State / County <span className="required">*</span>
                        </label>
                        <input type="text" id="billing_state" required />
                      </p>
                      <p className="form-row col-md-6">
                        <label htmlFor="billing_postcode">
                          ZIP Code <span className="required">*</span>
                        </label>
                        <input type="text" id="billing_postcode" required />
                      </p>

                      <p className="form-row col-md-6">
                        <label htmlFor="billing_phone">
                          Phone <span className="required">*</span>
                        </label>
                        <input type="tel" id="billing_phone" required />
                      </p>
                      <p className="form-row col-12">
                        <label htmlFor="billing_email">
                          Email address <span className="required">*</span>
                        </label>
                        <input type="email" id="billing_email" required />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional information */}
                <div className="col-md-5">
                  <div className="checkout-fields">
                    <h3>Additional information</h3>
                    <p className="form-row form-row-wide">
                      <label htmlFor="order_comments">
                        Order notes <span className="optional">(optional)</span>
                      </label>
                      <textarea
                        id="order_comments"
                        rows={6}
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      />
                    </p>
                  </div>
                </div>
              </div>

              {/* Order review */}
              <h3 className="checkout-review__heading">Your order</h3>
              <div className="checkout-review">
                <div className="checkout-review__table">
                  <div className="row checkout-review__head">
                    <div className="col-8">Product</div>
                    <div className="col-4 text-end">Subtotal</div>
                  </div>

                  {items.map((item) => (
                    <div key={item.id} className="row checkout-review__row">
                      <div className="col-8 product-name">
                        {item.title}{" "}
                        <strong className="product-quantity">× {item.quantity}</strong>
                      </div>
                      <div className="col-4 text-end">
                        <span className="amount">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="row checkout-review__row checkout-review__row--subtotal">
                    <div className="col-8">Subtotal</div>
                    <div className="col-4 text-end">
                      <span className="amount">{formatPrice(subtotal)}</span>
                    </div>
                  </div>
                  <div className="row checkout-review__row checkout-review__row--total">
                    <div className="col-8">Total</div>
                    <div className="col-4 text-end">
                      <strong>
                        <span className="amount">{formatPrice(subtotal)}</span>
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="checkout-payment">
                  <PaymentMethods />

                  <p className="checkout-payment__note">
                    Your personal data will be used to process your order, support
                    your experience throughout this website, and for other purposes
                    described in our privacy policy.
                  </p>
                  <button type="submit" className="btn-link place-order">
                    <div className="btn-reveal">
                      <span>Place order</span>
                      <span className="reveal">Place order</span>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
