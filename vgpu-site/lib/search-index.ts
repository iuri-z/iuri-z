export type SearchItem = { title: string; group: string; href: string; text: string };

/** Índice da pesquisa (Ctrl+K). Os href apontam para ids existentes em sections.tsx. */
export const SEARCH_INDEX: SearchItem[] = [
  { group: "Sobre", title: "Sobre mim", href: "#sobre", text: "desenvolvedor backend 5 anos experiência Gaspar Santa Catarina remoto IFSC UNIPDS consultor" },
  { group: "Serviços", title: "Sites e landing pages", href: "#servico-sites", text: "site página celular whatsapp orçamento visitante" },
  { group: "Serviços", title: "Sistemas sob medida e ferramentas internas", href: "#servico-sistemas", text: "planilha estoque painel cadastro controle sistema" },
  { group: "Serviços", title: "Automação de tarefas repetitivas", href: "#servico-automacao", text: "automação processo repetitivo planilha formulário pedidos" },
  { group: "Serviços", title: "Manutenção e suporte de sistemas existentes", href: "#servico-manutencao", text: "manutenção suporte corrigir erro atualizar site parado" },
  { group: "Times de TI", title: "Modernização de sistemas legados", href: "#times-ti", text: "legado modernização migração sistemas antigos" },
  { group: "Times de TI", title: "Integrações e APIs", href: "#times-ti", text: "integração api dados alto volume" },
  { group: "Times de TI", title: "Sustentação e evolução", href: "#times-ti", text: "sustentação evolução produção correções hospedagem" },
  { group: "Times de TI", title: "Diagnóstico de saúde de código", href: "#times-ti", text: "diagnóstico repositório código análise" },
  { group: "Times de TI", title: "Reforço de equipe", href: "#times-ti", text: "reforço equipe time backend desenvolvedor" },
  { group: "Entrega com IA", title: "Entrega com IA", href: "#ia", text: "inteligência artificial ia agilidade revisão testes responsabilidade etapas proposta" },
  { group: "Entrega com IA", title: "Qual o benefício de entregar com IA?", href: "#ia-beneficio", text: "ia benefício segurança manutenção qualidade rapidez lgpd" },
  { group: "Recrutadores", title: "O perfil em 30 segundos", href: "#recrutadores", text: "recrutador currículo pdf perfil disponibilidade formação especialidade" },
  { group: "Recrutadores", title: "Baixar currículo (PDF)", href: "/curriculo-iuri-zimmermann.pdf", text: "currículo cv pdf download" },
  { group: "Dúvidas", title: "Quanto tempo leva um projeto?", href: "#faq-prazo", text: "prazo tempo projeto" },
  { group: "Dúvidas", title: "Como funciona o pagamento e o contrato?", href: "#faq-pagamento", text: "pagamento contrato entrada" },
  { group: "Dúvidas", title: "De quem é o código?", href: "#faq-codigo", text: "código propriedade documentação" },
  { group: "Dúvidas", title: "Atende fora de Santa Catarina?", href: "#faq-fora", text: "atende brasil remoto vídeo whatsapp" },
  { group: "Dúvidas", title: "Como é feito o suporte depois da entrega?", href: "#faq-suporte", text: "suporte garantia depois entrega" },
  { group: "Dúvidas", title: "Como funciona o orçamento?", href: "#faq-orcamento", text: "orçamento proposta valor escopo" },
  { group: "Contato", title: "Fale comigo", href: "#contato", text: "contato whatsapp e-mail linkedin formulário retorno 24 horas mensagem" },
  { group: "Contato", title: "Política de privacidade (LGPD)", href: "/privacidade", text: "privacidade lgpd dados pessoais proteção" },
];
