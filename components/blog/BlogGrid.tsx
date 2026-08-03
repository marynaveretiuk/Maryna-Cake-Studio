"use client";

import { useState } from "react";
import { postsData } from "@/data/posts";
import PostStyleClassic from "@/components/blog/style/PostStyleClassic";
import PaginationLoadMore from "@/components/blog/pagination/PaginationLoadMore";

const POSTS_PER_PAGE = 4;

// Blog listing - grid of post cards.
export default function BlogGrid() {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = postsData.slice(0, visibleCount);
  const hasMore = visibleCount < postsData.length;

  const loadMore = () =>
    setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, postsData.length));

  return (
    <section className="blog-section space">
      <div className="container">
        <div className="row blog-grid-row">
          {visiblePosts.map((post) => (
            <div key={post.id} className="col-md-6">
              <PostStyleClassic post={post} />
            </div>
          ))}
        </div>
        <PaginationLoadMore hasMore={hasMore} onLoadMore={loadMore} />
      </div>
    </section>
  );
}
