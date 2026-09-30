import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { CATEGORIES, projectIndex, projects } from "@/data/projects";
import type { ProjectCategory } from "@/lib/types";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "Todos";

const LEFT_RATIOS = ["landscape", "portrait", "wide"] as const;
const RIGHT_RATIOS = ["tall", "square", "portrait"] as const;

export default function Projects() {
  useDocumentTitle("Projetos");
  const [params, setParams] = useSearchParams();

  const current = (params.get("categoria") ?? "Todos") as Filter;
  const active: Filter = current === "Todos" || CATEGORIES.includes(current as ProjectCategory) ? current : "Todos";

  const filtered = useMemo(
    () => (active === "Todos" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  // Divide em duas colunas de larguras diferentes para o layout assimétrico
  const left = filtered.filter((_, i) => i % 2 === 0);
  const right = filtered.filter((_, i) => i % 2 === 1);

  const select = (value: Filter) => {
    if (value === "Todos") setParams({}, { replace: true });
    else setParams({ categoria: value }, { replace: true });
  };

  const filters: Filter[] = ["Todos", ...CATEGORIES];

  return (
    <>
      <PageIntro eyebrow="Portfólio" title="Projetos">
        Uma seleção de obras construídas e em andamento, entre casas, espaços de trabalho, interiores e equipamentos
        culturais.
      </PageIntro>

      <section className="container pb-28 md:pb-44">
        {/* Filtro discreto */}
        <Reveal className="mb-16 flex flex-col gap-6 border-y border-sand py-5 md:mb-24 md:flex-row md:items-center md:justify-between">
          <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-x-7 gap-y-3">
            {filters.map((f) => {
              const count = f === "Todos" ? projects.length : projects.filter((p) => p.category === f).length;
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => select(f)}
                  aria-pressed={isActive}
                  className={cn(
                    "group inline-flex items-baseline gap-1.5 font-sans text-[0.72rem] uppercase tracking-label transition-colors duration-300 ease-out",
                    isActive ? "text-ink" : "text-muted-foreground hover:text-earth",
                  )}
                >
                  <span className={cn("border-b pb-1", isActive ? "border-ink" : "border-transparent")}>{f}</span>
                  <sup className="text-[0.6rem] tracking-normal">{count}</sup>
                </button>
              );
            })}
          </div>
          <p className="label" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "projeto" : "projetos"}
          </p>
        </Reveal>

        {filtered.length === 0 ? (
          <p className="py-24 text-center font-serif text-2xl font-light text-muted-foreground">
            Nenhum projeto nesta categoria por enquanto.
          </p>
        ) : (
          <div key={active} className="grid gap-y-20 md:grid-cols-12 md:gap-x-8">
            <div className="space-y-20 md:col-span-7 md:space-y-32">
              {left.map((p, i) => (
                <Reveal key={p.slug}>
                  <ProjectCard
                    project={p}
                    index={projectIndex(p.slug)}
                    ratio={LEFT_RATIOS[i % LEFT_RATIOS.length]}
                    size="lg"
                    priority={i === 0}
                  />
                </Reveal>
              ))}
            </div>
            <div className="space-y-20 md:col-span-4 md:col-start-9 md:space-y-32 md:pt-56">
              {right.map((p, i) => (
                <Reveal key={p.slug} delay={120}>
                  <ProjectCard project={p} index={projectIndex(p.slug)} ratio={RIGHT_RATIOS[i % RIGHT_RATIOS.length]} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
