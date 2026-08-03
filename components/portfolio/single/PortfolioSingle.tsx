"use client";

import { Fragment, useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import type { CarouselInstance, ToolbarOptions } from "@fancyapps/ui";
import { Jarallax, JarallaxImage, JarallaxVideo } from "jarallax/react";
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
import RevealImage from "@/components/common/animation/RevealImage";
import RevealTitle from "@/components/common/animation/RevealTitle";
import PostShare from "@/components/common/PostShare";
import type { ProjectImage, ProjectParallax, Work } from "@/data/portfolio";

// Is this gallery item's `src` a local video file (vs a YouTube/Vimeo URL)?
const isLocalVideo = (src?: string) => !!src && /\.(mp4|webm|ogg)$/i.test(src);

// Toolbar buttons per gallery.
const toolbarDisplay = ((carousel: CarouselInstance) =>
  carousel.getSlides().some((slide) => slide.type === "image")
    ? { left: ["counter"], right: ["toggleFull", "autoplay", "fullscreen", "thumbs", "close"] }
    : { left: [], middle: [], right: ["close"] }) as unknown as ToolbarOptions["display"];

interface PortfolioSingleProps {
  work: Work;
  prevWork: Work | null;
  nextWork: Work | null;
}

// Parallax hero
function ParallaxHero({ image, title, video }: ProjectParallax) {
  const info = title && (
    <div className="info">
      <RevealTitle as="h2" start="top 95%" className="split-words">
        {title}
      </RevealTitle>
    </div>
  );

  return (
    <section className="parallax-section">
      {video ? (
        <JarallaxVideo className="parallax" options={{ speed: 0.8 }} videoSrc={video}>
          {info}
        </JarallaxVideo>
      ) : (
        <Jarallax className="parallax" options={{ speed: 0.8 }}>
          <JarallaxImage src={image} alt="" />
          {info}
        </Jarallax>
      )}
    </section>
  );
}

interface GalleryItemProps {
  item: ProjectImage;
  work: Work;
  index: number;
  priority?: boolean;
  registerVideo: (index: number, el: HTMLVideoElement | null) => void; // ref for play/pause
}

// Hidden media-chrome player fancybox shows for a local-video cell.
function GalleryVideoPlayer({ item, id, videoRef }: {
  item: ProjectImage;
  id: string;
  videoRef: (el: HTMLVideoElement | null) => void;
}) {
  return (
    <div style={{ display: "none" }}>
      <div id={id}>
        <MediaController className="media-player">
          <video
            ref={videoRef}
            slot="media"
            src={item.src}
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

// One gallery cell: a thumbnail linking into the lightbox.
function GalleryItem({ item, work, index, priority, registerVideo }: GalleryItemProps) {
  const thumb = (
    <RevealImage
      src={item.image}
      alt={work.title}
      width={1200}
      height={1200}
      start="top 95%"
      priority={priority}
    />
  );

  // Local video → the anchor opens an inline player by `#id`.
  if (isLocalVideo(item.src)) {
    const id = `project-video-${work.slug}-${index}`;
    return (
      <>
        <a className={item.col} href={item.image} data-fancybox="images" data-src={`#${id}`}>
          {thumb}
        </a>
        <GalleryVideoPlayer item={item} id={id} videoRef={(el) => registerVideo(index, el)} />
      </>
    );
  }

  // Image / remote video → open the URL directly.
  return (
    <a className={item.col} href={item.image} data-fancybox="images" data-src={item.src}>
      {thumb}
    </a>
  );
}

// The gallery. Every thumbnail opens one swipeable Fancybox lightbox.
function Gallery({
  work,
  priority,
  registerVideo,
}: {
  work: Work;
  priority?: boolean;
  registerVideo: (index: number, el: HTMLVideoElement | null) => void;
}) {
  if (!work.gallery?.length) return null;

  return (
    <section className="project-gallery">
      <div className="row gy-5">
        {work.gallery.map((item, i) => (
          <GalleryItem
            key={i}
            item={item}
            work={work}
            index={i}
            priority={priority && i === 0}
            registerVideo={registerVideo}
          />
        ))}
      </div>
    </section>
  );
}

// Heading + description + project details + social share.
function Content({ work }: { work: Work }) {
  const details: [string, string | undefined][] = [
    ["Author", work.author],
    ["Client", work.client],
    ["Project date", work.date],
    ["Project Location", work.location],
  ];

  return (
    <>
      <h3>{work.title}</h3>

      <section
        className="description-details"
        dangerouslySetInnerHTML={{ __html: work.description ?? "" }}
      />

      <section className="project-details">
        <h5>PROJECT DETAILS</h5>

        {details.map(([label, value]) =>
          value ? (
            <Fragment key={label}>
              <h6>{label}</h6>
              <p>{value}</p>
            </Fragment>
          ) : null
        )}

        {work.website && (
          <>
            <h6>Website</h6>
            <p>
              <a href={work.website.url} target="_blank" rel="noreferrer">
                {work.website.label}
              </a>
            </p>
          </>
        )}

        <PostShare title={work.title} />
      </section>
    </>
  );
}

// Single project page. Layout (gallery placement) is data-driven per project.
export default function PortfolioSingle({ work, prevWork, nextWork }: PortfolioSingleProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Inline videos keyed by gallery index (= lightbox slide index) — play/pause by ref.
  const videosRef = useRef(new Map<number, HTMLVideoElement>());
  const registerVideo = (index: number, el: HTMLVideoElement | null) => {
    if (el) videosRef.current.set(index, el);
    else videosRef.current.delete(index);
  };

  // Bind the lightbox to this project's gallery links; play the open slide's video.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const pauseAll = () => videosRef.current.forEach((video) => video.pause());

    const playCurrent = (_fb: unknown, carousel: CarouselInstance) => {
      const current = carousel.getPageIndex();
      videosRef.current.forEach((video, index) => {
        if (index === current) video.play().catch(() => {});
        else video.pause();
      });
    };

    Fancybox.bind(el, "[data-fancybox]", {
      Hash: false, // no URL hash
      // Force the toolbar on (default "auto" needs an image slide); buttons per gallery.
      Carousel: { Toolbar: { enabled: true, display: toolbarDisplay } },
      on: {
        "Carousel.ready": playCurrent,
        "Carousel.settle": playCurrent,
        close: pauseAll,
      },
    });
    return () => Fancybox.unbind(el);
  }, []);

  // The gallery is above the fold (its first image is the LCP) only when no
  // parallax hero sits above it and the content doesn't come first.
  const galleryAboveFold = !work.parallax && work.layout !== "gallery-bottom";

  const gallery = <Gallery work={work} priority={galleryAboveFold} registerVideo={registerVideo} />;
  const content = <Content work={work} />;

  // Column span + block order per layout; anything else is content only.
  const layouts: Partial<
    Record<NonNullable<Work["layout"]>, { span: string; blocks: [React.ReactNode, React.ReactNode] }>
  > = {
    "gallery-left": { span: "col-md-6", blocks: [gallery, content] },
    "gallery-right": { span: "col-md-6", blocks: [content, gallery] },
    "gallery-top": { span: "col-md-12", blocks: [gallery, content] },
    "gallery-bottom": { span: "col-md-12", blocks: [content, gallery] },
  };
  const layout = work.layout ? layouts[work.layout] : undefined;

  const body = layout ? (
    <>
      <div className={layout.span}>{layout.blocks[0]}</div>
      <div className={layout.span}>{layout.blocks[1]}</div>
    </>
  ) : (
    <div className="col-md-12">{content}</div>
  );

  return (
    <div className="single-project space" ref={wrapperRef}>
      {work.parallax && <ParallaxHero {...work.parallax} />}

      <div className="container">
        <div className="row gy-5">
          {body}

          {/* Prev / Next navigation */}
          <div className="project-navigation">
            {prevWork && (
              <div className="prev-project">
                <SlideLink href={`/project-details/${prevWork.slug}`} className="btn-link">
                  <div className="btn-reveal">
                    <span><i className="fa fa-angle-left" aria-hidden="true" /> Prev Project</span>
                    <span className="reveal"><i className="fa fa-angle-left" aria-hidden="true" /> Prev Project</span>
                  </div>
                </SlideLink>
              </div>
            )}

            {nextWork && (
              <div className="next-project">
                <SlideLink href={`/project-details/${nextWork.slug}`} className="btn-link">
                  <div className="btn-reveal">
                    <span>Next Project <i className="fa fa-angle-right" aria-hidden="true" /></span>
                    <span className="reveal">Next Project <i className="fa fa-angle-right" aria-hidden="true" /></span>
                  </div>
                </SlideLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
