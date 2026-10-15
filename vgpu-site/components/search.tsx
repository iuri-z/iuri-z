"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SEARCH_INDEX } from "@/lib/search-index";

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const SearchIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
    <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
  </svg>
);

export function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return SEARCH_INDEX.slice(0, 8);
    return SEARCH_INDEX.filter((i) => {
      const hay = norm(`${i.title} ${i.group} ${i.text}`);
      return terms.every((t) => hay.includes(t));
    });
  }, [q]);

  const close = useCallback(() => { setOpen(false); setQ(""); setSel(0); }, []);

  const go = useCallback((href: string) => {
    close();
    if (!href.startsWith("#")) { window.location.href = href; return; }
    const el = document.getElementById(href.slice(1));
    if (el instanceof HTMLDetailsElement) el.open = true;
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    history.replaceState(null, "", href);
  }, [close]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target as HTMLElement)?.tagName ?? "");
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !typing && !open)) {
        e.preventDefault(); setOpen((v) => !v);
      } else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === "Enter" && results[sel]) go(results[sel].href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Pesquisar no site"
        className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-2.5 py-1.5 text-white/50 transition-colors hover:border-white/30 hover:text-white/80 sm:min-w-44 sm:justify-between"
      >
        <span className="inline-flex items-center gap-2"><SearchIcon /><span className="hidden sm:inline">Pesquisar...</span></span>
        <kbd className="mono hidden rounded border border-white/15 px-1.5 text-[11px] sm:inline">Ctrl K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[14vh] backdrop-blur-sm" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div role="dialog" aria-modal="true" aria-label="Pesquisar" className="w-full max-w-xl overflow-hidden rounded-xl border border-white/15 bg-black/90 shadow-[0_24px_80px_rgba(0,0,0,.7)]">
            <div className="flex items-center gap-3 px-4 py-3.5 text-white/50">
              <SearchIcon size={18} />
              <input
                ref={input}
                value={q}
                onChange={(e) => { setQ(e.target.value); setSel(0); }}
                onKeyDown={onInputKey}
                placeholder="Pesquisar"
                aria-label="Pesquisar"
                className="min-w-0 flex-1 bg-transparent text-lg text-white outline-none placeholder:text-white/35"
              />
              <button type="button" onClick={close} className="mono rounded border border-white/20 px-2 py-1 text-[11px] text-white/70 hover:bg-white/10">ESC</button>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto border-t border-white/10 p-2">
              {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-white/45">Nada encontrado para "{q}".</li>}
              {results.map((r, i) => (
                <li key={r.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setSel(i)}
                    onClick={() => go(r.href)}
                    className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left transition-colors ${i === sel ? "bg-white/10 text-white" : "text-white/70"}`}
                  >
                    <span>{r.title}</span>
                    <span className="mono shrink-0 text-[11px] uppercase tracking-wider text-white/35">{r.group}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
