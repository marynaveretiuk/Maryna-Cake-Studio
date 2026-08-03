"use client";

import { Jarallax, JarallaxImage } from "jarallax/react";
import RevealTitle from "@/components/common/animation/RevealTitle";

// Contact - alternate parallax hero.
export default function Parallax() {
  return (
    <section className="parallax-section">
      <Jarallax className="parallax" options={{ speed: 0.8 }}>
        <JarallaxImage src="/assets/img/parallax/parallax-contact-us.jpg" alt="" />
        <div className="info">
          <RevealTitle as="h1" start="top 95%" className="split-words">
            Contact us
          </RevealTitle>
        </div>
      </Jarallax>
    </section>
  );
}
