"use client";

import { useState } from "react";
import WorkStyleMinimal from "@/components/portfolio/style/WorkStyleMinimal";
import PaginationLoadMore from "@/components/portfolio/pagination/PaginationLoadMore";
import { portfolioData } from "@/data/portfolio";

// Full-width portfolio: edge-to-edge minimal tiles, no filter.
const WORKS_SHOWN = 9; // works shown before "Load More"
const WORKS_PER_LOAD = 3; // works added per "Load More" click

export default function PortfolioFullWidth() {
  const [visibleCount, setVisibleCount] = useState(WORKS_SHOWN);
  const hasMore = visibleCount < portfolioData.length;

  return (
    <section className="portfolio-section space pt-5">
      <div className="container-fluid p-0">
        <div className="row portfolio-minimal__grid">
          {portfolioData.slice(0, visibleCount).map((work) => (
            <WorkStyleMinimal key={work.id} work={work} loaded />
          ))}
        </div>

        <PaginationLoadMore
          hasMore={hasMore}
          onLoadMore={() => setVisibleCount((count) => count + WORKS_PER_LOAD)}
        />
      </div>
    </section>
  );
}
