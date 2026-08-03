"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useSlideRouter } from "@/hooks/useSlideRouter";

interface SlideLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children?: ReactNode;
}

// Anchor that navigates through the slide/curtain page transition instead of
// the browser default. Forwards all other anchor props and the caller's onClick.
export default function SlideLink({ href, children, onClick, ...rest }: SlideLinkProps) {
  const router = useSlideRouter();

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        router.push(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
