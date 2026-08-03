"use client";

import { useState } from "react";
import { postsData } from "@/data/posts";
import PostStyleMinimal from "@/components/blog/style/PostStyleMinimal";
import PaginationClassic from "@/components/blog/pagination/PaginationClassic";
import Sidebar from "@/components/blog/Sidebar";

const POSTS_PER_PAGE = 6;

// Blog listing - minimal text-first layout.
export default function BlogMinimal() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(postsData.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = postsData.slice(start, start + POSTS_PER_PAGE);

  return (
    <section className="blog-section space">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {visiblePosts.map((post) => (
              <PostStyleMinimal key={post.id} post={post} />
            ))}
            <PaginationClassic
              current={currentPage}
              total={totalPages}
              onChange={setCurrentPage}
            />
          </div>

          <div className="col-md-3 blog-sidebar--right">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
