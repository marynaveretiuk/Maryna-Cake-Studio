"use client";

import { useState } from "react";
import SlideLink from "@/components/common/SlideLink";
import { postsData } from "@/data/posts";

// Blog sidebar widget - live post search.
export default function WidgetSearch() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const results =
    q.length > 1
      ? postsData
          .filter(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              p.excerpt.toLowerCase().includes(q)
          )
          .slice(0, 5)
      : [];

  return (
    <section className="widget widget-search">
      <form
        className="search-widget form-inline"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group">
          <input
            type="search"
            id="search"
            name="s"
            className="form-control"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search posts"
          />
          <span className="input-group-btn">
            <button type="submit" className="search-btn" aria-label="Search">
              <i className="fa-regular fa-magnifying-glass" aria-hidden="true" />
            </button>
          </span>
        </div>

        {results.length > 0 && (
          <div id="searchResults" className="widget-search__results">
            {results.map((post) => (
              <SlideLink key={post.id} href={`/blog-details/${post.slug}`}>
                <div className="btn-reveal">
                  <span>{post.title}</span>
                  <span className="reveal">{post.title}</span>
                </div>
              </SlideLink>
            ))}
          </div>
        )}
      </form>
    </section>
  );
}
