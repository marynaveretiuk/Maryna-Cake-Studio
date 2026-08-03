"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoaderContext } from "@/context/LoaderContext";

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create("reveal", "0.4, 0, 0.2, 1");

// Coalesce many refresh requests into a single ScrollTrigger.refresh() per frame.
let refreshQueued = false;
function refreshScrollTriggerOnce() {
  if (refreshQueued) return;
  refreshQueued = true;
  requestAnimationFrame(() => {
    refreshQueued = false;
    ScrollTrigger.refresh();
  });
}

interface UseImageRevealOptions {
  start?: string;
  duration?: number;
  scale?: number;
  trigger?: boolean;
  enabled?: boolean; // defer the reveal until true (e.g. tile loaded by Load More)
}

interface UseImageRevealReturn<TContainer extends HTMLElement, TImage extends HTMLElement> {
  containerRef: React.RefObject<TContainer | null>;
  imgRef: React.RefObject<TImage | null>;
  animate: () => void;
}

export function useImageReveal<TContainer extends HTMLElement, TImage extends HTMLElement>(
  options: UseImageRevealOptions = {}
): UseImageRevealReturn<TContainer, TImage> {
  const containerRef = useRef<TContainer>(null);
  const imgRef = useRef<TImage>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const pendingPlay = useRef(false);
  const enabledAtMount = useRef<boolean | null>(null);

  const { isHiding, isDone } = useLoaderContext();

  const {
    start = "top 90%",
    duration = 1.4,
    scale = 1.15,
    trigger = true,
    enabled = true,
  } = options;

  // Both modes build timeline on isHiding (and once enabled)
  useGSAP(
    () => {
      // Capture once: was the tile enabled at mount (initial) or later (Load More)?
      if (enabledAtMount.current === null) enabledAtMount.current = enabled;

      if (!containerRef.current || !imgRef.current || !isHiding || !enabled) return;

      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        imgRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          scale,
          transformOrigin: "center center",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration,
          ease: "reveal",
          clearProps: "scale,transformOrigin",
        }
      );

      // Tiles enabled after mount (Load More) reveal at once; no scroll wait.
      if (enabledAtMount.current === false) {
        tl.play();
        return;
      }

      if (trigger) {
        // Refresh positions once the loader is fully gone from the DOM.
        const refreshOnDone = () => refreshScrollTriggerOnce();
        window.addEventListener("loaderDone", refreshOnDone, { once: true });

        const st = ScrollTrigger.create({
          trigger: containerRef.current,
          start,
          once: true,
          onEnter: () => tl.play(),
        });

        return () => {
          window.removeEventListener("loaderDone", refreshOnDone);
          st.kill();
        };
      }

      // trigger=false — manual mode
      tlRef.current = tl;

      if (pendingPlay.current) {
        tl.play();
        pendingPlay.current = false;
      }

      return () => {
        tlRef.current = null;
      };
    },
    { scope: containerRef, dependencies: [isHiding, enabled, trigger, start, duration, scale] }
  );

  // Signal "loader gone" so the ScrollTriggers above refresh.
  useGSAP(
    () => {
      if (!isDone) return;
      window.dispatchEvent(new Event("loaderDone"));
    },
    { dependencies: [isDone] }
  );

  function animate() {
    if (trigger) return;

    if (tlRef.current) {
      tlRef.current.play();
    } else {
      pendingPlay.current = true;
    }
  }

  return { containerRef, imgRef, animate };
}