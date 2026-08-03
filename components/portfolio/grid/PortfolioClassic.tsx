"use client";

import { useRef, useState } from "react";
import WorkStyleClassic from "@/components/portfolio/style/WorkStyleClassic";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import PaginationLoadMore from "@/components/portfolio/pagination/PaginationLoadMore";
import { portfolioData } from "@/data/portfolio";

// Classic portfolio: large 2x2 feature tiles in an Isotope masonry grid.
const BIG_SLUGS = new Set(["dance", "dream", "phone"]);

const WORKS_SHOWN = 10; // works loaded before "Load More"
const WORKS_PER_LOAD = 3; // works revealed per "Load More" click

export default function PortfolioClassic() {
  const [visibleCount, setVisibleCount] = useState(WORKS_SHOWN);
  const gridRef = useRef<HTMLDivElement>(null);

  // All works render; PortfolioFilter shows the loaded ones. Load More raises it.
  const hasMore = visibleCount < portfolioData.length;

  return (
    <section className="portfolio-section space pt-0">
      <div className="container">
        <div className="portfolio-classic">
          <PortfolioFilter
            gridRef={gridRef}
            columnWidth=".portfolio-classic__sizer"
            count={visibleCount}
          />

          <div className="row portfolio-classic__grid" ref={gridRef}>
            <div className="portfolio-classic__sizer col-12 col-sm-6 col-md-3" />

            {portfolioData.map((work, i) => (
              <WorkStyleClassic
                key={work.id}
                work={work}
                big={BIG_SLUGS.has(work.slug)}
                loaded={i < visibleCount}
              />
            ))}
          </div>

          <PaginationLoadMore
            hasMore={hasMore}
            onLoadMore={() => setVisibleCount((count) => count + WORKS_PER_LOAD)}
          />
        </div>
      </div>
    </section>
  );
}
