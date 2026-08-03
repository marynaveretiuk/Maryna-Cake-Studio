"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import type { LenisOptions } from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({
  children,
  options = {},
}: {
  children: React.ReactNode;
  options?: LenisOptions;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  // Capture the options given at mount; Lenis is created once and never re-reads them.
  const optionsRef = useRef(options);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1,
      infinite: false,
      anchors: true,
      syncTouch: false, // Better mobile performance
      ...optionsRef.current,
    });

    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []); // Empty dependency array - only initialize once

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

// Returns the Lenis instance, or null until it's created on mount.
// Consumers should guard for null (e.g. `if (!lenis) return`).
export function useLenis() {
  return useContext(LenisContext);
}
