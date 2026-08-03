"use client";

import { useState } from "react";
import { postsData } from "@/data/posts";
import PostStyleClassic from "@/components/blog/style/PostStyleClassic";
import PaginationClassic from "@/components/blog/pagination/PaginationClassic";
import Sidebar from "@/components/blog/Sidebar";

const POSTS_PER_PAGE = 6;

// Posts assigned to the "Post Format" category
const CATEGORY = "Post Format";

const formatPosts = postsData.filter((post) => post.categories.includes(CATEGORY));

// Blog listing - showcases each post format (image, video, quote...).
export default function BlogPostFormat() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(formatPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = formatPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <section className="blog-section space">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {visiblePosts.map((post) => (
              <PostStyleClassic key={post.id} post={post} />
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
