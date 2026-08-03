"use client";

import SlideLink from "@/components/common/SlideLink";
import { Post } from "@/data/posts";
import RevealImage from "@/components/common/animation/RevealImage";

interface PostStyleCreativeProps {
  post: Post;
}

// Blog list card - creative hover-overlay style.
export default function PostStyleCreative({ post }: PostStyleCreativeProps) {
  const href = `/blog-details/${post.slug}`;

  return (
    <article className="post-style post-style--creative">
      <SlideLink href={href} className="creative-box">
        <RevealImage
          src={post.imageSrc}
          alt={post.title}
          className="image-box"
          width={1200}
          height={450}
          start="top 90%"
        />

        <div className="creative-inner-box">
          <div className="creative-item">
            <div className="item-info">
              <span>{post.title}</span>
              <em>
                <span className="date">{post.publishedDate}</span>
                <span className="author"> by {post.author}</span>
              </em>
            </div>
          </div>
        </div>
      </SlideLink>
    </article>
  );
}
