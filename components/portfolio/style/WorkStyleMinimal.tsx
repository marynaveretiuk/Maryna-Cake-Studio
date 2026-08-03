"use client";

import Image from "next/image";
import WorkMediaLink, { type WorkLinkMode } from "@/components/portfolio/PageGalleryMode";
import { useImageReveal } from "@/hooks/useImageReveal";
import { type Work } from "@/data/portfolio";

interface WorkStyleMinimalProps {
  work: Work;
  loaded: boolean; // reveal the image once true
  mode?: WorkLinkMode; // project page (default) or gallery
}

// Minimal tile: square image, centered title overlay fades in on hover.
export default function WorkStyleMinimal({ work, loaded, mode = "page" }: WorkStyleMinimalProps) {
  const { containerRef, imgRef } = useImageReveal<HTMLDivElement, HTMLImageElement>({
    enabled: loaded,
  });
  const cats = work.categories.map((category) => category.toLowerCase()).join(" ");

  return (
    <div className={`filter-item col-12 col-sm-6 col-md-4 ${cats}`} data-id={work.id} ref={containerRef}>
      <WorkMediaLink work={work} mode={mode} className="portfolio-minimal__item">
        <div className="portfolio-minimal__image">
          <Image
            ref={imgRef}
            className="hidden-image"
            src={work.image}
            alt={work.title}
            fill
            sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, 33vw"
          />
        </div>
        <div className="portfolio-minimal__overlay">
          <h2>{work.title}</h2>
        </div>
      </WorkMediaLink>
    </div>
  );
}
