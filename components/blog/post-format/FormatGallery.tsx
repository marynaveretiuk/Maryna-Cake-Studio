"use client";

import { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import { Post } from "@/data/posts";
import RevealImage from "@/components/common/animation/RevealImage";

// Blog post media - image gallery format.
export default function FormatGallery({ post }: { post: Post }) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    Fancybox.bind(el, "[data-fancybox]", { Hash: false });
    return () => Fancybox.unbind(el);
  }, []);

  if (!post.galleryImages) return null;

  return (
    <div className="gallery-box" ref={galleryRef}>
      <ul className="gallery-projects">
        {post.galleryImages.map((img, i) => (
          <li key={i}>
            <a href={img} data-fancybox={`gallery-${post.id}`}>
              <RevealImage
                src={img}
                alt={post.title}
                className="gallery-img"
                width={600}
                height={400}
                start="top 95%"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
