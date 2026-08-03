"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import type IsotopeType from "isotope-layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioCategories, portfolioData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

// Isotope extends an event emitter; the typings omit it.
type IsotopeEvents = IsotopeType & {
  once: (event: string, callback: () => void) => void;
};

// "All" + the categories present in the works.
const FILTERS = [
  "All",
  ...portfolioCategories.filter((category) =>
    portfolioData.some((work) => work.categories.includes(category))
  ),
];

// First `count` works matching the category.
const visibleIds = (category: string, count: number) => {
  const loaded = portfolioData.slice(0, count);
  const matching =
    category === "All"
      ? loaded
      : loaded.filter((work) => work.categories.includes(category));
  return new Set(matching.map((work) => work.id));
};

// Show a tile if its id is in the visible set.
const filterByIds = (ids: Set<number>) => (el: HTMLElement) =>
  ids.has(Number(el.dataset.id));

interface PortfolioFilterProps {
  gridRef: RefObject<HTMLDivElement | null>; // grid of .filter-item tiles
  columnWidth: string; // masonry sizer selector
  count: number; // works loaded (Load More raises it)
  className?: string; // extra classes on the bar
}

// Category bar that owns the grid's Isotope engine; all filter logic lives here.
export default function PortfolioFilter({
  gridRef,
  columnWidth,
  count,
  className,
}: PortfolioFilterProps) {
  const [active, setActive] = useState("All");
  const isoRef = useRef<IsotopeType | null>(null);
  const [ready, setReady] = useState(false);
  const firstArrange = useRef(true);

  // Build Isotope once (lazy import); instant first layout so tiles don't fly in.
  useEffect(() => {
    let mounted = true;

    (async () => {
      const [{ default: Isotope }, { default: imagesLoaded }] = await Promise.all([
        import("isotope-layout"),
        import("imagesloaded"),
      ]);
      const grid = gridRef.current;
      if (!mounted || !grid) return;

      const iso = new Isotope(grid, {
        itemSelector: ".filter-item",
        percentPosition: true,
        transitionDuration: 0,
        hiddenStyle: { opacity: 0, transform: "scale(0.85)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
        masonry: { columnWidth },
      });
      isoRef.current = iso;

      // Re-layout as images load.
      imagesLoaded(grid).on("progress", () => iso.layout());

      firstArrange.current = true;
      setReady(true);
    })();

    return () => {
      mounted = false;
      isoRef.current?.destroy();
      isoRef.current = null;
      setReady(false);
    };
  }, [gridRef, columnWidth]);

  // Re-filter on category / count change (first pass instant, rest fade), then
  // refresh ScrollTrigger so tiles moved into view reveal.
  useEffect(() => {
    const iso = isoRef.current;
    if (!ready || !iso) return;
    iso.arrange({
      filter: filterByIds(visibleIds(active, count)),
      transitionDuration: firstArrange.current ? 0 : "0.5s",
    });
    (iso as IsotopeEvents).once("arrangeComplete", () => ScrollTrigger.refresh());
    firstArrange.current = false;
  }, [ready, active, count]);

  return (
    <ul className={`portfolio-filter ${className ?? ""}`}>
      {FILTERS.map((category) => (
        <li key={category}>
          <button
            type="button"
            className={category === active ? "active" : ""}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
