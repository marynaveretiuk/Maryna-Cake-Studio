"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Thumbs, FreeMode } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import RevealImage from "@/components/common/animation/RevealImage";
import type { Product } from "@/data/products";

// Single product - image gallery
export default function ProductGallery({ product }: { product: Product }) {
  const [thumbs, setThumbs] = useState<SwiperClass | null>(null);
  const mainRef = useRef<SwiperClass | null>(null);

  // Close any open lightbox when leaving the page
  useEffect(() => () => Fancybox.close(), []);

  // The main swiper inits before the thumbs exist, so link them once thumbs is ready.
  useEffect(() => {
    const main = mainRef.current;
    if (!main || main.destroyed || !thumbs || thumbs.destroyed) return;
    if (main.params.thumbs) main.params.thumbs.swiper = thumbs;
    main.thumbs.init();
    main.thumbs.update(true);
  }, [thumbs]);

  // Zoom icon: open the lightbox starting at the currently-active slide
  const openLightbox = () => {
    Fancybox.show(
      product.images.map((src) => ({ src, type: "image" })),
      { startIndex: mainRef.current?.activeIndex ?? 0, Hash: false }
    );
  };

  const hasThumbs = product.images.length > 1;

  return (
    <div className="product-gallery">
      <button
        type="button"
        className="product-gallery__trigger"
        aria-label="View full-screen image gallery"
        onClick={openLightbox}
      >
        <i className="fa-regular fa-magnifying-glass" aria-hidden="true" />
      </button>

      <Swiper
        className="product-gallery__main"
        modules={[Thumbs]}
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        slidesPerView={1}
        spaceBetween={0}
        onSwiper={(swiper) => (mainRef.current = swiper)}
      >
        {product.images.map((image, i) => (
          <SwiperSlide key={image}>
            <RevealImage
              src={image}
              alt={product.title}
              width={600}
              height={740}
              priority={i === 0}
              start="top 85%"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      {hasThumbs && (
        <Swiper
          className="product-gallery__thumbs"
          modules={[Thumbs, FreeMode]}
          onSwiper={setThumbs}
          watchSlidesProgress
          freeMode
          slidesPerView={4}
          spaceBetween={0}
        >
          {product.images.map((image) => (
            <SwiperSlide key={image}>
              <RevealImage src={image} alt="" width={100} height={123} start="top 95%" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
