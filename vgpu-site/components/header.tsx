import { BrandLogo } from "./brand-logo";
import { Search } from "./search";

export function Header() {
  const l = "text-white/60 transition-colors hover:text-white";
  return (
    <header className="flex h-16 items-center gap-2 px-4 sm:gap-3 sm:px-6 text-sm">
      <a href="/#inicio" className="flex items-center gap-2 text-white" aria-label="Zimmer Tech, início">
        <BrandLogo className="h-3 sm:h-4" />
      </a>
      <nav aria-label="Principal" className="hidden items-center gap-5 pl-3 md:flex">
        <a className={l} href="/#sobre">Sobre</a>
        <a className={l} href="/#servicos">Serviços</a>
        <a className={l} href="/#faq">Dúvidas</a>
      </nav>
      <div className="ml-auto"><Search /></div>
      <a href="/#contato" className="whitespace-nowrap rounded-md bg-white px-3 py-1.5 font-medium text-black transition-colors hover:bg-white/85"><span className="sm:hidden">Orçamento</span><span className="hidden sm:inline">Pedir orçamento</span></a>
      <a href="https://www.linkedin.com/in/iuri-z" target="_blank" rel="noopener" aria-label="LinkedIn de Iuri Zimmermann" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-1.5 font-medium text-white backdrop-blur transition-colors hover:border-white/50 hover:bg-white/20">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-4.85c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56V21h-4V9.75Z" /></svg>
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
    </header>
  );
}
