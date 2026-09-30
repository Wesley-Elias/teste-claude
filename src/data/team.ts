import type { TeamMember } from "@/lib/types";
import { IMAGES, img } from "./images";

const T = IMAGES.team;

export const team: TeamMember[] = [
  {
    name: "Helena Valadares",
    role: "Sócia fundadora",
    photo: img(T.helena, 900),
    bio: "Arquiteta pela FAU USP, conduz os projetos residenciais e culturais do estúdio.",
  },
  {
    name: "Rafael Mendes",
    role: "Sócio fundador",
    photo: img(T.rafael, 900),
    bio: "Coordena projetos corporativos e a relação com as equipes de obra.",
  },
  {
    name: "Marina Costa",
    role: "Diretora de interiores",
    photo: img(T.marina, 900),
    bio: "Responsável por interiores, marcenaria e curadoria de mobiliário.",
  },
  {
    name: "Tomás Ribeiro",
    role: "Arquiteto associado",
    photo: img(T.tomas, 900),
    bio: "Especialista em detalhamento executivo e sistemas construtivos.",
  },
  {
    name: "Luiza Andrade",
    role: "Paisagista",
    photo: img(T.luiza, 900),
    bio: "Desenha jardins e áreas externas com espécies nativas.",
  },
  {
    name: "Bruno Farias",
    role: "Arquiteto",
    photo: img(T.bruno, 900),
    bio: "Atua em reformas e retrofits de edifícios modernistas.",
  },
];

export const values = [
  {
    title: "Contenção",
    text: "Fazer mais com menos. Cada elemento precisa justificar sua presença no espaço.",
  },
  {
    title: "Lugar",
    text: "O terreno, o clima e a luz são o ponto de partida de todo projeto, nunca um detalhe.",
  },
  {
    title: "Matéria",
    text: "Materiais honestos, que envelhecem bem e revelam o modo como foram construídos.",
  },
  {
    title: "Tempo",
    text: "Projetamos para durar. Arquitetura que permanece relevante muito depois da inauguração.",
  },
];

export const milestones = [
  { year: "2012", text: "Fundação do estúdio em São Paulo por Helena Valadares e Rafael Mendes." },
  { year: "2016", text: "Primeiro projeto cultural, a reforma de uma biblioteca municipal." },
  { year: "2019", text: "Abertura do núcleo de interiores e paisagismo." },
  { year: "2024", text: "Galeria Norte é selecionada para a Bienal Internacional de Arquitetura." },
];
