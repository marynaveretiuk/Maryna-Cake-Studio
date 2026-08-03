"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SlideLink from "@/components/common/SlideLink";

export interface CartAddedDetail {
  title: string;
  qty: number;
}

// Transient "added to cart" notice shown above the product.
export default function CartNotice() {
  const [notice, setNotice] = useState<CartAddedDetail | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Fade in on show (runs pre-paint, so no flash); contextSafe powers fade-out.
  const { contextSafe } = useGSAP(
    () => {
      if (notice) {
        gsap.fromTo(
          ref.current,
          { autoAlpha: 0, y: -8 },
          { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out", overwrite: true }
        );
      }
    },
    { dependencies: [notice], scope: ref }
  );

  // Fade out, then unmount.
  const dismiss = contextSafe(() => {
    if (!ref.current) return setNotice(null);
    gsap.to(ref.current, {
      autoAlpha: 0,
      y: -8,
      duration: 0.4,
      ease: "power2.in",
      overwrite: true,
      onComplete: () => setNotice(null),
    });
  });

  // Keep the timer pointed at the latest dismiss without re-subscribing.
  const dismissRef = useRef(dismiss);
  dismissRef.current = dismiss;

  // Show on add; reset the auto-dismiss timer.
  useEffect(() => {
    const onAdded = (e: Event) => {
      setNotice((e as CustomEvent<CartAddedDetail>).detail);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => dismissRef.current(), 5000);
    };
    window.addEventListener("shop:cart-added", onAdded);
    return () => {
      window.removeEventListener("shop:cart-added", onAdded);
      clearTimeout(timer.current);
    };
  }, []);

  if (!notice) return null;

  const { title, qty } = notice;
  return (
    <div className="cart-notice" role="alert" tabIndex={-1} ref={ref}>
      <span className="cart-notice__text">
        <i className="fa-solid fa-circle-check cart-notice__icon" aria-hidden="true" />
        {qty > 1 && `${qty} × `}“{title}” {qty > 1 ? "have" : "has"} been added to your cart.
      </span>
      <SlideLink href="/cart" className="cart-notice__link btn-link">
        <div className="btn-reveal">
          <span>View cart</span>
          <span className="reveal">View cart</span>
        </div>
      </SlideLink>
    </div>
  );
}
