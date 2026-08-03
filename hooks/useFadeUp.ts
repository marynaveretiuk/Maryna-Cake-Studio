"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoaderContext } from "@/context/LoaderContext";
import { usePageLoaded } from "@/hooks/usePageLoaded";

gsap.registerPlugin(ScrollTrigger);

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

interface UseFadeUpOptions {
  start?: string;
  duration?: number;
  stagger?: number;
  delay?: number;
  trigger?: boolean;
}

export function useFadeUp<T extends HTMLElement>(options: UseFadeUpOptions = {}) {
  const ref = useRef<T>(null);
  const { isHiding, isDone } = useLoaderContext();
  const loaded = usePageLoaded();

  const {
    start = "top 90%",
    duration = 1.4,
    stagger = 0.1,
    delay = 0.5,
    trigger = true,
  } = options;

  useGSAP(
    () => {
      if (!ref.current || !isHiding) return;

      gsap.set(ref.current, { autoAlpha: 0, y: "20px" });
      ref.current.classList.remove("hidden-fade");

      if (!loaded) return;

      const tl = gsap.timeline({ paused: true }).to(
        ref.current,
        { duration, ease: "power3.out", stagger, autoAlpha: 1, y: "0em", clearProps: "all" },
        `<${delay}`
      );

      if (trigger) {
        // Refresh positions once the loader is fully gone from the DOM.
        const onDone = () => refreshScrollTriggerOnce();
        window.addEventListener("loaderDone", onDone, { once: true });

        const st = ScrollTrigger.create({
          trigger: ref.current,
          start,
          once: true,
          onEnter: () => tl.play(),
        });

        return () => {
          window.removeEventListener("loaderDone", onDone);
          st.kill();
        };
      }

      tl.play();
    },
    { scope: ref, dependencies: [isHiding, loaded, trigger, start, duration, stagger, delay] }
  );

  // Signal "loader gone" so the ScrollTriggers above refresh.
  useGSAP(
    () => {
      if (isDone) window.dispatchEvent(new Event("loaderDone"));
    },
    { dependencies: [isDone] }
  );

  return ref;
}
