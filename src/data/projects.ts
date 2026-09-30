import type { Project, ProjectCategory, ProjectImage } from "@/lib/types";
import { IMAGES, img } from "./images";

export const CATEGORIES: ProjectCategory[] = ["Residencial", "Comercial", "Cultural", "Interiores"];

const image = (
  id: string,
  alt: string,
  orientation: ProjectImage["orientation"],
  caption?: string,
): ProjectImage => ({ src: img(id, 2000), alt, orientation, caption });

const P = IMAGES.projects;

export const projects: Project[] = [
  {
    slug: "casa-do-vale",
    name: "Casa do Vale",
    category: "Residencial",
    year: 2025,
    location: "Nova Lima, MG",
    area: 480,
    client: "Residência particular",
    featured: true,
    summary: "Uma casa baixa e silenciosa, pousada sobre a encosta como uma linha no horizonte.",
    description: [
      "A Casa do Vale nasce da topografia. Em vez de vencer o declive, o projeto se acomoda a ele em dois volumes horizontais que acompanham as curvas de nível e enquadram a paisagem do vale.",
      "O concreto aparente, moldado com fôrmas de tábua, conversa com a madeira natural das esquadrias e com a pedra local dos muros de arrimo. A paleta reduzida deixa que a luz e a vegetação façam o restante do trabalho.",
      "As áreas sociais se abrem integralmente para o terraço através de grandes panos de vidro, enquanto os quartos se recolhem num volume mais fechado, protegido por brises verticais que filtram o sol da tarde.",
    ],
    cover: image(P.casaDoVale[0], "Fachada da Casa do Vale com piscina e grandes panos de vidro", "landscape"),
    gallery: [
      image(P.casaDoVale[1], "Sala de estar integrada ao terraço", "landscape", "Estar integrado ao terraço"),
      image(P.casaDoVale[2], "Cozinha com bancada em pedra e marcenaria em madeira", "portrait", "Cozinha e bancada em pedra"),
      image(P.casaDoVale[3], "Detalhe de interior com luz natural", "landscape", "Luz da manhã no estar íntimo"),
    ],
  },
  {
    slug: "galeria-norte",
    name: "Galeria Norte",
    category: "Cultural",
    year: 2024,
    location: "São Paulo, SP",
    area: 1250,
    client: "Instituto Norte de Arte",
    featured: true,
    summary: "Um espaço expositivo que trata a luz zenital como matéria de projeto.",
    description: [
      "Instalada num antigo galpão industrial, a Galeria Norte preserva a estrutura original de tesouras metálicas e insere, sob ela, uma sequência de salas brancas de proporções variadas.",
      "Sheds reconstruídos distribuem luz natural difusa sobre as paredes expositivas, reduzindo a dependência de iluminação artificial e criando uma atmosfera que muda ao longo do dia.",
      "O percurso é pensado como uma caminhada lenta: salas amplas se alternam com passagens estreitas e baixas, e cada abertura para o pátio interno funciona como pausa entre uma obra e outra.",
    ],
    cover: image(P.galeriaNorte[0], "Sala expositiva branca da Galeria Norte com luz natural", "landscape"),
    gallery: [
      image(P.galeriaNorte[1], "Volume externo em concreto da galeria", "portrait", "Volume de acesso"),
      image(P.galeriaNorte[2], "Interior de sala de exposição com obras", "landscape", "Sala principal"),
      image(P.galeriaNorte[3], "Detalhe da fachada em concreto", "portrait", "Detalhe da fachada"),
    ],
  },
  {
    slug: "atelier-lumen",
    name: "Atelier Lumen",
    category: "Interiores",
    year: 2025,
    location: "Rio de Janeiro, RJ",
    area: 210,
    client: "Lumen Design de Joias",
    featured: true,
    summary: "Um interior em tons de areia onde cada peça de mobiliário foi desenhada sob medida.",
    description: [
      "O Atelier Lumen reúne showroom, oficina e escritório de uma marca de joias autorais. O desafio era criar um ambiente acolhedor para clientes sem esconder o trabalho artesanal que acontece ali.",
      "Uma grande estante em carvalho organiza o espaço e separa as áreas sem fechá-las. Paredes em reboco de cal, piso em cimento queimado claro e linho nas cortinas compõem uma base serena, quase monocromática.",
    ],
    cover: image(P.atelierLumen[0], "Sala do Atelier Lumen em tons de areia com mobiliário claro", "portrait"),
    gallery: [
      image(P.atelierLumen[1], "Ambiente de descanso com roupa de cama em linho", "landscape", "Sala de atendimento reservado"),
      image(P.atelierLumen[2], "Estar com sofá e poltronas em tons neutros", "portrait", "Estar do showroom"),
      image(P.atelierLumen[3], "Ambiente com luminária e mobiliário em madeira", "landscape", "Mesa de trabalho"),
    ],
  },
  {
    slug: "sede-terra",
    name: "Sede Terra",
    category: "Comercial",
    year: 2023,
    location: "Curitiba, PR",
    area: 2400,
    client: "Terra Engenharia",
    featured: true,
    summary: "Escritórios corporativos organizados em torno de um vazio central iluminado.",
    description: [
      "A nova sede da Terra Engenharia foi concebida como um lugar de encontro. Os pavimentos de trabalho se distribuem ao redor de um átrio de pé direito triplo que conecta visualmente todas as equipes.",
      "A estrutura em concreto e as lajes nervuradas ficam aparentes. Painéis acústicos em madeira e jardins internos equilibram a rigidez do sistema construtivo e melhoram o conforto ao longo do dia.",
      "Na fachada, uma segunda pele de brises horizontais controla a insolação e dá ao edifício a sua leitura serena e repetitiva.",
    ],
    cover: image(P.sedeTerra[0], "Área de trabalho aberta da Sede Terra com luz natural", "landscape"),
    gallery: [
      image(P.sedeTerra[1], "Vista do edifício em perspectiva", "portrait", "Fachada com brises"),
      image(P.sedeTerra[2], "Espaço de convivência e refeitório", "landscape", "Café no térreo"),
      image(P.sedeTerra[3], "Detalhe de concreto aparente", "portrait", "Laje nervurada aparente"),
    ],
  },
  {
    slug: "casa-patio",
    name: "Casa Pátio",
    category: "Residencial",
    year: 2022,
    location: "Campinas, SP",
    area: 360,
    client: "Residência particular",
    summary: "Uma casa voltada para dentro, onde o pátio é o cômodo mais importante.",
    description: [
      "Num lote urbano estreito e cercado por vizinhos, a Casa Pátio escolhe olhar para dentro. Todos os ambientes se abrem para um pátio central plantado com uma única árvore.",
      "Os muros externos quase cegos garantem privacidade, enquanto os caixilhos de piso a teto voltados para o pátio trazem luz e ventilação cruzada a todos os cômodos.",
    ],
    cover: image(P.casaPatio[0], "Fachada da Casa Pátio ao entardecer", "landscape"),
    gallery: [
      image(P.casaPatio[1], "Sala de estar voltada para o pátio", "landscape", "Estar e pátio"),
      image(P.casaPatio[2], "Circulação interna com luz natural", "portrait", "Circulação"),
      image(P.casaPatio[3], "Quarto principal com roupa de cama clara", "landscape", "Quarto principal"),
    ],
  },
  {
    slug: "pavilhao-das-aguas",
    name: "Pavilhão das Águas",
    category: "Cultural",
    year: 2021,
    location: "Brumadinho, MG",
    area: 640,
    client: "Fundação Águas Claras",
    summary: "Um pavilhão de visitação que se debruça sobre o espelho d'água.",
    description: [
      "Implantado à beira de um lago, o pavilhão recebe visitantes de um parque de arte e paisagem. Uma cobertura única em concreto avança sobre a água e cria uma grande sombra habitável.",
      "Por baixo dela, volumes leves abrigam recepção, café e uma pequena sala de projeções. A escada escultórica conduz a um mirante que recoloca o visitante diante da paisagem.",
    ],
    cover: image(P.pavilhaoDasAguas[0], "Volume em concreto do Pavilhão das Águas", "portrait"),
    gallery: [
      image(P.pavilhaoDasAguas[1], "Escada escultórica em espiral", "portrait", "Escada do mirante"),
      image(P.pavilhaoDasAguas[2], "Fachada em concreto em preto e branco", "landscape", "Cobertura em balanço"),
      image(P.pavilhaoDasAguas[3], "Jardim com vegetação nativa", "landscape", "Paisagismo com espécies nativas"),
    ],
  },
  {
    slug: "apartamento-jardins",
    name: "Apartamento Jardins",
    category: "Interiores",
    year: 2024,
    location: "São Paulo, SP",
    area: 190,
    client: "Residência particular",
    summary: "A reforma de um apartamento dos anos 1960 que devolve a planta à sua clareza original.",
    description: [
      "O projeto remove divisórias acumuladas ao longo de décadas e recupera a generosidade da planta modernista. O piso de tacos foi restaurado e as esquadrias originais, recuperadas.",
      "Marcenaria em freijó e superfícies em travertino compõem uma atmosfera calorosa e atemporal, pensada para receber a coleção de arte dos moradores.",
    ],
    cover: image(P.apartamentoJardins[0], "Sala do Apartamento Jardins com luz natural", "landscape"),
    gallery: [
      image(P.apartamentoJardins[1], "Estar com sofá em tecido claro", "portrait", "Estar principal"),
      image(P.apartamentoJardins[2], "Dormitório com cabeceira em madeira", "landscape", "Dormitório"),
      image(P.apartamentoJardins[3], "Sala de jantar integrada", "landscape", "Jantar"),
    ],
  },
  {
    slug: "edificio-cantaria",
    name: "Edifício Cantaria",
    category: "Comercial",
    year: 2020,
    location: "Belo Horizonte, MG",
    area: 5200,
    client: "Cantaria Incorporações",
    summary: "Um edifício de uso misto com térreo aberto à cidade.",
    description: [
      "O Edifício Cantaria reúne lojas no térreo, escritórios nos pavimentos intermediários e um terraço público na cobertura. O térreo recuado cria uma pequena praça coberta que devolve área à calçada.",
      "A fachada em painéis de pedra natural, dispostos em ritmo irregular, faz referência às técnicas de cantaria e dá ao edifício uma presença sóbria na paisagem urbana.",
    ],
    cover: image(P.edificioCantaria[0], "Fachada do Edifício Cantaria", "portrait"),
    gallery: [
      image(P.edificioCantaria[1], "Vista do edifício a partir da rua", "portrait", "Vista da esquina"),
      image(P.edificioCantaria[2], "Café no térreo do edifício", "landscape", "Térreo comercial"),
      image(P.edificioCantaria[3], "Escritório nos pavimentos intermediários", "landscape", "Pavimento corporativo"),
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
};

export const projectIndex = (slug: string) => projects.findIndex((p) => p.slug === slug) + 1;
