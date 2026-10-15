import { SITE, SITE_URL } from "@/lib/site";

/** Dados estruturados (schema.org) para o Google entender quem é a empresa. Conteúdo fixo, sem entrada de usuário. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.name,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#empresa` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#empresa`,
        name: SITE.name,
        url: SITE_URL,
        logo: `${SITE_URL}/zimmer-tech-logo-claro.png`,
        image: `${SITE_URL}/opengraph-image.png`,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: { "@type": "Country", name: "Brasil" },
        address: { "@type": "PostalAddress", addressLocality: SITE.locality, addressRegion: SITE.region, addressCountry: SITE.country },
        knowsLanguage: "pt-BR",
        serviceType: ["Desenvolvimento de sites", "Sistemas sob medida", "Automação de processos", "Manutenção de sistemas", "Reforço de desenvolvimento backend"],
        founder: { "@id": `${SITE_URL}/#iuri` },
        contactPoint: { "@type": "ContactPoint", contactType: "atendimento", telephone: SITE.phone, email: SITE.email, availableLanguage: "pt-BR" },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#iuri`,
        name: SITE.person,
        jobTitle: "Desenvolvedor de software",
        url: SITE_URL,
        image: `${SITE_URL}/iuri.jpg`,
        worksFor: { "@id": `${SITE_URL}/#empresa` },
        sameAs: [SITE.linkedin, SITE.github],
      },
    ],
  };
  // "<" escapado para que o JSON nunca consiga fechar a tag <script>
  const json = JSON.stringify(data).replace(/</g, "\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
