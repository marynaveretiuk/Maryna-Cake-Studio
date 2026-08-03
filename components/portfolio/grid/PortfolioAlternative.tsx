"use client";

import { useRef, useState } from "react";
import WorkStyleAlternative from "@/components/portfolio/style/WorkStyleAlternative";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import PaginationLoadMore from "@/components/portfolio/pagination/PaginationLoadMore";
import { portfolioData } from "@/data/portfolio";

// Alternative portfolio: image with title + excerpt below, filterable masonry.
const WORKS_SHOWN = 9; // works loaded before "Load More"
const WORKS_PER_LOAD = 3; // works revealed per "Load More" click

export default function PortfolioAlternative() {
  const [visibleCount, setVisibleCount] = useState(WORKS_SHOWN);
  const gridRef = useRef<HTMLDivElement>(null);

  // All works render; PortfolioFilter shows the loaded ones. Load More raises it.
  const hasMore = visibleCount < portfolioData.length;

  return (
    <section className="portfolio-section space pt-0">
      <div className="container">
        <div className="portfolio-alternative">
          <PortfolioFilter
            gridRef={gridRef}
            columnWidth=".portfolio-alternative__sizer"
            count={visibleCount}
          />

          <div className="row portfolio-alternative__grid" ref={gridRef}>
            <div className="portfolio-alternative__sizer col-12 col-sm-6 col-md-4" />

            {portfolioData.map((work, i) => (
              <WorkStyleAlternative key={work.id} work={work} loaded={i < visibleCount} />
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
