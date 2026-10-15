"use client";
import type { FormEvent } from "react";

const WA = "5547984666032";
const field = "rounded-md border border-white/15 bg-transparent px-3 py-2.5 text-base text-white outline-none focus:border-white/50";

/** Monta a mensagem e abre o WhatsApp do Iuri com ela pronta. Nada é guardado no site. */
export function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const linhas = [
      "Olá, Iuri! Vim pelo site da Zimmer Tech.",
      `Nome: ${get("nome")}`,
      `E-mail: ${get("email")}`,
      get("prazo") && `Prazo desejado: ${get("prazo")}`,
      "",
      get("mensagem"),
    ].filter((l) => l !== false);
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(linhas.join("\n"))}`, "_blank", "noopener");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-white/10 bg-black p-6 md:mt-8">
      <label className="grid gap-1.5 text-sm text-white/55">Seu nome<input name="nome" type="text" required autoComplete="name" className={field} /></label>
      <label className="grid gap-1.5 text-sm text-white/55">Seu e-mail<input name="email" type="email" required autoComplete="email" className={field} /></label>
      <label className="grid gap-1.5 text-sm text-white/55">Prazo desejado<input name="prazo" type="text" className={field} /></label>
      <label className="grid gap-1.5 text-sm text-white/55">O que você precisa?<textarea name="mensagem" rows={4} required className={field} /></label>
      <button className="glass-btn justify-self-start" type="submit"><span>Enviar mensagem</span></button>
      <p className="text-xs text-white/40">Ao enviar, o WhatsApp abrirá com a mensagem pronta, para você só confirmar o envio. Uso seus dados apenas para responder ao seu contato. <a className="underline underline-offset-2" href="/privacidade">Política de privacidade</a>.</p>
    </form>
  );
}
