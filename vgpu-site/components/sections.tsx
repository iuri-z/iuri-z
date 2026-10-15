import type { ReactNode } from "react";
import { BrandLogo } from "./brand-logo";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

const F = ({ children }: { children: ReactNode }) => <span className="fill">{children}</span>;
const Sec = ({ id, k, title, children, shine }: { id: string; k?: string; title: ReactNode; children: ReactNode; shine?: boolean }) => (
  <section id={id} className="border-t border-white/10 py-14 sm:py-20 lg:py-28">
    {k && <p className="mono mb-4 text-xs uppercase tracking-widest text-white/45">{k}</p>}
    <h2 className={`mb-10 max-w-3xl text-balance text-4xl font-light leading-[1.05] tracking-tight lg:text-6xl ${shine ? "shine" : ""}`}>{title}</h2>
    {children}
  </section>
);
const Acc = ({ id, q, open, children }: { id?: string; q: string; open?: boolean; children: ReactNode }) => (
  <details id={id} open={open} className="border-b border-white/10 last:border-b-0">
    <summary className="flex items-center justify-between gap-6 py-5 text-lg transition-colors hover:text-white/70">
      {q}<span className="plus text-2xl text-white/50 transition-transform">+</span>
    </summary>
    <div className="max-w-2xl space-y-3 pb-6 text-white/65">{children}</div>
  </details>
);
const Btn = ({ href, children, solid }: { href: string; children: ReactNode; solid?: boolean }) => (
  <a href={href} className={`inline-flex items-center rounded-md px-5 py-3 text-sm font-medium transition-colors ${solid ? "bg-white text-black hover:bg-white/85" : "border border-white/20 text-white hover:bg-white/10"}`}>{children}</a>
);
const Dl = ({ rows }: { rows: [string, ReactNode][] }) => (
  <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_1fr]">
    {rows.map(([a, b]) => (<div key={a} className="contents"><dt className="mono pt-0.5 text-xs uppercase tracking-wider text-white/45">{a}</dt><dd className="text-white/75">{b}</dd></div>))}
  </dl>
);
const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="underline underline-offset-4" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{children}</a>
);

const TI: [string, string, string][] = [
  ["Modernização de sistemas legados", "Atualizo sistemas antigos para versões modernas, em etapas, sem parar a sua operação.", "Legado"],
  ["Integrações e APIs", "Conecto sistemas entre si e organizo grandes volumes de dados, com segurança e bom desempenho.", "Dados"],
  ["Sustentação e evolução", "Corrijo, hospedo, versiono e melhoro continuamente os sistemas que já estão em produção.", "Operação"],
  ["Diagnóstico de saúde de código", "Analiso repositórios com prazo definido, apoiado em uma ferramenta própria que desenvolvi.", "Análise"],
  ["Reforço de equipe", "Atuo como desenvolvedor backend dentro do seu time, no seu fluxo e nas suas ferramentas.", "Time"],
];

