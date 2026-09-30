/**
 * Todas as imagens do site ficam centralizadas aqui.
 * Para trocar uma imagem, substitua o ID do Unsplash (ou coloque uma URL completa,
 * por exemplo "/images/casa-do-vale.jpg" apontando para a pasta /public).
 */

const unsplash = (id: string, width = 1600) =>
  id.startsWith("http") || id.startsWith("/")
    ? id
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const img = (id: string, width?: number) => unsplash(id, width);

export const IMAGES = {
  // Hero e seções da home
  hero: "photo-1487958449943-2429e8be8625",
  philosophy: "photo-1486718448742-163732cd1544",
  cta: "photo-1431576901776-e539bd916ba2",

  // Sobre
  aboutStudio: "photo-1503387762-592deb58ef4e",
  aboutProcess: "photo-1541888946425-d81bb19240f5",
  aboutMaterial: "photo-1449157291145-7efd050a4d0e",

  // Serviços
  services: "photo-1511818966892-d7d671e672a2",

  // Contato
  contact: "photo-1545324418-cc1a3fa10c00",

  // Equipe (retratos, exibidos em preto e branco)
  team: {
    helena: "photo-1494790108377-be9c29b29330",
    rafael: "photo-1507003211169-0a1dd7228f2d",
    marina: "photo-1438761681033-6461ffad8d80",
    tomas: "photo-1500648767791-00dcc994a43e",
    luiza: "photo-1580489944761-15a19d654956",
    bruno: "photo-1472099645785-5658abf4ff4e",
  },

  // Projetos
  projects: {
    casaDoVale: [
      "photo-1600585154340-be6161a56a0c",
      "photo-1600607687939-ce8a6c25118c",
      "photo-1600566753190-17f0baa2a6c3",
      "photo-1600210492486-724fe5c67fb0",
    ],
    galeriaNorte: [
      "photo-1554907984-15263bfd63bd",
      "photo-1486325212027-8081e485255e",
      "photo-1536924940846-227afb31e2a5",
      "photo-1431576901776-e539bd916ba2",
    ],
    atelierLumen: [
      "photo-1618221195710-dd6b41faaea6",
      "photo-1616594039964-ae9021a400a0",
      "photo-1586023492125-27b2c045efd7",
      "photo-1513694203232-719a280e022f",
    ],
    sedeTerra: [
      "photo-1497366216548-37526070297c",
      "photo-1524230572899-a752b3835840",
      "photo-1517248135467-4c7edcad34c4",
      "photo-1486718448742-163732cd1544",
    ],
    casaPatio: [
      "photo-1600566752355-35792bedcfea",
      "photo-1600585154526-990dced4db0d",
      "photo-1600573472550-8090b5e0745e",
      "photo-1505691938895-1758d7feb511",
    ],
    pavilhaoDasAguas: [
      "photo-1511818966892-d7d671e672a2",
      "photo-1503174971373-b1f69850bded",
      "photo-1449157291145-7efd050a4d0e",
      "photo-1416879595882-3373a0480b5b",
    ],
    apartamentoJardins: [
      "photo-1600210492486-724fe5c67fb0",
      "photo-1586023492125-27b2c045efd7",
      "photo-1616594039964-ae9021a400a0",
      "photo-1600607687939-ce8a6c25118c",
    ],
    edificioCantaria: [
      "photo-1545324418-cc1a3fa10c00",
      "photo-1486325212027-8081e485255e",
      "photo-1559329007-40df8a9345d8",
      "photo-1497366216548-37526070297c",
    ],
  },

  // Blog
  posts: {
    concreto: "photo-1486718448742-163732cd1544",
    luz: "photo-1618221195710-dd6b41faaea6",
    patio: "photo-1600566752355-35792bedcfea",
    materiais: "photo-1503387762-592deb58ef4e",
    paisagem: "photo-1416879595882-3373a0480b5b",
    reforma: "photo-1541888946425-d81bb19240f5",
  },
} as const;
