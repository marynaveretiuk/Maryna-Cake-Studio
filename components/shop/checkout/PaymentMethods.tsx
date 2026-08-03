"use client";

import { useState } from "react";

interface PaymentMethod {
  id: string;
  label: string;
  description: string;
}

// Available payment methods. Add or edit entries here.
const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "bacs",
    label: "Direct bank transfer",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  {
    id: "cod",
    label: "Cash on delivery",
    description: "Pay with cash upon delivery.",
  },
  {
    id: "card",
    label: "Credit card",
    description: "Pay securely with your credit or debit card.",
  },
  {
    id: "paypal",
    label: "PayPal",
    description:
      "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
  },
];

// Checkout - selectable payment methods. The chosen method's description is
// revealed below it (presentational only; no real payment processing).
export default function PaymentMethods() {
  const [active, setActive] = useState(PAYMENT_METHODS[0].id);

  return (
    <ul className="payment-methods">
      {PAYMENT_METHODS.map((method) => {
        const isActive = active === method.id;
        return (
          <li
            key={method.id}
            className={`payment-method${isActive ? " active" : ""}`}
          >
            <label>
              <input
                type="radio"
                name="payment_method"
                value={method.id}
                checked={isActive}
                onChange={() => setActive(method.id)}
              />
              <span className="payment-method__label">{method.label}</span>
            </label>

            <div className="payment-method__desc">
              <div className="payment-method__desc-inner">
                <p>{method.description}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
