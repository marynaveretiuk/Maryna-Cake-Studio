"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface LoaderContextValue {
  isDone: boolean;
  isHiding: boolean;
  markHiding: () => void;
  markDone: () => void;
}

const LoaderContext = createContext<LoaderContextValue | null>(null);

// `enabled = false` starts already hidden/done, so reveals fire on mount when
// there's no loading screen.
export function LoaderProvider({
  children,
  enabled = true,
}: {
  children: React.ReactNode;
  enabled?: boolean;
}) {
  const [isDone, setIsDone] = useState(!enabled);
  const [isHiding, setIsHiding] = useState(!enabled);

  const markHiding = useCallback(() => setIsHiding(true), []);
  const markDone = useCallback(() => setIsDone(true), []);

  return (
    <LoaderContext.Provider value={{ isDone, isHiding, markHiding, markDone }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoaderContext() {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoaderContext must be used inside LoaderProvider");
  return ctx;
}