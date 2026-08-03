"use client";

import { useState } from "react";
import { postsData } from "@/data/posts";
import PostStyleClassic from "@/components/blog/style/PostStyleClassic";
import PaginationLoadMore from "@/components/blog/pagination/PaginationLoadMore";

const POSTS_PER_PAGE = 4;

// Blog listing - full-width posts, no sidebar.
export default function BlogFullWidth() {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = postsData.slice(0, visibleCount);
  const hasMore = visibleCount < postsData.length;

  const loadMore = () =>
    setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, postsData.length));

  return (
    <section className="blog-section space">
      <div className="container">
        {visiblePosts.map((post) => (
          <PostStyleClassic key={post.id} post={post} />
        ))}
        <PaginationLoadMore hasMore={hasMore} onLoadMore={loadMore} />
      </div>
    </section>
  );
}
