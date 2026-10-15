/** Logo Zimmer Tech: "ZIMMER" em imagem e "TECH" com o mesmo brilho cintilante dos títulos (.shine-logo). */
export function BrandLogo({ className = "", lazy = false, decorative = false }: { className?: string; lazy?: boolean; decorative?: boolean }) {
  const a11y = decorative ? { "aria-hidden": true as const } : { role: "img", "aria-label": "Zimmer Tech" };
  return (
    <span {...a11y} className={`relative inline-block aspect-[791/64] ${className}`}>
      <img src="/zimmer-tech-logo-zimmer.png" alt="" aria-hidden="true" width={791} height={64} loading={lazy ? "lazy" : undefined} decoding="async" className="absolute inset-0 size-full" />
      <span aria-hidden="true" className="shine-logo absolute inset-0" />
    </span>
  );
}
