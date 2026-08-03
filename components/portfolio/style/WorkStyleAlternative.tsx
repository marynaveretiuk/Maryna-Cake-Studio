"use client";

import Image from "next/image";
import WorkMediaLink, { type WorkLinkMode } from "@/components/portfolio/PageGalleryMode";
import { useImageReveal } from "@/hooks/useImageReveal";
import { type Work } from "@/data/portfolio";

interface WorkStyleAlternativeProps {
  work: Work;
  loaded: boolean; // reveal the image once true
  mode?: WorkLinkMode; // gallery (default) or project page
}

// First ~90 chars of the description, tags stripped.
function excerpt(html: string, max = 90) {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text.length <= max ? text : `${text.slice(0, text.lastIndexOf(" ", max))}…`;
}

// Alternative tile: image on top, title + excerpt below.
export default function WorkStyleAlternative({
  work,
  loaded,
  mode = "gallery",
}: WorkStyleAlternativeProps) {
  const { containerRef, imgRef } = useImageReveal<HTMLDivElement, HTMLImageElement>({
    enabled: loaded,
  });
  const cats = work.categories.map((category) => category.toLowerCase()).join(" ");

  return (
    <div className={`filter-item col-12 col-sm-6 col-md-4 ${cats}`} data-id={work.id} ref={containerRef}>
      <WorkMediaLink work={work} mode={mode} className="portfolio-alternative__link">
        <div className="portfolio-alternative__item">
          <div className="portfolio-alternative__image">
            <Image
              ref={imgRef}
              className="hidden-image"
              src={work.image}
              alt={work.title}
              fill
              sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="portfolio-alternative__title">
          <h2>{work.title}</h2>
          {work.description && <p>{excerpt(work.description)}</p>}
        </div>
      </WorkMediaLink>
    </div>
  );
}
