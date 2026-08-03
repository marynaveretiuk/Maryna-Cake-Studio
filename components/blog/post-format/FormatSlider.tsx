"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Post } from "@/data/posts";

// Blog post media - image slider format.
export default function FormatSlider({ post }: { post: Post }) {
  const [sliderInstance, setSliderInstance] = useState<SwiperClass | null>(null);

  if (!post.sliderImages) return null;

  return (
    <div className="image-box type-slider">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={800}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        onSwiper={setSliderInstance}
      >
        {post.sliderImages.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="slide">
              <Image
                src={slide.image}
                alt={slide.caption ?? post.title}
                width={1200}
                height={420}
                className="slide-img"
              />
              {slide.caption && <p className="flex-caption">{slide.caption}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        onClick={() => sliderInstance?.slidePrev()}
        className="slider-nav slider-nav--prev"
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-angle-left" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => sliderInstance?.slideNext()}
        className="slider-nav slider-nav--next"
        aria-label="Next slide"
      >
        <i className="fa-solid fa-angle-right" aria-hidden="true" />
      </button>
    </div>
  );
}
