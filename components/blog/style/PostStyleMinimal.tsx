"use client";

import SlideLink from "@/components/common/SlideLink";
import { Post } from "@/data/posts";
import RevealImage from "@/components/common/animation/RevealImage";

interface PostStyleMinimalProps {
  post: Post;
}

// Blog list card - minimal side-by-side style.
export default function PostStyleMinimal({ post }: PostStyleMinimalProps) {
  const href = `/blog-details/${post.slug}`;

  return (
    <article className="post-style post-style--minimal">
      <div className="minimal-box row">
        <div className="col-md-5">
          <SlideLink href={href}>
            <RevealImage
              src={post.imageSrc}
              alt={post.title}
              className="image-box"
              width={600}
              height={500}
              start="top 90%"
            />
          </SlideLink>
        </div>

        <div className="col-md-7">
          <h5 className="title">
            <SlideLink href={href}>{post.title}</SlideLink>
          </h5>

          <div className="post-details">
            <div className="date">
              <span>{post.publishedDate}</span>
            </div>
          </div>

          <div className="text">
            <p>{post.excerpt}</p>
          </div>

          <div className="button">
            <SlideLink href={href} className="btn-link">
              <div className="btn-reveal">
                <span>Read More</span>
                <span className="reveal">Read More</span>
              </div>
            </SlideLink>
          </div>
        </div>
      </div>
    </article>
  );
}
