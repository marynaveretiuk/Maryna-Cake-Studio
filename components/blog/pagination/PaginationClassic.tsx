"use client";

interface PaginationClassicProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

// Blog - numbered pagination control.
export default function PaginationClassic({ current, total, onChange }: PaginationClassicProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  const handleChange = (page: number) => {
    onChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="blog-pagination blog-pagination--classic" aria-label="Blog pagination">
      <button
        className="blog-pagination__btn"
        disabled={current === 1}
        onClick={() => handleChange(current - 1)}
        aria-label="Previous page"
      >
        <div className="btn-reveal">
          <span><i className="fa-solid fa-angle-left" aria-hidden="true" /></span>
          <span className="reveal"><i className="fa-solid fa-angle-left" aria-hidden="true" /></span>
        </div>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={`blog-pagination__page${p === current ? " blog-pagination__page--active" : ""}`}
          onClick={() => handleChange(p)}
          aria-label={`Page ${p}`}
          aria-current={p === current ? "page" : undefined}
        >
          <div className="btn-reveal">
            <span>{p}</span>
            <span className="reveal">{p}</span>
          </div>
        </button>
      ))}

      <button
        className="blog-pagination__btn"
        disabled={current === total}
        onClick={() => handleChange(current + 1)}
        aria-label="Next page"
      >
        <div className="btn-reveal">
          <span><i className="fa-solid fa-angle-right" aria-hidden="true" /></span>
          <span className="reveal"><i className="fa-solid fa-angle-right" aria-hidden="true" /></span>
        </div>
      </button>
    </nav>
  );
}
