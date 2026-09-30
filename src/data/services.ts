import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "projeto-arquitetonico",
    title: "Projeto Arquitetônico",
    lead: "Do estudo de implantação ao detalhamento executivo.",
    description:
      "Desenvolvemos o projeto completo de residências, edifícios comerciais e equipamentos culturais. Cada proposta começa pela leitura do lugar, do clima e do modo de vida de quem vai habitar o espaço, e segue até o último detalhe construtivo.",
    deliverables: ["Estudo preliminar", "Anteprojeto", "Projeto legal", "Projeto executivo", "Compatibilização"],
  },
  {
    id: "interiores",
    title: "Interiores",
    lead: "Espaços internos pensados como extensão da arquitetura.",
    description:
      "Projetamos interiores com a mesma precisão da obra: materiais, luz, marcenaria e mobiliário sob medida. Trabalhamos com uma rede de artesãos e fornecedores que compartilham nosso cuidado com o acabamento.",
    deliverables: ["Layout e fluxos", "Marcenaria sob medida", "Especificação de materiais", "Curadoria de mobiliário", "Iluminação"],
  },
  {
    id: "consultoria",
    title: "Consultoria",
    lead: "Um olhar técnico antes das decisões importantes.",
    description:
      "Apoiamos clientes na escolha de terrenos, análise de viabilidade, revisão de projetos de terceiros e definição de programa. Uma conversa bem conduzida no início evita custos e frustrações ao longo da obra.",
    deliverables: ["Análise de terreno", "Estudo de viabilidade", "Revisão de projeto", "Definição de programa"],
  },
  {
    id: "reforma",
    title: "Reforma",
    lead: "Revelar o que já existe antes de acrescentar.",
    description:
      "Em reformas e retrofits, começamos por entender a história do edifício. Preservamos o que tem valor, removemos o excesso e inserimos o novo de forma clara e respeitosa, com acompanhamento próximo da obra.",
    deliverables: ["Levantamento cadastral", "Diagnóstico", "Projeto de reforma", "Acompanhamento de obra"],
  },
  {
    id: "paisagismo",
    title: "Paisagismo",
    lead: "Jardins que amadurecem junto com a arquitetura.",
    description:
      "Desenhamos jardins, pátios e áreas externas com espécies nativas e adaptadas ao clima, pensando na manutenção, na sombra e na passagem das estações. O paisagismo nasce junto com o projeto, nunca depois dele.",
    deliverables: ["Plano de massas", "Seleção de espécies", "Projeto de irrigação", "Detalhamento de pisos e muros"],
  },
];
