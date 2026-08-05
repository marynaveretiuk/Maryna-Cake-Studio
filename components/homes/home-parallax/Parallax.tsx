"use client";

import { Jarallax, JarallaxImage } from "jarallax/react";
import RevealTitle from "@/components/common/animation/RevealTitle";
import SlideLink from "@/components/common/SlideLink";

export default function Parallax() {
  return (
    <section className="parallax-section">
      <Jarallax
        className="parallax"
        options={{
          speed: 0.35,
          imgSize: "cover",
          imgPosition: "center center",
          imgRepeat: "no-repeat",
        }}
      >
        <JarallaxImage
          src="/assets/img/parallax/hero3.jpeg"
          alt="Luxury wedding cake by Maryna Cake Studio"
        />

        <div className="info">
          <RevealTitle as="h1" start="top 95%" className="split-words">
            Luxury Cakes
            <br />
            Crafted
            <br />
            for Your Moments
          </RevealTitle>

          <SlideLink href="/contact-v1" className="hero-button">
            Order Your Cake
          </SlideLink>
        </div>
      </Jarallax>
    </section>
  );
}
