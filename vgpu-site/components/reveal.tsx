"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Entrada suave ao rolar até o bloco. Sem JS ou com movimento reduzido, o conteúdo fica visível. */
export function Reveal({ children, delay = 0, from = "up", as: Tag = "div", className = "" }: {
  children: ReactNode; delay?: number; from?: "up" | "left" | "right"; as?: "div" | "li"; className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "hidden" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;
    setState("hidden");
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setState("in"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal={state}
      data-from={from}
      style={{ transitionDelay: state === "in" ? `${delay}ms` : undefined }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
