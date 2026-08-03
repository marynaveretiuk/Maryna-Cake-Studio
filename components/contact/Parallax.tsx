"use client";

import { JarallaxVideo } from "jarallax/react";

// Contact - parallax hero banner.
export default function Parallax() {
  return (
    <section className="parallax-section">
      <JarallaxVideo
        className="parallax"
        options={{ speed: 0.8 }}
        videoSrc="mp4:/assets/video/contact.mp4"
      />
    </section>
  );
}
