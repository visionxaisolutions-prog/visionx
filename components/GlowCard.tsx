"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export default function GlowCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <div
      ref={ref}
      className={`glow-card${className ? ` ${className}` : ""}`}
      onMouseMove={handleMouseMove}
    >
      <div className="glow-card-shine" aria-hidden="true" />
      {children}
    </div>
  );
}
