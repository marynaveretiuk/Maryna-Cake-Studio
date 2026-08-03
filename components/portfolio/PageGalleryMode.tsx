"use client";

import { useEffect, type MouseEvent, type ReactNode } from "react";
import { Fancybox } from "@fancyapps/ui";
import type { CarouselInstance, ToolbarOptions } from "@fancyapps/ui";
import {
  MediaController,
  MediaControlBar,
  MediaPlayButton,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaMuteButton,
  MediaVolumeRange,
  MediaFullscreenButton,
} from "media-chrome/react";
import SlideLink from "@/components/common/SlideLink";
import { type Work } from "@/data/portfolio";

// "page" → project page; "gallery" → shared Fancybox lightbox.
export type WorkLinkMode = "page" | "gallery";

// Local video file vs image / YouTube / Vimeo URL.
const isLocalVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

// Full toolbar for images, close-only for video.
const toolbarDisplay = ((carousel: CarouselInstance) =>
  carousel.getSlides().some((slide) => slide.type === "image")
    ? { left: ["counter"], right: ["toggleFull", "autoplay", "fullscreen", "thumbs", "close"] }
    : { left: [], middle: [], right: ["close"] }) as unknown as ToolbarOptions["display"];

// <video> refs keyed by fancybox `src` (#id) — play current slide by ref, no DOM queries.
const videoRegistry = new Map<string, HTMLVideoElement>();
const pauseAllVideos = () => videoRegistry.forEach((video) => video.pause());

// Play the open slide's video, pause the rest.
const syncVideos = (_fb: unknown, carousel: CarouselInstance) => {
  const currentSrc = carousel.getPage().slides[0]?.src;
  videoRegistry.forEach((video, src) => {
    if (src === currentSrc) video.play().catch(() => {});
    else video.pause();
  });
};

// Bound once while any gallery tile is mounted (ref-counted) — works on every page.
let lightboxCount = 0;
function bindPortfolioLightbox() {
  if (lightboxCount++ === 0) {
    Fancybox.bind('[data-fancybox="portfolio"]', {
      Hash: false, // no URL hash
      Carousel: { Toolbar: { enabled: true, display: toolbarDisplay } },
      on: {
        "Carousel.ready": syncVideos,
        "Carousel.settle": syncVideos,
        close: pauseAllVideos,
      },
    });
  }
  return () => {
    if (--lightboxCount === 0) Fancybox.unbind('[data-fancybox="portfolio"]');
  };
}

// Lightbox media: the video for video projects, else the tile image.
const workMedia = (work: Work) =>
  work.gallery?.length === 1 && work.gallery[0].src ? work.gallery[0].src : work.image;

// Hidden media-chrome player fancybox shows for a local-video tile.
function GalleryVideoPlayer({ id, src, work }: { id: string; src: string; work: Work }) {
  return (
    <div style={{ display: "none" }}>
      <div id={id}>
        <MediaController className="media-player">
          <video
            ref={(el) => void (el ? videoRegistry.set(src, el) : videoRegistry.delete(src))}
            slot="media"
            src={workMedia(work)}
            preload="metadata"
            playsInline
            suppressHydrationWarning
          />
          <MediaControlBar>
            <MediaPlayButton />
            <MediaTimeRange />
            <MediaTimeDisplay showDuration />
            <MediaMuteButton />
            <MediaVolumeRange />
            <MediaFullscreenButton />
          </MediaControlBar>
        </MediaController>
      </div>
    </div>
  );
}

interface WorkMediaLinkProps {
  work: Work;
  mode: WorkLinkMode;
  className?: string;
  children: ReactNode;
  onMouseEnter?: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLElement>) => void;
}

// Shared tile link: project page or Fancybox gallery, per `mode`.
// Local video opens in an inline media-chrome player.
export default function WorkMediaLink({ work, mode, children, ...rest }: WorkMediaLinkProps) {
  useEffect(() => (mode === "gallery" ? bindPortfolioLightbox() : undefined), [mode]);

  // Page mode → navigate.
  if (mode !== "gallery") {
    return (
      <SlideLink href={`/project-details/${work.slug}`} {...rest}>
        {children}
      </SlideLink>
    );
  }

  // Gallery + local video → inline player; the anchor opens it by `#id`.
  const media = workMedia(work);
  if (isLocalVideo(media)) {
    const id = `portfolio-video-${work.id}`;
    return (
      <>
        <a data-fancybox="portfolio" data-src={`#${id}`} data-thumb={work.image} {...rest}>
          {children}
        </a>
        <GalleryVideoPlayer id={id} src={`#${id}`} work={work} />
      </>
    );
  }

  // Gallery + image / remote video → open the URL directly.
  return (
    <a href={media} data-fancybox="portfolio" data-thumb={work.image} {...rest}>
      {children}
    </a>
  );
}
