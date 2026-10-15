import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Zimmer Tech trata os dados de quem entra em contato pelo site, conforme a LGPD.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

const H = ({ children }: { children: ReactNode }) => <h2 className="mt-12 text-2xl font-light tracking-tight text-white">{children}</h2>;
const L = ({ href, children }: { href: string; children: ReactNode }) => <a className="underline underline-offset-4" href={href}>{children}</a>;

export default function Privacidade() {
  return (
    <div className="min-h-svh bg-black">
      <header className="flex h-16 items-center px-6 text-sm">
        <a href="/" className="font-medium text-white">Zimmer Tech</a>
        <a href="/" className="ml-auto text-white/60 transition-colors hover:text-white">Voltar ao site</a>
      </header>
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12 leading-relaxed text-white/70">
        <p className="mono mb-4 text-xs uppercase tracking-widest text-white/45">LGPD</p>
        <h1 className="text-balance text-4xl font-light leading-[1.05] tracking-tight text-white lg:text-6xl">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-white/45">Última atualização: 15 de outubro de 2026</p>

        <p className="mt-10">Esta política explica, de forma simples, como eu trato os dados pessoais de quem visita este site e entra em contato comigo, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).</p>

        <H>1. Quem é o responsável</H>
        <p className="mt-3">O responsável pelo tratamento dos dados é Iuri Zimmermann, da Zimmer Tech, em Gaspar (SC). Para qualquer assunto sobre seus dados, escreva para <L href="mailto:contato.zimmtech@gmail.com">contato.zimmtech@gmail.com</L>.</p>

        <H>2. Quais dados eu coleto</H>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/30">
          <li><strong className="font-medium text-white/85">Dados que você me envia:</strong> nome, e-mail, prazo desejado e a mensagem que você escrever no formulário de contato, no WhatsApp, por e-mail ou pelo LinkedIn.</li>
          <li><strong className="font-medium text-white/85">Dados de navegação:</strong> este site não usa cookies de publicidade, nem ferramentas de rastreamento ou análise de comportamento. Os servidores de hospedagem podem registrar dados técnicos básicos de acesso (como endereço IP e tipo de navegador), por segurança e funcionamento.</li>
        </ul>

        <H>3. Como o formulário funciona</H>
        <p className="mt-3">Ao enviar o formulário, o WhatsApp abre com a mensagem já pronta e ela só chega até mim quando você confirma o envio por ele. O site não guarda o conteúdo do formulário em nenhum banco de dados.</p>

        <H>4. Para que uso seus dados</H>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/30">
          <li>Responder ao seu contato e entender o que você precisa.</li>
          <li>Preparar e enviar propostas e orçamentos.</li>
          <li>Prestar o serviço contratado e dar suporte depois da entrega.</li>
          <li>Cumprir obrigações legais, quando houver.</li>
        </ul>
        <p className="mt-3">Eu não vendo, não alugo e não uso seus dados para enviar propaganda que você não pediu.</p>

        <H>5. Base legal</H>
        <p className="mt-3">Trato seus dados com base no seu consentimento (ao entrar em contato comigo), na execução de contrato ou de procedimentos preliminares a ele (como uma proposta que você solicitou) e no cumprimento de obrigações legais.</p>

        <H>6. Com quem compartilho</H>
        <p className="mt-3">Seus dados não são compartilhados com terceiros para fins comerciais. Eles podem passar por serviços que usei para me comunicar com você (como e-mail, WhatsApp e LinkedIn) e pela hospedagem do site, sempre dentro do necessário para o funcionamento desses serviços. Também posso compartilhá-los se uma autoridade exigir por lei.</p>

        <H>7. Por quanto tempo guardo</H>
        <p className="mt-3">Mantenho seus dados apenas pelo tempo necessário para atender ao seu contato e, se houver contrato, durante a vigência dele e pelos prazos exigidos por lei. Depois disso, eu os apago ou anonimizo.</p>

        <H>8. Seus direitos</H>
        <p className="mt-3">Você pode, a qualquer momento e sem custo, pedir:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/30">
          <li>confirmação de que trato seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, incorretos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>portabilidade dos dados;</li>
          <li>informação sobre com quem os compartilhei;</li>
          <li>retirada do consentimento e eliminação dos dados tratados com base nele.</li>
        </ul>
        <p className="mt-3">Basta escrever para <L href="mailto:contato.zimmtech@gmail.com">contato.zimmtech@gmail.com</L>. Respondo no menor prazo possível.</p>

        <H>9. Segurança</H>
        <p className="mt-3">Adoto medidas razoáveis para proteger seus dados contra acesso indevido, perda ou alteração, como conexão segura (HTTPS), controle de acesso e o uso apenas do que é necessário. Nenhum sistema é totalmente imune, mas eu trato esse cuidado com seriedade.</p>

        <H>10. Links para outros sites</H>
        <p className="mt-3">Este site tem links para o LinkedIn, o GitHub e o WhatsApp. Esses serviços têm suas próprias políticas de privacidade, pelas quais eu não respondo.</p>

        <H>11. Mudanças nesta política</H>
        <p className="mt-3">Posso atualizar esta política quando necessário. A data da última atualização fica sempre no topo desta página.</p>

        <H>12. Dúvidas ou reclamações</H>
        <p className="mt-3">Fale comigo pelo e-mail acima. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD), em <L href="https://www.gov.br/anpd">gov.br/anpd</L>.</p>
      </main>
    </div>
  );
}