export function Sections() {
  return (
    <>
      {/* SOBRE (logo abaixo do hero) */}
      <Sec id="sobre" title="Sobre mim">
        <div className="grid items-stretch gap-10 md:grid-cols-[minmax(0,20rem)_1fr]">
          <Reveal from="left" className="relative min-h-[22rem] overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/iuri-sobre.jpg" alt="Iuri Zimmermann sorrindo, de jaqueta preta, em frente a uma catedral gótica" className="absolute inset-0 h-full w-full object-cover" />
          </Reveal>
          <Reveal from="right" delay={120} className="max-w-xl space-y-4 text-lg text-white/70">
            <p>Sou Iuri, desenvolvedor de software com 5 anos de experiência, especializado em backend, evolução de sistemas e aprimoramento de soluções existentes. Ajudo empresas a desenvolver sistemas, automatizar processos e transformar necessidades de negócio em soluções de software confiáveis e sustentáveis.</p>
            <p>Atuo como consultor independente, à frente da Zimmer Tech, a minha empresa: é comigo que você fala e sou eu quem responde por cada entrega. Trabalho com diferentes projetos e tecnologias conforme as necessidades de cada negócio. Atendo empresas de todo o Brasil remotamente.</p>
            <p>Meu trabalho é pautado pela comunicação clara, pelo escopo bem definido e por entregas progressivas. Você sabe o que será feito, por que será feito e o que esperar de cada etapa. Busco alinhar expectativas desde o início, cumprir o que foi combinado e desenvolver soluções cujo código possa ser compreendido, mantido e evoluído ao longo do tempo.</p>
          </Reveal>
        </div>
      </Sec>

      {/* PARA QUEM */}
      <section aria-label="Escolha o seu caminho" className="border-b border-white/10">
        {[
          ["#servicos", "Tenho um negócio e preciso de um site ou sistema", "Você conta o problema em português simples. Eu cuido do resto."],
          ["#times-ti", "Sou da área de TI e preciso de reforço técnico", "Eu atuo com backend, integrações, legado e sustentação."],
          ["#recrutadores", "Sou recrutador(a)", "Meu perfil resumido, currículo e LinkedIn em um lugar só."],
        ].map(([h, t, d], i) => (
          <Reveal key={h} delay={i * 90}>
            <a href={h} className="spot group grid items-center gap-x-8 gap-y-1 border-t border-white/10 px-2 py-7 transition-all hover:px-5 md:grid-cols-[3rem_1.2fr_1fr_2rem]">
              <span className="mono text-xs text-white/40">0{i + 1}</span>
              <strong className="text-xl font-light leading-snug lg:text-2xl">{t}</strong>
              <span className="text-sm text-white/55">{d}</span>
              <span className="hidden text-xl text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white md:block">→</span>
            </a>
          </Reveal>
        ))}
      </section>

      {/* SERVIÇOS */}
      <Sec shine id="servicos" k="Para empresas e pessoas" title="O que eu posso fazer pelo seu negócio">
        <p className="mb-8 max-w-xl text-white/60">Sem termos técnicos. Para cada serviço: o problema que ele resolve, o que eu entrego e um exemplo do dia a dia.</p>
        <div className="border-t border-white/10">
          <Acc id="servico-sites" open q="01  Sites e landing pages"><Dl rows={[["O problema","Seus clientes não encontram você, ou não sabem como chamar, pedir orçamento ou ver o que você vende."],["O que eu entrego","Um site claro, rápido, que funciona bem no celular e leva o visitante a entrar em contato."],["Exemplo de uso","Uma página com seus serviços, fotos e um botão que abre o WhatsApp já com a mensagem pronta."]]} /></Acc>
          <Acc id="servico-sistemas" q="02  Sistemas sob medida e ferramentas internas"><Dl rows={[["O problema","Planilhas espalhadas, controles no caderno e informações que ninguém acha na hora que precisa."],["O que eu entrego","Uma ferramenta feita para o jeito que a sua empresa trabalha, com cadastros, painéis e controles."],["Exemplo de uso","Controle de estoque com cadastro de produtos e um painel que mostra o que está acabando."]]} /></Acc>
          <Acc id="servico-automacao" q="03  Automação de tarefas repetitivas"><Dl rows={[["O problema","Gente boa perdendo horas copiando dados de um lugar para outro, todo dia."],["O que eu entrego","Um processo automático que faz o trabalho repetitivo sozinho e com menos erro."],["Exemplo de uso","Os pedidos que chegam por formulário já caindo organizados em uma planilha ou no seu sistema."]]} /></Acc>
          <Acc id="servico-manutencao" q="04  Manutenção e suporte de sistemas existentes"><Dl rows={[["O problema","Você tem um site ou sistema que ficou parado, apresenta erro ou ninguém mais sabe mexer."],["O que eu entrego","Eu corrijo, atualizo e mantenho funcionando o que você já tem, com suporte direto comigo."],["Exemplo de uso","Corrigir o formulário que parou de enviar e-mails e ajustar o site para abrir bem no celular."]]} /></Acc>
        </div>
        <div className="mt-10"><Btn href="#contato" solid>Quero conversar sobre o meu caso</Btn></div>
      </Sec>

      {/* TI */}
      <Sec shine id="times-ti" k="Para times de TI" title="Reforço de desenvolvimento para quem já tem produto no ar">
        <p className="mb-8 max-w-xl text-white/60">Entro no seu contexto, leio o código que existe e entrego mudanças pequenas, revisáveis e testadas.</p>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {TI.map(([t, d, tag], i) => (
            <Reveal as="li" key={t} delay={i * 90} className="spot flex flex-col bg-black p-6"><h3 className="text-lg">{t}</h3><p className="mt-2 text-sm text-white/55">{d}</p><span className="mono mt-auto pt-5 text-[11px] uppercase tracking-widest text-white/30">{tag}</span></Reveal>
          ))}
          <Reveal as="li" delay={TI.length * 90} className="cta-tile">
            <a href="#contato" className="group relative z-10 flex h-full flex-col justify-between gap-4 p-6">
              <span className="mono text-xs uppercase tracking-widest text-white/50">Seu time</span>
              <span className="block text-lg font-light leading-snug">Tem uma fila de demandas ou um prazo apertado? Vamos conversar.</span>
              <span className="block text-white/70 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </ul>
      </Sec>

      {/* IA */}
      <Sec shine id="ia" title="Entrega com IA">
        <p className="mb-8 max-w-xl text-white/60">Uso IA para entregar mais rápido, e eu respondo pelo resultado: especifico, reviso, testo e acompanho cada etapa.</p>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-stretch lg:gap-16">
          <ol className="timeline relative ml-3 flex flex-col justify-between gap-5 border-l border-white/15">
            {[["Conversa inicial","Entendo o seu problema e o que significa \"pronto\" para você."],["Proposta","Escrevo escopo, entregas e prazos de forma clara, antes de começar."],["Entregas parciais","Você acompanha o que estou fazendo, sem esperar até o fim."],["Testes","Eu mesmo testo e reviso o que foi produzido, com ou sem apoio de IA."],["Entrega","Deixo tudo no ar, funcionando e explicado."],["Suporte","Acompanho você depois da entrega, conforme combinado na proposta."]].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 70} className="relative pl-7">
                <span className="tl-dot absolute -left-[7px] top-1.5 size-3.5 rounded-full border border-white/40 bg-black" />
                <div className="flex items-baseline gap-3"><span className="mono text-xs text-white/40">0{i + 1}</span><h3 className="text-lg">{t}</h3></div>
                <p className="mt-0.5 text-sm text-white/55">{d}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal from="right" className="h-full">
            <div id="ia-beneficio" className="glass-card h-full space-y-4 rounded-2xl p-6 text-white/70 sm:p-7">
              <h3 className="text-2xl font-light text-white">Qual o benefício de entregar com IA?</h3>
              <p>Você recebe mais rápido e com mais cuidado. A IA me dá agilidade; a qualidade vem do meu trabalho: eu leio, testo e organizo cada parte do código para que ele seja seguro, estável e fácil de manter e de evoluir no futuro.</p>
              <p>Isso significa acessos e permissões bem definidos, dados validados, senhas e chaves protegidas, e um projeto documentado e organizado, que continua funcionando e crescendo junto com o seu negócio. Se você tiver alguma exigência específica de segurança ou de LGPD, alinhamos já na proposta.</p>
              <ul className="flex flex-wrap gap-2 pt-2">{["Segurança","Manutenção","Evolução","Agilidade"].map((b) => <li key={b} className="mono rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">{b}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </Sec>

      {/* RECRUTADORES */}
      <Sec id="recrutadores" k="Para recrutadores" title="O perfil em 30 segundos">
        <div className="grid gap-10 md:grid-cols-[1fr_17rem] md:items-start lg:gap-16">
          <div>
            <ul className="max-w-xl space-y-3 text-white/70">
              <li>Sou o dono e responsável técnico da Zimmer Tech, desenvolvedor full stack com foco em backend e cerca de 5 anos de experiência.</li>
              <li>Tenho base sólida em .NET e foco em integrações e transformação de dados em ambientes de alto volume.</li>
              <li>Atuo como consultor de software, com vários projetos em paralelo em setores diferentes.</li>
              <li>Já entreguei projetos com Vue, PHP, Oracle APEX e outras tecnologias, de front-end a banco de dados.</li>
              <li>Moro em Gaspar (SC) e atuo remoto.</li>
            </ul>
            <dl className="mt-10 border-b border-white/10">
              {[["Stack", ".NET Framework e .NET Core · C# · SQL Server · Entity Framework · APIs REST · RabbitMQ · Docker · Vue · PHP · Oracle APEX"], ["Formação", "Técnico Integrado em Programação de Computadores (IFSC); extensão universitária na UNIPDS (em andamento)"], ["Disponibilidade", "A combinar"]].map(([a, b]) => (
                <div key={a} className="grid gap-1 border-t border-white/10 py-4 sm:grid-cols-[9rem_1fr] sm:gap-8">
                  <dt className="mono pt-0.5 text-xs uppercase tracking-wider text-white/45">{a}</dt>
                  <dd className="text-white/70">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="w-full space-y-9 pb-4 md:space-y-10">
          <Reveal from="right" className="relative aspect-square w-full overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/iuri-2.jpg" alt="Iuri Zimmermann sorrindo, de camiseta preta e casaco azul nos ombros, diante de um monumento branco" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </Reveal>
            <a href="/curriculo-iuri-zimmermann.pdf" download className="glass-btn flex w-full items-center justify-center text-center no-underline"><span>Baixar currículo (PDF)</span></a>
          </div>
        </div>
      </Sec>

      {/* FAQ */}
      <Sec id="faq" k="Perguntas frequentes" title="Dúvidas comuns">
        <div className="border-t border-white/10">
          <Acc id="faq-prazo" q="Quanto tempo leva um projeto?"><p>Depende do tamanho. Um site simples e um sistema sob medida levam tempos bem diferentes. Eu informo o prazo na proposta, depois de entender o que precisa ser feito. <F>[PREENCHER: prazos típicos]</F></p></Acc>
          <Acc id="faq-pagamento" q="Como funciona o pagamento e o contrato?"><p>Deixo o combinado por escrito, com escopo, entregas e prazos, antes de começar. Os valores eu converso diretamente com você. <F>[PREENCHER: forma de pagamento, entrada, contrato]</F></p></Acc>
          <Acc id="faq-codigo" q="De quem é o código?"><p><F>[PREENCHER: regra de propriedade do código e da documentação]</F></p></Acc>
          <Acc id="faq-fora" q="Atende fora de Santa Catarina?"><p>Sim. Eu moro em Gaspar (SC), mas atendo todo o Brasil, de forma remota, por vídeo, WhatsApp e e-mail.</p></Acc>
          <Acc id="faq-suporte" q="Como é feito o suporte depois da entrega?"><p>Você fala direto comigo, sem intermediários. Eu também posso cuidar do domínio, da hospedagem e da manutenção do seu site depois de no ar. <F>[PREENCHER: período de garantia, canais e condições]</F></p></Acc>
          <Acc id="faq-orcamento" q="Como funciona o orçamento?"><p>Você conta o que precisa, eu faço perguntas e devolvo uma proposta com escopo e prazo. <F>[PREENCHER: se é gratuito, validade e como o valor é calculado]</F></p></Acc>
        </div>
      </Sec>

      {/* CONTATO */}
      <section id="contato" className="border-t border-white/10 py-16 lg:py-20">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-widest text-white/45">Contato</p>
            <h2 className="shine mb-8 text-balance text-4xl font-light leading-[1.05] tracking-tight lg:text-6xl">Conte o que você precisa e receba meu retorno em 24 horas</h2>
            <Dl rows={[["WhatsApp",<A key="w" href="https://wa.me/5547984666032">+55 (47) 98466-6032</A>],["E-mail",<A key="e" href="mailto:contato.zimmtech@gmail.com">contato.zimmtech@gmail.com</A>],["LinkedIn",<A key="l" href="https://www.linkedin.com/in/iuri-z">linkedin.com/in/iuri-z</A>]]} />
          </div>
          <ContactForm />
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="grid gap-8 border-t border-white/10 py-12 text-sm text-white/55 md:grid-cols-3">
        <div className="space-y-1"><BrandLogo lazy className="mb-3 h-4" /><p>Responsável: Iuri Zimmermann</p><p>Gaspar, Santa Catarina</p><p>Atendimento remoto para todo o Brasil</p></div>
        <div className="space-y-1"><a className="block hover:text-white" href="mailto:contato.zimmtech@gmail.com">contato.zimmtech@gmail.com</a><a className="block hover:text-white" href="https://www.linkedin.com/in/iuri-z" target="_blank" rel="noopener">LinkedIn</a><a className="block hover:text-white" href="https://github.com/iuri-z" target="_blank" rel="noopener">GitHub</a></div>
        <div className="space-y-1"><a className="block hover:text-white" href="/privacidade">Política de privacidade (LGPD)</a><p>©2026 Zimmer Tech</p></div>
      </footer>
    </>
  );
}
