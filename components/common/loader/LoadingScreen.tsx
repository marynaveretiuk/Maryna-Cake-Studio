"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { useLoaderContext } from "@/context/LoaderContext";
import { useLenis } from "@/context/LenisProvider";
import { loader } from "@/data/loader";

gsap.registerPlugin(CustomEase, SplitText);
CustomEase.create("curtain", "0.215, 0.61, 0.355, 1");

// Intro loading screen shown until the first page is ready.
export default function LoadingScreen() {
  const { markDone, markHiding, isHiding } = useLoaderContext();
  const lenis = useLenis();

  const loaderRef = useRef<HTMLDivElement>(null);
  const headMainRef = useRef<HTMLHeadingElement>(null);
  const wordWrapRef = useRef<HTMLDivElement>(null);
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  // Lock scroll while the loader shows, release when the curtain lifts. Keyed on
  // `isHiding` so it's correct whenever Lenis becomes available.
  useEffect(() => {
    if (!lenis) return;
    if (isHiding) lenis.start();
    else lenis.stop();
  }, [lenis, isHiding]);

  useGSAP(
    () => {
      const reveal = () => markHiding();

      const tl = gsap.timeline({ onComplete: markDone });

      const splitWords = (el: Element | null) => {
        const split = new SplitText(el, {
          type: "words",
          wordsClass: "single-word",
        });
        const inners = split.words.map((word) => {
          const inner = document.createElement("div");
          inner.classList.add("single-word-inner");
          while (word.firstChild) inner.appendChild(word.firstChild);
          word.appendChild(inner);
          return inner;
        });
        return { split, inners };
      };

      const main = splitWords(headMainRef.current);
      const words = splitWords(wordWrapRef.current);
      const allInners = [...main.inners, ...words.inners];

      gsap.set([headMainRef.current, ...headingsRef.current], { opacity: 1 });
      gsap.set(allInners, { yPercent: 250, rotate: 15 });

      tl.to(main.inners, { yPercent: 0, rotate: 0, duration: 1.5, ease: "Expo.easeOut", stagger: 0.05 })
        .to(words.inners, { yPercent: 0, rotate: 0, duration: 1.5, ease: "Expo.easeOut", stagger: 0.05 }, "<0.4")
        .to(headingsRef.current, { yPercent: -100 * (loader.words.length - 1), duration: 2.5, ease: "power4.inOut" }, 1)
        .to(wordWrapRef.current, { opacity: 0, duration: 0.5, ease: "power1.out" }, ">")
        .to(headMainRef.current, { opacity: 0, duration: 0.5, ease: "power1.out" }, "<")
        .call(reveal)
        .to(loaderRef.current, { yPercent: 100, duration: 1.2, ease: "curtain" }, ">")
        .set(loaderRef.current, { display: "none" });

      return () => {
        allInners.forEach((inner) => inner.replaceWith(...Array.from(inner.childNodes)));
        main.split.revert();
        words.split.revert();
      };
    },
    { scope: loaderRef }
  );

  return (
    <div ref={loaderRef} className="loader" aria-hidden="true">
      <div className="loader-content">
        <h1 ref={headMainRef} className="loader-main split-words">{loader.mainWord}</h1>
        <div ref={wordWrapRef} className="loader-word-wrap split-words">
          {loader.words.map((word, i) => (
            <h1 key={word} ref={(el) => { headingsRef.current[i] = el; }} className="loader-heading">
              {word}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
