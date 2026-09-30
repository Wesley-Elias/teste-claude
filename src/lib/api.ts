/**
 * Camada de dados do site.
 * Lê o conteúdo do Supabase quando ele está configurado e, caso contrário,
 * usa os dados locais de src/data (útil em desenvolvimento sem .env).
 */
import { awards as localAwards, clients as localClients, publications as localPublications } from "@/data/awards";
import { posts as localPosts } from "@/data/posts";
import { projects as localProjects } from "@/data/projects";
import { services as localServices } from "@/data/services";
import { team as localTeam } from "@/data/team";
import type { ContactFormValues } from "./contact-schema";
import type { Tables } from "./database.types";
import { supabase } from "./supabase";
import type { Award, Post, PostSection, Project, ProjectCategory, ProjectImage, Service, TeamMember } from "./types";

// ---------------------------------------------------------------------------
// Conversão das linhas do banco para os tipos do site
// ---------------------------------------------------------------------------

const toProject = (row: Tables<"projects">): Project => ({
  slug: row.slug,
  name: row.name,
  category: row.category as ProjectCategory,
  year: row.year,
  location: row.location,
  area: row.area,
  client: row.client,
  summary: row.summary,
  description: row.description,
  cover: row.cover as unknown as ProjectImage,
  gallery: (row.gallery as unknown as ProjectImage[]) ?? [],
  featured: row.featured,
});

const toPost = (row: Tables<"posts">): Post => ({
  slug: row.slug,
  title: row.title,
  excerpt: row.excerpt,
  category: row.category,
  date: row.published_on,
  readingTime: row.reading_time,
  author: row.author,
  cover: row.cover as unknown as ProjectImage,
  body: (row.body as unknown as PostSection[]) ?? [],
});

const toService = (row: Tables<"services">): Service => ({
  id: row.slug,
  title: row.title,
  lead: row.lead,
  description: row.description,
  deliverables: row.deliverables,
});

const toTeamMember = (row: Tables<"team_members">): TeamMember => ({
  name: row.name,
  role: row.role,
  photo: row.photo_url,
  bio: row.bio,
});

class ApiError extends Error {
  constructor(context: string, cause: { message: string }) {
    super(`${context}: ${cause.message}`);
    this.name = "ApiError";
  }
}

// ---------------------------------------------------------------------------
// Leitura
// ---------------------------------------------------------------------------

export async function fetchProjects(): Promise<Project[]> {
  if (!supabase) return localProjects;
  const { data, error } = await supabase.from("projects").select("*").order("sort_order");
  if (error) throw new ApiError("Erro ao carregar projetos", error);
  return data.map(toProject);
}

export async function fetchPosts(): Promise<Post[]> {
  if (!supabase) return localPosts;
  const { data, error } = await supabase.from("posts").select("*").order("published_on", { ascending: false });
  if (error) throw new ApiError("Erro ao carregar posts", error);
  return data.map(toPost);
}

export async function fetchServices(): Promise<Service[]> {
  if (!supabase) return localServices;
  const { data, error } = await supabase.from("services").select("*").order("sort_order");
  if (error) throw new ApiError("Erro ao carregar serviços", error);
  return data.map(toService);
}

export async function fetchTeam(): Promise<TeamMember[]> {
  if (!supabase) return localTeam;
  const { data, error } = await supabase.from("team_members").select("*").order("sort_order");
  if (error) throw new ApiError("Erro ao carregar equipe", error);
  return data.map(toTeamMember);
}

export interface Recognition {
  awards: Award[];
  clients: string[];
  publications: string[];
}

export async function fetchRecognition(): Promise<Recognition> {
  if (!supabase) return { awards: localAwards, clients: localClients, publications: localPublications };

  const [awardsRes, clientsRes] = await Promise.all([
    supabase.from("awards").select("year, title, project").order("sort_order"),
    supabase.from("clients").select("name, kind").order("sort_order"),
  ]);
  if (awardsRes.error) throw new ApiError("Erro ao carregar prêmios", awardsRes.error);
  if (clientsRes.error) throw new ApiError("Erro ao carregar clientes", clientsRes.error);

  return {
    awards: awardsRes.data,
    clients: clientsRes.data.filter((c) => c.kind === "client").map((c) => c.name),
    publications: clientsRes.data.filter((c) => c.kind === "publication").map((c) => c.name),
  };
}

// ---------------------------------------------------------------------------
// Formulário de contato
// ---------------------------------------------------------------------------

export async function sendContactMessage(values: ContactFormValues) {
  if (!supabase) {
    // Sem Supabase configurado: simula o envio para não travar o desenvolvimento local.
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.info("[ARCH STUDIO] Supabase não configurado. Mensagem simulada:", values);
    return;
  }

  // A política de acesso só permite inserir (não ler), por isso não pedimos o registro de volta.
  const { error } = await supabase.from("contact_messages").insert({
    name: values.name,
    email: values.email,
    subject: values.subject,
    message: values.message,
  });
  if (error) throw new ApiError("Erro ao enviar mensagem", error);
}
