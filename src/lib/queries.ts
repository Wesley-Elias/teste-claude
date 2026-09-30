import { useQuery } from "@tanstack/react-query";

import { fetchPosts, fetchProjects, fetchRecognition, fetchServices, fetchTeam } from "./api";

/** Hooks de leitura com cache (react-query). Cada lista é buscada uma vez e reaproveitada entre páginas. */

export const useProjects = () => useQuery({ queryKey: ["projects"], queryFn: fetchProjects });

export const usePosts = () => useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

export const useServices = () => useQuery({ queryKey: ["services"], queryFn: fetchServices });

export const useTeam = () => useQuery({ queryKey: ["team"], queryFn: fetchTeam });

export const useRecognition = () => useQuery({ queryKey: ["recognition"], queryFn: fetchRecognition });

export function useProject(slug: string) {
  const query = useProjects();
  const list = query.data ?? [];
  const index = list.findIndex((p) => p.slug === slug);
  return {
    ...query,
    project: index >= 0 ? list[index] : undefined,
    number: index + 1,
    next: list.length ? list[(index + 1) % list.length] : undefined,
  };
}

export function usePost(slug: string) {
  const query = usePosts();
  const list = query.data ?? [];
  const index = list.findIndex((p) => p.slug === slug);
  return {
    ...query,
    post: index >= 0 ? list[index] : undefined,
    previous: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
  };
}
