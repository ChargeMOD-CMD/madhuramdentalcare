import { useEffect, useRef } from "react";

export function SmileCursor() {
  const orbRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const trail = trailsRef.current;
    const positions = trail.map(() => ({ x, y }));

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[data-cursor='hover']")) {
        orbRef.current?.classList.add("cursor-hover");
      } else {
        orbRef.current?.classList.remove("cursor-hover");
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf = 0;
    const tick = () => {
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      }
      let px = x, py = y;
      positions.forEach((p, i) => {
        p.x += (px - p.x) * 0.25;
        p.y += (py - p.y) * 0.25;
        const el = trail[i];
        if (el) {
          el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%,-50%) scale(${1 - i * 0.12})`;
          el.style.opacity = `${1 - i * 0.18}`;
        }
        px = p.x; py = p.y;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={orbRef} className="cursor-orb" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailsRef.current[i] = el; }}
          className="cursor-trail"
        />
      ))}
    </>
  );
}
