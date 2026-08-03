"use client";

import { ElementType } from "react";
import { useFadeUp } from "@/hooks/useFadeUp";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  start?: string;
  duration?: number;
  stagger?: number;
  as?: ElementType;
}

// Wraps children in a fade-up-on-scroll animation.
export default function FadeUp({
  children,
  className,
  start,
  duration,
  stagger,
  as: Tag = "div",
}: FadeUpProps) {
  const ref = useFadeUp<HTMLElement>({ start, duration, stagger });

  return (
    <Tag ref={ref} className={`hidden-fade ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
