"use client";

import { Jarallax, JarallaxImage } from "jarallax/react";
import RevealTitle from "@/components/common/animation/RevealTitle";

export default function Parallax() {
  return (
    <section className="parallax-section">
      <Jarallax
        className="parallax"
        options={{
          speed: 0.8,
          imgSize: "auto 80%",
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
            crafted
            <br />
            for Your Moments
          </RevealTitle>
        </div>
      </Jarallax>
    </section>
  );
}
