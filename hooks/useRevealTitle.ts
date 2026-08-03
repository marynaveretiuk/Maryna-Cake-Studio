"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

interface UseRevealTitleOptions {
  start?: string;
  duration?: number;
  stagger?: number;
  trigger?: boolean;
}

interface UseRevealTitleReturn<T> {
  ref: React.RefObject<T | null>;
  animate: () => void;
}

export function useRevealTitle<T extends HTMLElement>(
  options: UseRevealTitleOptions = {}
): UseRevealTitleReturn<T> {
  const ref = useRef<T>(null);
  const playRef = useRef<(() => void) | null>(null);
  const pendingPlay = useRef(false);

  const {
    start = "top 90%",
    duration = 1.6,
    stagger = -.075,
    trigger = true,
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      // Split the title into words, then wrap each word's text in an inner div.
      // The word stays put as a clip mask while its inner slides/rotates up.
      const split = new SplitText(ref.current, {
        type: "words",
        wordsClass: "single-word",
      });

      const innerEls = split.words.map((word) => {
        const inner = document.createElement("div");
        inner.classList.add("single-word-inner");
        while (word.firstChild) inner.appendChild(word.firstChild);
        word.appendChild(inner);
        return inner;
      });

      // Start each word pushed down and tilted, ready to rise into place.
      gsap.set(innerEls, { yPercent: 250, rotate: 15 });

      const tl = gsap.timeline({
        scrollTrigger: trigger
          ? { trigger: ref.current, start }
          : undefined,
        paused: !trigger,
      }).to(innerEls, {
        duration,
        ease: "Expo.easeOut",
        stagger,
        yPercent: 0,
        rotate: 0,
        delay: 0.075,
      });

      // restart (not play) so animate() can replay the reveal from the start
      // on every call — e.g. each time a slider returns to a slide.
      playRef.current = () => tl.restart();

      if (pendingPlay.current) {
        tl.restart();
        pendingPlay.current = false;
      }

      return () => {
        playRef.current = null;
        innerEls.forEach((inner) =>
          inner.replaceWith(...Array.from(inner.childNodes))
        );
        split.revert();
      };
    },
    { scope: ref, dependencies: [start, trigger] }
  );

  function animate() {
    if (playRef.current) {
      playRef.current();
    } else {
      pendingPlay.current = true;
    }
  }

  return { ref, animate };
}