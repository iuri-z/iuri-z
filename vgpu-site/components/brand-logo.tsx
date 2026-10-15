/** Logo Zimmer Tech: "ZIMMER" em imagem e "TECH" com o mesmo brilho cintilante dos títulos (.shine-logo). */
export function BrandLogo({ className = "", lazy = false }: { className?: string; lazy?: boolean }) {
  return (
    <span role="img" aria-label="Zimmer Tech" className={`relative inline-block aspect-[791/64] ${className}`}>
      <img src="/zimmer-tech-logo-zimmer.png" alt="" aria-hidden="true" width={791} height={64} loading={lazy ? "lazy" : undefined} decoding="async" className="absolute inset-0 size-full" />
      <span aria-hidden="true" className="shine-logo absolute inset-0" />
    </span>
  );
}
