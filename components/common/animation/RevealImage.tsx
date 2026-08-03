"use client";

import Image from "next/image";
import { useImageReveal } from "@/hooks/useImageReveal";
import { useAfterLoader } from "@/hooks/useAfterLoader";

interface RevealImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  start?: string;
  duration?: number;
  scale?: number;
  priority?: boolean;
  trigger?: boolean;
}

// Image that reveals (clip + scale) when scrolled into view.
export default function RevealImage({
  src,
  alt,
  width = 500,
  height = 500,
  className,
  start,
  duration,
  scale,
  priority = false,
  trigger = true,
}: RevealImageProps) {
  const { containerRef, imgRef, animate } = useImageReveal<HTMLDivElement, HTMLImageElement>(
    { start, duration, scale, trigger }
  );

  // Replay once the loader lifts (manual mode); scroll-triggered mode ignores this.
  useAfterLoader(animate);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className ?? ""}`}>
      <Image
        ref={imgRef}
        className="hidden-image"
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </div>
  );
}
