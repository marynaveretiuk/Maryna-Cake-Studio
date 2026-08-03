"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLenis } from "@/context/LenisProvider";
import type { Product } from "@/data/products";

// Single product - Description / Reviews tabs
export default function ProductTabs({ product }: { product: Product }) {
  const [tab, setTab] = useState<"description" | "reviews">("description");
  const rootRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // switch to the Reviews tab and scroll down to it.
  useEffect(() => {
    const showReviews = () => {
      setTab("reviews");

      const el = rootRef.current;
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: -40 });
      else el.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("shop:show-reviews", showReviews);
    return () => window.removeEventListener("shop:show-reviews", showReviews);
  }, [lenis]);

  const reviews = product.reviews;
  const reviewCount = reviews.length;

  return (
    <div className="shop-tabs" ref={rootRef}>
      <ul className="shop-tabs__nav" role="tablist">
        <li className={tab === "description" ? "active" : ""}>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "description"}
            onClick={() => setTab("description")}
          >
            Description
          </button>
        </li>
        <li className={tab === "reviews" ? "active" : ""}>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "reviews"}
            onClick={() => setTab("reviews")}
          >
            Reviews ({reviewCount})
          </button>
        </li>
      </ul>

      {tab === "description" ? (
        <div className="shop-tabs__panel" role="tabpanel">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <div className="shop-tabs__panel" id="reviews" role="tabpanel">
          <h2 className="shop-reviews__title">
            {reviewCount} review{reviewCount !== 1 ? "s" : ""} for {product.title}
          </h2>

          {reviewCount > 0 ? (
            <ol className="shop-reviews">
              {reviews.map((review, i) => (
                <li key={i} className="shop-review">
                  {review.avatar && (
                    <div className="shop-review__avatar">
                      <Image
                        src={review.avatar}
                        alt={review.author}
                        width={60}
                        height={60}
                      />
                    </div>
                  )}
                  <div className="shop-review__content">
                    <p className="shop-review__meta">
                      <strong className="shop-review__author">{review.author}</strong>
                      <span className="shop-review__dash">–</span>
                      <span className="shop-review__date">{review.date}</span>
                    </p>
                    <div className="shop-review__text">
                      <p>{review.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p>There are no reviews yet.</p>
          )}

          {/* Add a review (presentational form) */}
          <div className="shop-review-form">
            <h3>Add a review</h3>
            <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
              <div className="rating-select">
                <label htmlFor="review-rating">Your rating</label>
                <select id="review-rating" defaultValue="" required>
                  <option value="">Rate…</option>
                  <option value="5">Perfect</option>
                  <option value="4">Good</option>
                  <option value="3">Average</option>
                  <option value="2">Not that bad</option>
                  <option value="1">Very poor</option>
                </select>
              </div>

              <textarea rows={6} required placeholder="Your review" />
              <input type="text" required placeholder="Name" />
              <input type="email" required placeholder="Email" />

              <button type="submit" className="btn-link">
                <div className="btn-reveal">
                  <span>Submit</span>
                  <span className="reveal">Submit</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
