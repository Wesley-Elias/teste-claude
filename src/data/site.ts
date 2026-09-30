export const site = {
  name: "ARCH STUDIO",
  tagline: "Espaços que respiram. Arquitetura que permanece.",
  email: "contato@archstudio.com.br",
  phone: "+55 11 3000 0000",
  phoneHref: "tel:+551130000000",
  address: {
    street: "Rua Harmonia, 1250",
    district: "Vila Madalena",
    city: "São Paulo, SP",
    zip: "05435 001",
  },
  hours: "Segunda a sexta, das 9h às 18h",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "Behance", href: "https://behance.net" },
  ],
  nav: [
    { label: "Projetos", to: "/projetos" },
    { label: "Sobre", to: "/sobre" },
    { label: "Serviços", to: "/servicos" },
    { label: "Blog", to: "/blog" },
    { label: "Contato", to: "/contato" },
  ],
} as const;
