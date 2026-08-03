"use client";

interface PaginationLoadMoreProps {
  hasMore: boolean;
  onLoadMore: () => void;
}

// Portfolio - Load More button pagination.
export default function PaginationLoadMore({ hasMore, onLoadMore }: PaginationLoadMoreProps) {
  return (
    <div className="portfolio-pagination portfolio-pagination--load-more">
      <button className="btn-link" onClick={onLoadMore} disabled={!hasMore}>
        {hasMore ? (
          <div className="btn-reveal">
            <span>Load More</span>
            <span className="reveal">Load More</span>
          </div>
        ) : (
          <span>No More Projects</span>
        )}
      </button>
    </div>
  );
}
