"use client";

import { useRevealTitle } from "@/hooks/useRevealTitle";
import { useAfterLoader } from "@/hooks/useAfterLoader";

interface RevealTitleProps {
  children: React.ReactNode;
  className?: string;
  start?: string;
  duration?: number;
  stagger?: number;
  trigger?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

// Heading that reveals word-by-word when scrolled into view.
export default function RevealTitle({
  children,
  className,
  start,
  duration,
  stagger,
  trigger = false,
  as: Tag = "h2",
}: RevealTitleProps) {
  const { ref, animate } = useRevealTitle<HTMLHeadingElement>({ start, duration, stagger, trigger });

  // Replay once the loader lifts (manual mode); scroll-triggered mode ignores this.
  useAfterLoader(animate);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
