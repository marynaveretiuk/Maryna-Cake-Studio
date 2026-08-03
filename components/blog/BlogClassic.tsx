"use client";

import { useState } from "react";
import { postsData } from "@/data/posts";
import PostStyleClassic from "@/components/blog/style/PostStyleClassic";
import PaginationLoadMore from "@/components/blog/pagination/PaginationLoadMore";
import Sidebar from "@/components/blog/Sidebar";

const POSTS_PER_PAGE = 4;

// Blog listing - classic layout (post list + sidebar, load more).
export default function BlogClassic() {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = postsData.slice(0, visibleCount);
  const hasMore = visibleCount < postsData.length;

  const loadMore = () =>
    setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, postsData.length));

  return (
    <section className="blog-section space">
      <div className="container">
        <div className="row">

          <div className="col-md-9">
            {visiblePosts.map((post) => (
              <PostStyleClassic key={post.id} post={post} />
            ))}
            <PaginationLoadMore hasMore={hasMore} onLoadMore={loadMore} />
          </div>

          <div className="col-md-3 blog-sidebar--right">
            <Sidebar />
          </div>

        </div>
      </div>
    </section>
  );
}
