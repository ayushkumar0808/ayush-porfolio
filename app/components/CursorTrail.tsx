"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef(
    Array.from({ length: 8 }, () => ({ x: -100, y: -100 }))
  );
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const isDesktop =
      window.matchMedia("(min-width: 768px)").matches &&
      window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const loop = () => {
      trail.current.unshift({ ...mouse.current });
      if (trail.current.length > 8) trail.current.length = 8;
      trail.current.forEach((pos, i) => {
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
          el.style.opacity = `${1 - i * 0.12}`;
        }
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="cursor-trail fixed inset-0 z-[60] pointer-events-none hidden md:block">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className="trail-dot"
        />
      ))}
    </div>
  );
}
