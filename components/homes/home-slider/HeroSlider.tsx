"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Keyboard } from "swiper/modules";
import { useRevealTitle } from "@/hooks/useRevealTitle";
import { useAfterLoader } from "@/hooks/useAfterLoader";
import { heroSlides, type HeroSlide } from "@/data/slides";

// YouTube embed URL for a background video.
function youtubeEmbedUrl(input: string): string {
  const match = input.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  const id = match ? match[1] : input;
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id, // required for loop=1 to actually loop
    controls: "0",
    showinfo: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    disablekb: "1",
    fs: "0",
    iv_load_policy: "3",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

// Slide caption title
function SlideTitle({ title, active }: { title: string; active: boolean }) {
  const { ref, animate } = useRevealTitle<HTMLHeadingElement>({ trigger: false });

  // Initial reveal once the loader lifts (the first slide is active behind it).
  useAfterLoader(animate);

  const animateRef = useRef(animate);
  animateRef.current = animate;
  useEffect(() => {
    if (active) animateRef.current();
  }, [active]);

  return (
    <h2 className="hero-slide__title split-words" ref={ref}>
      {title}
    </h2>
  );
}

// Home - full-width hero slider.
export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Enable the Ken Burns zoom one frame after mount so the first slide (already
  // active on load) transitions in too, instead of starting pre-zoomed.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="slider-section">
      <Swiper
        className={`hero-slider${ready ? " hero-slider--ready" : ""}`}
        modules={[EffectFade, Autoplay, Navigation, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop
        allowTouchMove={false}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{ prevEl: ".hero-slider__prev", nextEl: ".hero-slider__next" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {heroSlides.map((slide: HeroSlide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              {slide.youtube ? (
                <div className="hero-slide__bg hero-slide__bg--video">
                  <iframe
                    src={youtubeEmbedUrl(slide.youtube)}
                    title={slide.title}
                    allow="autoplay; encrypted-media"
                    aria-hidden="true"
                  />
                </div>
              ) : slide.video ? (
                <div className="hero-slide__bg hero-slide__bg--video">
                  <video
                    src={slide.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <div className="hero-slide__bg">
                  <Image
                    src={slide.image!}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>
              )}

              <div className="hero-slide__overlay" />

              <div className="hero-slide__caption">
                <SlideTitle title={slide.title} active={i === activeIndex} />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          type="button"
          className="hero-slider__arrow hero-slider__prev"
          aria-label="Previous slide"
        >
          <i className="fa-solid fa-angle-left" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="hero-slider__arrow hero-slider__next"
          aria-label="Next slide"
        >
          <i className="fa-solid fa-angle-right" aria-hidden="true" />
        </button>
      </Swiper>
    </section>
  );
}
