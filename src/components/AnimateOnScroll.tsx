"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "span";
  delay?: number;
}

// ponytail: one IntersectionObserver per mount, CSS handles animation via .is-visible
export default function AnimateOnScroll({ children, className = "", as: Tag = "div", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Skip if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("is-visible"), delay);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </Tag>
  );
}
