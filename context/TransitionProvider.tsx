"use client";

import { createContext, useContext, useEffect, useRef, RefObject } from "react";
import { usePathname } from "next/navigation";

const CurtainContext = createContext<RefObject<HTMLDivElement | null>>({ current: null });

export function useCurtain() {
  return useContext(CurtainContext);
}

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const curtainRef = useRef<HTMLDivElement>(null);
  const isBackNav = useRef(false);
  const pathname = usePathname();

  // detect browser navigation
  useEffect(() => {
    const handlePopState = () => {
      isBackNav.current = true;
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // animate AFTER route change
  useEffect(() => {
    const curtain = curtainRef.current;

    if (!isBackNav.current) return;

    // Always clear the flag, even if the curtain isn't mounted — otherwise a
    // stale `true` could trigger a phantom reveal on the next forward navigation.
    isBackNav.current = false;

    if (!curtain) return;

    // Take the element as a param so TS keeps the non-null narrowing inside this async closure.
    async function reveal(el: HTMLDivElement) {
      // start covered
      el.style.transform = "translateY(0%)";

      // reveal
      await el.animate(
        [
          { transform: "translateY(0%)" },
          { transform: "translateY(100%)" },
        ],
        {
          duration: 1200,
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          fill: "forwards",
        }
      ).finished;

      // reset
      el.style.transform = "translateY(-100%)";
    }

    reveal(curtain);
  }, [pathname]);

  return (
    <CurtainContext.Provider value={curtainRef}>
      <div ref={curtainRef} id="curtain-transition" />
      {children}
    </CurtainContext.Provider>
  );
}