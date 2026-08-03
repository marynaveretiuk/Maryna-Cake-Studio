"use client";

import { useEffect, useState } from "react";

// True once the window `load` event has fired (all images/fonts/resources are in).
// Entrance reveals wait for this so they never animate over unpainted assets.
export function usePageLoaded() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Already loaded (e.g. after a client navigation) — resolve immediately.
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }
    // Otherwise wait for the one-time load event.
    const onLoad = () => setLoaded(true);
    window.addEventListener("load", onLoad, { once: true });

    // Safety net: never keep reveals hidden forever if a request hangs.
    const timer = setTimeout(onLoad, 7000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timer);
    };
  }, []);

  return loaded;
}
