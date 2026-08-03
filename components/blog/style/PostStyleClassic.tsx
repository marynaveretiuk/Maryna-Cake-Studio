"use client";

import SlideLink from "@/components/common/SlideLink";
import { Post } from "@/data/posts";
import PostFormatMedia from "@/components/blog/post-format/PostFormatMedia";

interface PostStyleClassicProps {
  post: Post;
}

// Blog list card - classic style (media + title + excerpt).
export default function PostStyleClassic({ post }: PostStyleClassicProps) {
  const href = `/blog-details/${post.slug}`;

  return (
    <article className="post-style post-style--classic">
      <PostFormatMedia post={post} linkToPost />

      <h5 className="title">
        <SlideLink href={href}>{post.title}</SlideLink>
      </h5>

      <div className="post-details">
        <div className="date">
          <i className="fa-solid fa-calendar-days" aria-hidden="true" />
          <span> {post.publishedDate}</span>
        </div>
        <div className="author">
          <i className="fa-solid fa-user" aria-hidden="true" /> by {post.author}
        </div>
        <div className="category">
          <i className="fa-solid fa-list" aria-hidden="true" />{" "}
          {post.categories.map((cat, i) => (
            <span key={cat}>
              {cat}
              {i < post.categories.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>

      <div className="text">
        <p>{post.excerpt}</p>
      </div>

      <SlideLink href={href} className="btn-link">
        <div className="btn-reveal">
          <span>Read More</span>
          <span className="reveal">Read More</span>
        </div>
      </SlideLink>
    </article>
  );
}
