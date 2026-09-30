import { Link } from "react-router-dom";

import type { Project } from "@/lib/types";
import { cn, pad } from "@/lib/utils";
import { SmartImage } from "./SmartImage";

interface ProjectCardProps {
  project: Project;
  index: number;
  ratio?: "landscape" | "portrait" | "square" | "wide" | "tall";
  className?: string;
  /** Tamanho do nome do projeto */
  size?: "md" | "lg";
  priority?: boolean;
}

/** Card de projeto reutilizável: imagem, número, nome e categoria. Sem caixas nem sombras. */
export function ProjectCard({ project, index, ratio = "landscape", className, size = "md", priority }: ProjectCardProps) {
  return (
    <Link
      to={`/projetos/${project.slug}`}
      className={cn("group block focus-visible:outline-offset-8", className)}
      aria-label={`${project.name}, ${project.category}, ${project.year}`}
    >
      <SmartImage src={project.cover.src} alt={project.cover.alt} ratio={ratio} priority={priority} />
      <div className="mt-5 flex items-start justify-between gap-6 md:mt-6">
        <div className="flex items-baseline gap-4 md:gap-6">
          <span className="font-serif text-lg font-light text-muted-foreground md:text-xl">{pad(index)}</span>
          <h3
            className={cn(
              "font-serif font-light leading-none tracking-tight transition-colors duration-300 ease-out group-hover:text-earth",
              size === "lg" ? "text-3xl md:text-[2.75rem]" : "text-2xl md:text-3xl",
            )}
          >
            {project.name}
          </h3>
        </div>
        <p className="label shrink-0 pt-1 text-right">
          {project.category}
          <span className="mt-1 block">{project.year}</span>
        </p>
      </div>
    </Link>
  );
}
