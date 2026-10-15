"use client";
import { useEffect, useRef } from "react";

/** Pontos brancos muito discretos, como um céu de fundo: cintilam e derivam devagar. */
export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    type Star = { x: number; y: number; z: number; r: number; a: number; p: number; s: number };
    let stars: Star[] = [];

    const seed = () => {
      const dpr = 1;
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min((w * h) / 14000, 120));
      stars = Array.from({ length: n }, () => {
        const z = Math.random();
        return { x: Math.random() * w, y: Math.random() * h, z, r: 0.4 + z * 0.9, a: 0.12 + z * 0.4, p: Math.random() * 6.28, s: 0.4 + Math.random() * 1.2 };
      });
    };

    let last = 0;
    const draw = (t: number) => {
      if (!still && t - last < 33) { raf = requestAnimationFrame(draw); return; }
      last = t;
      ctx.clearRect(0, 0, w, h);
      const sy = window.scrollY;
      const time = t / 1000;
      for (const s of stars) {
        const drift = still ? 0 : time * (2 + s.z * 5);
        const y = (((s.y - drift - sy * s.z * 0.12) % h) + h) % h;
        const tw = still ? 1 : 0.6 + 0.4 * Math.sin(time * s.s + s.p);
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, 6.2832);
        ctx.fill();
      }
      if (!still) raf = requestAnimationFrame(draw);
    };

    seed();
    draw(0);
    if (!still) raf = requestAnimationFrame(draw);
    const onResize = () => { seed(); if (still) draw(0); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 size-full" />;
}
