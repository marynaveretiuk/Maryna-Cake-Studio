"use client";

import { useEffect, useRef } from "react";
import { useLoaderContext } from "@/context/LoaderContext";
import { usePageLoaded } from "@/hooks/usePageLoaded";

// Runs `fn` once the loader curtain lifts AND the page has fully loaded (optionally
// after `delay` seconds), so reveals fire in sync instead of over unpainted images.
export function useAfterLoader(fn: () => void, delay = 0) {
  // Keep the latest fn in a ref so changing it doesn't re-run the effect.
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const { isHiding } = useLoaderContext();
  const loaded = usePageLoaded();

  useEffect(() => {
    if (!isHiding || !loaded) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (delay > 0) {
      timeoutId = setTimeout(() => fnRef.current(), delay * 1000); // delay in seconds
    } else {
      fnRef.current();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isHiding, loaded, delay]);
}