"use client";

import SlideLink from "@/components/common/SlideLink";
import { Post } from "@/data/posts";
import RevealImage from "@/components/common/animation/RevealImage";

interface FormatImageProps {
  post: Post;
  /** List view links the image to the post; the single page renders it plain. */
  linkToPost?: boolean;
}

// Blog post media - single image format.
export default function FormatImage({ post, linkToPost = false }: FormatImageProps) {
  const image = (
    <RevealImage
      src={post.imageSrc}
      alt={post.title}
      width={1200}
      height={450}
      start="top 90%"
    />
  );

  return (
    <div className="image-box">
      {linkToPost ? (
        <SlideLink href={`/blog-details/${post.slug}`}>{image}</SlideLink>
      ) : (
        image
      )}
    </div>
  );
}
