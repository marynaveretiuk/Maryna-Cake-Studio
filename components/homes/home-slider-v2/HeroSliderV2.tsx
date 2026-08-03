"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Keyboard } from "swiper/modules";
import RevealTitle from "@/components/common/animation/RevealTitle";
import FadeUp from "@/components/common/animation/FadeUp";
import SlideLink from "@/components/common/SlideLink";
import { heroSlidesV2 } from "@/data/slides";

// Join an array of lines into one block with <br /> between them.
function lines(values: string[]) {
  return values.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}

// Home - full-width hero slider V2.
export default function HeroSliderV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = heroSlidesV2[activeIndex];

  return (
    <section className="slider-section">
      <div className="hero-slider-v2">
        <Swiper
          className="hero-slider-v2__bgs"
          modules={[EffectFade, Autoplay, Keyboard]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          loop
          allowTouchMove={false}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {heroSlidesV2.map((s, i) => (
            <SwiperSlide key={s.id}>
              <div className="hero-slide-v2__bg">
                <Image
                  src={s.image}
                  alt={s.title.join(" ")}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Re-keyed per active slide so the reveal/fade-up replays on change. */}
        <div className="hero-slide-v2__caption" key={activeIndex}>
          <div className="container">
            <RevealTitle as="h2" className="hero-slide-v2__title split-words">
              {lines(slide.title)}
            </RevealTitle>

            <FadeUp as="p" className="hero-slide-v2__text">
              {lines(slide.text)}
            </FadeUp>

            <FadeUp className="hero-slide-v2__cta">
              <SlideLink href={slide.buttonHref} className="btn-link">
                <div className="btn-reveal">
                  <span>{slide.buttonLabel}</span>
                  <span className="reveal">{slide.buttonLabel}</span>
                </div>
              </SlideLink>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
