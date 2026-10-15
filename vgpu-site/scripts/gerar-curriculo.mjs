// Gera public/curriculo-iuri-zimmermann.pdf (1 página, A4).
// Para atualizar o currículo, edite o objeto `perfil` abaixo e rode: npm run curriculo
// Conteúdo limitado ao que consta no site e no perfil informado (linkedin.com/in/iuri-z).
import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const perfil = {
  nome: "Iuri Zimmermann",
  titulo: "Desenvolvedor Backend · Consultor de Software",
  contatos: [
    "Gaspar, Santa Catarina · atendimento remoto para todo o Brasil",
    "contato.zimmtech@gmail.com · +55 (47) 98466-6032",
    "linkedin.com/in/iuri-z · github.com/iuri-z",
  ],
  resumo:
    "Desenvolvedor backend com cerca de 5 anos de experiência e base sólida em .NET, entregando a tecnologia que cada projeto pede. Foco em integrações e transformação de dados em ambientes de alto volume. Atuo como consultor de software, conduzindo vários projetos em paralelo para clientes de setores diferentes, por meio da Zimmer Tech. Também entrego em outras stacks (Vue, PHP, front-end) com apoio de IA, sempre com revisão e testes feitos por mim.",
  competencias: [
    ["Linguagem e plataforma", "C#, .NET Framework, .NET Core"],
    ["Dados", "SQL Server, Entity Framework"],
    ["Integração e arquitetura", "APIs REST, RabbitMQ, microsserviços, ETL"],
    ["Infraestrutura", "Docker"],
    ["Com apoio de IA", "Vue, PHP, front-end e outras stacks"],
  ],
  atuacao: [
    "Consultor de software (Zimmer Tech): sites, sistemas sob medida, automações e manutenção para pequenos negócios.",
    "Reforço de desenvolvimento backend para times de TI: modernização de sistemas legados (.NET Framework para .NET moderno), integrações e APIs, sustentação e evolução, diagnóstico de saúde de código.",
    "Projeto próprio: repo-health-engine, análise de saúde de repositórios Git.",
  ],
  formacao: [
    "Técnico Integrado em Programação de Computadores, IFSC",
    "Extensão universitária, UNIPDS (em andamento)",
  ],
  idiomas: "Português (nativo)",
};

const out = resolve(dirname(fileURLToPath(import.meta.url)), "../public/curriculo-iuri-zimmermann.pdf");
mkdirSync(dirname(out), { recursive: true });

const doc = new PDFDocument({ size: "A4", margins: { top: 48, bottom: 40, left: 52, right: 52 }, info: { Title: `${perfil.nome} | Currículo`, Author: perfil.nome } });
doc.pipe(createWriteStream(out));

const W = doc.page.width - 104;
const ink = "#111111", mute = "#555555", accent = "#8a6a1f";

doc.fillColor(ink).font("Helvetica-Bold").fontSize(24).text(perfil.nome);
doc.moveDown(0.15).font("Helvetica").fontSize(12).fillColor(accent).text(perfil.titulo);
doc.moveDown(0.5).fontSize(9).fillColor(mute);
perfil.contatos.forEach((c) => doc.text(c));

const titulo = (t) => {
  doc.moveDown(1).font("Helvetica-Bold").fontSize(10).fillColor(ink).text(t.toUpperCase(), { characterSpacing: 1 });
  const y = doc.y + 2;
  doc.moveTo(52, y).lineTo(52 + W, y).lineWidth(0.6).strokeColor("#bbbbbb").stroke();
  doc.moveDown(0.5).font("Helvetica").fontSize(10).fillColor(ink);
};

titulo("Resumo");
doc.text(perfil.resumo, { align: "left", lineGap: 2 });

titulo("Competências");
perfil.competencias.forEach(([k, v]) => {
  doc.font("Helvetica-Bold").text(`${k}: `, { continued: true }).font("Helvetica").text(v, { lineGap: 2 });
});

titulo("Atuação");
perfil.atuacao.forEach((a) => doc.text(`•  ${a}`, { indent: 0, lineGap: 2, paragraphGap: 3 }));

titulo("Formação");
perfil.formacao.forEach((f) => doc.text(`•  ${f}`, { lineGap: 2 }));

titulo("Idiomas");
doc.text(perfil.idiomas);

doc.end();
console.log("PDF gerado em", out);
