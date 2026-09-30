import type { Post } from "@/lib/types";
import { IMAGES, img } from "./images";

const B = IMAGES.posts;

export const posts: Post[] = [
  {
    slug: "o-silencio-do-concreto",
    title: "O silêncio do concreto",
    excerpt:
      "Por que continuamos a escolher o concreto aparente, e como ele pode ser um material delicado quando tratado com cuidado.",
    category: "Materiais",
    date: "2026-08-18",
    readingTime: 6,
    author: "Helena Valadares",
    cover: { src: img(B.concreto, 2000), alt: "Superfície de concreto aparente com luz rasante", orientation: "landscape" },
    body: [
      {
        paragraphs: [
          "Poucos materiais carregam tantos preconceitos quanto o concreto. Frio, pesado, brutal. Ainda assim, quando visitamos as obras que mais nos emocionam, é quase sempre ele que está ali, recebendo a luz de um jeito que nenhum outro material consegue.",
          "No estúdio, tratamos o concreto como uma superfície que registra. Ele guarda a marca das fôrmas, o veio da madeira, o gesto de quem o moldou. É um material que conta como foi feito.",
        ],
      },
      {
        heading: "A fôrma como desenho",
        paragraphs: [
          "Grande parte do trabalho acontece antes da concretagem. Desenhamos a paginação das fôrmas com o mesmo cuidado com que desenhamos uma fachada, porque é ela que vai definir o ritmo das juntas e a textura final.",
          "Tábuas de pinus estreitas deixam uma superfície mais vibrante. Compensados plastificados resultam em planos lisos, quase aveludados. Cada escolha muda a forma como a luz desliza pela parede ao longo do dia.",
        ],
        quote: "O concreto não precisa de revestimento. Precisa de tempo e de luz.",
      },
      {
        heading: "Envelhecer bem",
        paragraphs: [
          "Um material honesto envelhece com dignidade. O concreto aparente ganha manchas, pátina e pequenas imperfeições que, em vez de degradar, dão profundidade à superfície.",
          "Talvez seja essa a razão pela qual voltamos sempre a ele: é um material que aceita o tempo, e arquitetura que aceita o tempo tende a permanecer.",
        ],
      },
    ],
  },
  {
    slug: "desenhar-com-a-luz",
    title: "Desenhar com a luz",
    excerpt: "Notas sobre aberturas, sombras e a importância de observar um terreno em horários diferentes antes de desenhar qualquer linha.",
    category: "Processo",
    date: "2026-07-02",
    readingTime: 5,
    author: "Marina Costa",
    cover: { src: img(B.luz, 2000), alt: "Interior em tons claros com luz natural lateral", orientation: "landscape" },
    body: [
      {
        paragraphs: [
          "Antes de abrir o computador, passamos um dia inteiro no terreno. Chegamos cedo, voltamos no fim da tarde. Observamos por onde o sol nasce, onde a sombra das árvores cai ao meio-dia, como o vento se comporta.",
          "Essas observações se transformam em decisões simples: onde abrir uma janela alta, onde recuar uma varanda, onde a parede deve ser cega para proteger o interior do calor.",
        ],
      },
      {
        heading: "A luz como material",
        paragraphs: [
          "Tratamos a luz como um material de projeto. Ela tem cor, temperatura e direção, e muda completamente a percepção de um mesmo espaço ao longo das horas.",
        ],
        quote: "Um cômodo bem iluminado não é o mais claro. É aquele em que a luz chega no momento certo.",
      },
    ],
  },
  {
    slug: "o-patio-como-centro",
    title: "O pátio como centro da casa",
    excerpt: "Uma tipologia antiga que resolve problemas contemporâneos: privacidade, ventilação e contato diário com a natureza.",
    category: "Ensaio",
    date: "2026-05-21",
    readingTime: 7,
    author: "Rafael Mendes",
    cover: { src: img(B.patio, 2000), alt: "Casa contemporânea com pátio ao entardecer", orientation: "landscape" },
    body: [
      {
        paragraphs: [
          "Das casas romanas aos claustros, dos riads marroquinos às casas bandeiristas, o pátio sempre foi uma forma de trazer o céu para dentro de casa.",
          "Em lotes urbanos cada vez mais estreitos, ele volta a fazer sentido. Voltar a casa para dentro permite abrir generosamente cada cômodo sem abrir mão da privacidade.",
        ],
      },
      {
        heading: "Ventilação e conforto",
        paragraphs: [
          "O pátio funciona como um pulmão. O ar quente sobe e sai pela abertura, enquanto o ar mais fresco entra pelas janelas opostas, criando uma ventilação cruzada constante e silenciosa.",
        ],
      },
    ],
  },
  {
    slug: "materiais-que-envelhecem-bem",
    title: "Materiais que envelhecem bem",
    excerpt: "Uma pequena seleção de materiais que usamos com frequência e o que aprendemos com cada um deles ao longo dos anos.",
    category: "Materiais",
    date: "2026-03-10",
    readingTime: 4,
    author: "Tomás Ribeiro",
    cover: { src: img(B.materiais, 2000), alt: "Mesa de trabalho com desenhos técnicos de arquitetura", orientation: "landscape" },
    body: [
      {
        paragraphs: [
          "Madeira maciça, pedra natural, cal, latão, terracota. São materiais que não pedem manutenção constante e que ficam mais bonitos com o uso.",
          "A escolha de um material é também uma escolha sobre o futuro do edifício. Preferimos superfícies que aceitam marcas a acabamentos que precisam parecer novos para sempre.",
        ],
      },
    ],
  },
  {
    slug: "jardins-nativos",
    title: "Jardins nativos, jardins possíveis",
    excerpt: "Como o paisagismo com espécies nativas reduz manutenção, atrai fauna e cria uma relação mais honesta com o lugar.",
    category: "Paisagismo",
    date: "2026-01-28",
    readingTime: 5,
    author: "Luiza Andrade",
    cover: { src: img(B.paisagem, 2000), alt: "Jardim com vegetação densa e luz filtrada", orientation: "landscape" },
    body: [
      {
        paragraphs: [
          "Um jardim de espécies nativas pede menos água, menos adubo e menos intervenção. Em troca, oferece sombra, abrigo para pássaros e uma paisagem que muda com as estações.",
          "Começamos sempre por perguntar o que já cresce naturalmente na região. A resposta costuma ser mais rica e mais bonita do que qualquer catálogo de viveiro.",
        ],
        quote: "O melhor jardim é aquele que parece ter estado sempre ali.",
      },
    ],
  },
  {
    slug: "reformar-sem-apagar",
    title: "Reformar sem apagar",
    excerpt: "Sobre o prazer de trabalhar em edifícios existentes e a responsabilidade de decidir o que deve permanecer.",
    category: "Processo",
    date: "2025-11-14",
    readingTime: 6,
    author: "Bruno Farias",
    cover: { src: img(B.reforma, 2000), alt: "Estrutura de obra em andamento", orientation: "landscape" },
    body: [
      {
        paragraphs: [
          "Toda reforma começa com um inventário. Antes de qualquer demolição, fotografamos, medimos e catalogamos o que existe: pisos, esquadrias, ferragens, revestimentos.",
          "Muitas vezes o melhor projeto é o que retira. Remover forros, divisórias e acréscimos revela a clareza original de um espaço que estava escondida havia décadas.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const getAdjacentPosts = (slug: string) => {
  const i = posts.findIndex((p) => p.slug === slug);
  return {
    previous: i > 0 ? posts[i - 1] : undefined,
    next: i < posts.length - 1 ? posts[i + 1] : undefined,
  };
};
