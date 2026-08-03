"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { testimonials } from "@/data/testimonials";

// Testimonials carousel / slider.
export default function Testimonials() {
  return (
    <section className="testimonial-section space">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 d-md-flex flex-column align-items-center">
            <h2 className="title-section-small mb-3">What they say about us</h2>
            <p className="mb-5">We've been helping businesses to do their best since 2022.</p>

            <div className="col-md-10">
              <div className="testimonial pt-3">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  speed={400}
                  loop
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{ nextEl: ".btn__next", prevEl: ".btn__prev" }}
                  autoplay={{ delay: 5000, disableOnInteraction: true }}
                >
                  {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="testimonial__card">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={264}
                          height={264}
                          className="customer__avatar"
                        />
                        <p className="customer__quotes">{item.quote}</p>
                        <div className="customer__info">
                          <h4 className="customer__name">{item.name}</h4>
                          <span className="customer__role">{item.role}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="btn__group">
                  <div className="btn__prev">
                    <i className="fa-solid fa-angle-left" />
                  </div>
                  <div className="btn__next">
                    <i className="fa-solid fa-angle-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
