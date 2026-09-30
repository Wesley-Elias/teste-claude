export type ProjectCategory = "Residencial" | "Comercial" | "Cultural" | "Interiores";

export interface ProjectImage {
  src: string;
  alt: string;
  /** Proporção usada no layout da galeria */
  orientation: "landscape" | "portrait" | "square";
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  year: number;
  location: string;
  /** Área construída em m² */
  area: number;
  client: string;
  status?: string;
  /** Uma frase de abertura, usada em destaque */
  summary: string;
  /** Parágrafos do texto descritivo */
  description: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  featured?: boolean;
}

export interface PostSection {
  heading?: string;
  paragraphs: string[];
  quote?: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Data ISO AAAA-MM-DD */
  date: string;
  readingTime: number;
  author: string;
  cover: ProjectImage;
  body: PostSection[];
}

export interface Service {
  id: string;
  title: string;
  lead: string;
  description: string;
  deliverables: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface Award {
  year: number;
  title: string;
  project: string;
}
