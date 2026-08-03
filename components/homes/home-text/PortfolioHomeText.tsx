"use client";

import { useRef } from "react";
import WorkStyleClassic from "@/components/portfolio/style/WorkStyleClassic";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import { portfolioData } from "@/data/portfolio";

// Classic portfolio (home text): filterable masonry grid, no Load More.
const BIG_SLUGS = new Set(["dance", "dream", "phone"]);

const WORKS_SHOWN = 5; // only the first 5 works are shown

export default function PortfolioHomeText() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section className="portfolio-section space pt-0 mt-5">
      <div className="container">
        <div className="portfolio-classic">
          <PortfolioFilter
            gridRef={gridRef}
            columnWidth=".portfolio-classic__sizer"
            count={WORKS_SHOWN}
            className="justify-content-start"
          />

          <div className="row portfolio-classic__grid" ref={gridRef}>
            <div className="portfolio-classic__sizer col-6 col-md-3" />

            {portfolioData.map((work, i) => (
              <WorkStyleClassic
                key={work.id}
                work={work}
                big={BIG_SLUGS.has(work.slug)}
                loaded={i < WORKS_SHOWN}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
