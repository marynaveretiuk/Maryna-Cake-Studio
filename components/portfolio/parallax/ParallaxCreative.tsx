"use client";

import { JarallaxVideo } from "jarallax/react";

// Parallax for Portfolio Creative Page.
export default function Parallax() {
  return (
    <section className="parallax-section">
      <JarallaxVideo
        className="parallax"
        options={{ speed: 0.8 }}
        videoSrc="mp4:/assets/video/envato.mp4"
      />
    </section>
  );
}