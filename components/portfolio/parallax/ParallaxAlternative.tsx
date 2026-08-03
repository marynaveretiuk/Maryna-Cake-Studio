"use client";

import { JarallaxVideo } from "jarallax/react";
import RevealTitle from "@/components/common/animation/RevealTitle";

// Parallax for Portfolio Alternative Page.
export default function Parallax() {
  return (
    <section className="parallax-section">
      <JarallaxVideo
        className="parallax"
        options={{ speed: 0.8 }}
        videoSrc="mp4:/assets/video/mountaineer.mp4"
      >
        <div className="info">
          <RevealTitle as="h1" start="top 95%" className="split-words">
            Alternative
          </RevealTitle>
        </div>
      </JarallaxVideo>
    </section>
  );
}
