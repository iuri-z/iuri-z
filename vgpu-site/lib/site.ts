/** Dados públicos do site (nada aqui é segredo: são informações já exibidas na página). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://info.zimmertech.workers.dev").replace(/\/$/, "");

export const SITE = {
  name: "Zimmer Tech",
  person: "Iuri Zimmermann",
  title: "Zimmer Tech | Sites e sistemas sob medida em Gaspar (SC)",
  description:
    "Sites, sistemas sob medida e automações para pequenos negócios, e reforço de backend para times de TI. Gaspar (SC), atendimento remoto para todo o Brasil.",
  whatsapp: "5547984666032",
  phone: "+55 47 98466-6032",
  email: "contato.zimmtech@gmail.com",
  linkedin: "https://www.linkedin.com/in/iuri-z",
  github: "https://github.com/iuri-z",
  locality: "Gaspar",
  region: "SC",
  country: "BR",
};
