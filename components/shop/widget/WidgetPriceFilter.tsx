"use client";

import { useEffect, useState } from "react";
import { useShopFilter } from "@/context/ShopFilterContext";

// Shop sidebar widget - min/max price range filter (dual-handle slider).
export default function WidgetPriceFilter() {
  const { priceCeiling: ceiling, minPrice, maxPrice, setMinPrice, setMaxPrice } =
    useShopFilter();

  // Local handle positions so dragging feels responsive; commit on release.
  const [low, setLow] = useState(minPrice ?? 0);
  const [high, setHigh] = useState(maxPrice ?? ceiling);

  useEffect(() => {
    setLow(minPrice ?? 0);
    setHigh(maxPrice ?? ceiling);
  }, [minPrice, maxPrice, ceiling]);

  // Commit to the shared filter (null = bound not active, so it isn't filtered).
  const apply = () => {
    setMinPrice(low <= 0 ? null : low);
    setMaxPrice(high >= ceiling ? null : high);
  };

  // Selected range highlight (percent of the 0..ceiling track).
  const span = ceiling || 1;
  const leftPct = (low / span) * 100;
  const widthPct = ((high - low) / span) * 100;

  return (
    <section className="widget widget_price_filter">
      <h5 className="widget-title">Filter by price</h5>

      <form
        className="price_slider_wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          apply();
        }}
      >
        <div className="price_slider">
          <span
            className="price_slider__range"
            style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
          />
          <input
            type="range"
            className="price_slider__input price_slider__input--min"
            min={0}
            max={ceiling}
            step={1}
            value={low}
            aria-label="Minimum price"
            onChange={(e) => setLow(Math.min(Number(e.target.value), high))}
            onMouseUp={apply}
            onTouchEnd={apply}
          />
          <input
            type="range"
            className="price_slider__input price_slider__input--max"
            min={0}
            max={ceiling}
            step={1}
            value={high}
            aria-label="Maximum price"
            onChange={(e) => setHigh(Math.max(Number(e.target.value), low))}
            onMouseUp={apply}
            onTouchEnd={apply}
          />
        </div>

        <div className="price_slider_amount">
          <button type="submit" className="button">
            <div className="btn-reveal">
              <span>Filter</span>
              <span className="reveal">Filter</span>
            </div>
          </button>
          <div className="price_label">
            Price: <span className="from">${low}</span> —{" "}
            <span className="to">${high}</span>
          </div>
        </div>
      </form>
    </section>
  );
}
