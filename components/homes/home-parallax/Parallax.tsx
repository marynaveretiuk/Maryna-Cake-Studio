"use client";

import { Jarallax, JarallaxImage } from "jarallax/react";
import RevealTitle from "@/components/common/animation/RevealTitle";

// Home (parallax) - full-screen parallax hero.
export default function Parallax() {
  return (
    <section className="parallax-section">
      <Jarallax className="parallax" options={{ speed: 0.8 }}>
        <JarallaxImage src="/assets/img/parallax/parallax-home.jpg" alt="" />
        <div className="info">
          <RevealTitle as="h1" start="top 95%" className="split-words">
            WE ARE DIGITAL AGENCY
          </RevealTitle>
        </div>
      </Jarallax>
    </section>
  );
}
