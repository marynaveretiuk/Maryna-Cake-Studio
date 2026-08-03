"use client";

import { useState } from "react";
import { postsData } from "@/data/posts";
import PostStyleCreative from "@/components/blog/style/PostStyleCreative";
import PaginationLoadMore from "@/components/blog/pagination/PaginationLoadMore";

const POSTS_PER_PAGE = 4;

// Blog listing - creative hover-overlay grid.
export default function BlogCreative() {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = postsData.slice(0, visibleCount);
  const hasMore = visibleCount < postsData.length;

  const loadMore = () =>
    setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, postsData.length));

  return (
    <section className="blog-section space">
      <div className="container">
        <div className="row gy-5">
          {visiblePosts.map((post) => (
            <div key={post.id} className="col-md-6">
              <PostStyleCreative post={post} />
            </div>
          ))}
        </div>
        <PaginationLoadMore hasMore={hasMore} onLoadMore={loadMore} />
      </div>
    </section>
  );
}
