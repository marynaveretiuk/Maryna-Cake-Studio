"use client";

import { useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { useCurtain } from "@/context/TransitionProvider";
import { useLenis } from "@/context/LenisProvider";
import { usePathname } from "next/navigation";

export function useSlideRouter() {
  const router = useTransitionRouter();
  const curtainRef = useCurtain();
  const lenis = useLenis();
  const pathname = usePathname();
  const isTransitioning = useRef(false);

  // Jump to the top of the new page (Lenis owns the scroll, so reset it too).
  function scrollToTop() {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }

  async function push(href: string) {
    const curtain = curtainRef.current;

    // Ignore re-entrant clicks mid-transition and same-page navigations.
    if (isTransitioning.current) return;
    if (href === pathname) return;

    isTransitioning.current = true;

    if (!curtain) {
      router.push(href);
      scrollToTop();
      isTransitioning.current = false;
      return;
    }

    // Cover
    await curtain.animate(
      [{ transform: "translateY(-100%)" }, { transform: "translateY(0%)" }],
      { duration: 1000, easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)", fill: "forwards" }
    ).finished;

    // Navigate while screen is covered
    router.push(href);

    // Wait for new page to paint before revealing
    await new Promise<void>((resolve) => setTimeout(resolve, 100));

    // Reset scroll while still covered, so the new page reveals from the top
    scrollToTop();

    // Reveal
    curtain.animate(
      [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
      { duration: 1200, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", fill: "forwards" }
    ).finished.then(() => {
      curtain.style.transform = "translateY(-100%)";
      isTransitioning.current = false;
    });
  }

  return { push };
}