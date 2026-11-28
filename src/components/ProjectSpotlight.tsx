"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

export default function ProjectSpotlight({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = container.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return <div ref={container} className="project-spotlight" onPointerMove={move}>{children}</div>;
}
