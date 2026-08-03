"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import WorkMediaLink, { type WorkLinkMode } from "@/components/portfolio/PageGalleryMode";
import { useImageReveal } from "@/hooks/useImageReveal";
import { type Work } from "@/data/portfolio";

interface WorkStyleClassicProps {
  work: Work;
  big: boolean; // large 2x2 feature tile
  loaded: boolean; // reveal the image once true
  mode?: WorkLinkMode; // project page (default) or gallery
}

// Off-screen transform per edge: 0 top, 1 right, 2 bottom, 3 left.
const OFFSCREEN = [
  "translateY(-100%)",
  "translateX(100%)",
  "translateY(100%)",
  "translateX(-100%)",
] as const;

// Edge the pointer crossed, mapped to TRBL.
function edgeFromPointer(el: HTMLElement, clientX: number, clientY: number) {
  const { left, top, width: w, height: h } = el.getBoundingClientRect();
  const x = (clientX - left - w / 2) * (w > h ? h / w : 1);
  const y = (clientY - top - h / 2) * (h > w ? w / h : 1);
  return Math.round(((Math.atan2(y, x) * 180) / Math.PI + 180) / 90 + 3) % 4;
}

// Classic tile: overlay slides in/out from the edge the cursor crosses.
export default function WorkStyleClassic({ work, big, loaded, mode = "page" }: WorkStyleClassicProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { containerRef, imgRef } = useImageReveal<HTMLDivElement, HTMLImageElement>({
    enabled: loaded,
  });
  const span = big ? "col-12 col-md-6" : "col-12 col-sm-6 col-md-3";
  // Match `sizes` to the column span so big tiles request a big-enough image
  const sizes = big
    ? "(max-width: 767px) 100vw, 50vw"
    : "(max-width: 575px) 100vw, (max-width: 767px) 50vw, 25vw";
  const cats = work.categories.map((category) => category.toLowerCase()).join(" ");

  // Overlay + entry edge, or null if the overlay isn't mounted.
  const hovered = (e: MouseEvent<HTMLElement>) => {
    const overlay = overlayRef.current;
    if (!overlay) return null;
    return { overlay, edge: edgeFromPointer(e.currentTarget, e.clientX, e.clientY) };
  };

  const slideIn = (e: MouseEvent<HTMLElement>) => {
    const hit = hovered(e);
    if (!hit) return;
    const { overlay, edge } = hit;
    overlay.style.transition = "none"; // jump to entry edge...
    overlay.style.transform = OFFSCREEN[edge];
    void overlay.offsetWidth; // ...flush, then animate in
    overlay.style.transition = "";
    overlay.style.transform = "translate(0, 0)";
  };

  const slideOut = (e: MouseEvent<HTMLElement>) => {
    const hit = hovered(e);
    if (!hit) return;
    hit.overlay.style.transition = "";
    hit.overlay.style.transform = OFFSCREEN[hit.edge];
  };

  return (
    <div className={`filter-item ${span} ${cats}`} data-id={work.id} ref={containerRef}>
      <WorkMediaLink
        work={work}
        mode={mode}
        className="portfolio-classic__item"
        onMouseEnter={slideIn}
        onMouseLeave={slideOut}
      >
        <Image
          ref={imgRef}
          className="hidden-image"
          src={work.image}
          alt={work.title}
          fill
          sizes={sizes}
        />
        <div className="portfolio-classic__overlay" ref={overlayRef}>
          <h2>{work.title}</h2>
        </div>
      </WorkMediaLink>
    </div>
  );
}
