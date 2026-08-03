"use client";

import Image from "next/image";
import WorkMediaLink, { type WorkLinkMode } from "@/components/portfolio/PageGalleryMode";
import { useImageReveal } from "@/hooks/useImageReveal";
import { type Work } from "@/data/portfolio";

interface WorkStyleCreativeProps {
  work: Work;
  loaded: boolean; // reveal the image once true
  mode?: WorkLinkMode; // project page (default) or gallery
}

// Creative tile: square image, overlay (categories + title) slides up on hover.
export default function WorkStyleCreative({ work, loaded, mode = "page" }: WorkStyleCreativeProps) {
  const { containerRef, imgRef } = useImageReveal<HTMLDivElement, HTMLImageElement>({
    enabled: loaded,
  });
  const cats = work.categories.map((category) => category.toLowerCase()).join(" ");

  return (
    <div className={`filter-item col-12 col-sm-6 col-md-4 ${cats}`} data-id={work.id} ref={containerRef}>
      <WorkMediaLink work={work} mode={mode} className="portfolio-creative__item">
        <div className="portfolio-creative__image">
          <Image
            ref={imgRef}
            className="hidden-image"
            src={work.image}
            alt={work.title}
            fill
            sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, 33vw"
          />
        </div>
        <div className="portfolio-creative__overlay">
          <p>{work.categories.join(", ")}</p>
          <h2>{work.title}</h2>
        </div>
      </WorkMediaLink>
    </div>
  );
}
