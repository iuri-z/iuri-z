"use client";
import { useEffect, useState, type ReactNode } from "react";

/** Barra fixa: transparente sobre o hero, com fundo e desfoque assim que a página rola. */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className={`sticky top-0 z-50 border-b transition-colors duration-300 ${solid ? "border-white/10 bg-black/85 backdrop-blur-md" : "border-transparent bg-transparent"}`}>
      {children}
    </div>
  );
}
