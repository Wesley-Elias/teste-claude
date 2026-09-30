import { Link, useParams } from "react-router-dom";

import { ArrowLink } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { ErrorBlock, LoadingBlock } from "@/components/QueryState";
import { useProject } from "@/lib/queries";
import type { ProjectImage } from "@/lib/types";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { cn, pad } from "@/lib/utils";
import NotFound from "./NotFound";

/** Posição de cada imagem da galeria de acordo com a orientação, alternando lados. */
function galleryLayout(image: ProjectImage, i: number) {
  if (image.orientation === "portrait") {
    return {
      wrapper: i % 2 === 0 ? "md:col-span-5 md:col-start-2" : "md:col-span-5 md:col-start-7",
      ratio: "portrait" as const,
    };
  }
  if (image.orientation === "square") {
    return { wrapper: "md:col-span-6 md:col-start-4", ratio: "square" as const };
  }
  return {
    wrapper: i % 2 === 0 ? "md:col-span-12" : "md:col-span-9 md:col-start-4",
    ratio: i % 2 === 0 ? ("wide" as const) : ("landscape" as const),
  };
}

export default function ProjectDetail() {
  const { slug = "" } = useParams();
  const query = useProject(slug);
  const { project, next } = query;
  useDocumentTitle(project?.name ?? (query.isPending ? "Projetos" : "Página não encontrada"));

  if (query.isPending) return <LoadingBlock className="pt-36 md:pt-52" label="Carregando projeto" />;
  if (query.isError) {
    return (
      <ErrorBlock className="pt-36 md:pt-52" onRetry={() => query.refetch()}>
        Não foi possível carregar este projeto.
      </ErrorBlock>
    );
  }
  if (!project || !next) return <NotFound />;

  const number = pad(query.number);

  const meta = [
    { label: "Ano", value: String(project.year) },
    { label: "Local", value: project.location },
    { label: "Área", value: `${project.area.toLocaleString("pt-BR")} m²` },
    { label: "Categoria", value: project.category },
    { label: "Cliente", value: project.client },
  ];

  return (
    <article>
      {/* Capa */}
      <header className="relative h-[92svh] min-h-[560px] w-full overflow-hidden bg-ink">
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          className="absolute inset-0 h-full w-full animate-fade-in object-cover grayscale-[30%]"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/25" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/60 to-transparent" />
        <div className="container relative flex h-full flex-col justify-end pb-12 text-paper md:pb-16">
          <p className="label text-paper/80">
            <span className="text-sand">{number}</span> · {project.category}
          </p>
          <h1 className="mt-5 text-display-md font-light">{project.name}</h1>
        </div>
      </header>

      {/* Metadados e texto */}
      <section className="container py-24 md:py-40">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <aside className="md:col-span-3">
            <Reveal className="md:sticky md:top-32">
              <dl className="border-t border-sand">
                {meta.map((m) => (
                  <div key={m.label} className="grid grid-cols-[6rem_1fr] border-b border-sand py-4 md:block">
                    <dt className="label">{m.label}</dt>
                    <dd className="text-sm font-light md:mt-2">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 hidden md:block">
                <ArrowLink to="/projetos" direction="left">
                  Todos os projetos
                </ArrowLink>
              </div>
            </Reveal>
          </aside>

          <div className="md:col-span-7 md:col-start-5">
            <Reveal>
              <p className="font-serif text-3xl font-light leading-[1.2] tracking-tight text-balance md:text-5xl md:leading-[1.12]">
                {project.summary}
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-12 max-w-prose space-y-6 text-[1.0625rem] font-light leading-[1.85] text-ink/85 md:mt-16">
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Galeria vertical */}
      <section aria-label="Galeria de imagens" className="container pb-28 md:pb-44">
        <div className="grid gap-y-16 md:grid-cols-12 md:gap-x-8 md:gap-y-32">
          {project.gallery.map((image, i) => {
            const layout = galleryLayout(image, i);
            return (
              <Reveal as="figure" key={image.src + i} className={cn("group", layout.wrapper)}>
                <SmartImage src={image.src} alt={image.alt} ratio={layout.ratio} tone="natural" zoom={false} />
                {image.caption && (
                  <figcaption className="label mt-4 flex gap-3">
                    <span className="text-earth">{pad(i + 1)}</span>
                    {image.caption}
                  </figcaption>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Próximo projeto */}
      <nav aria-label="Próximo projeto" className="border-t border-sand">
        <Link to={`/projetos/${next.slug}`} className="group block">
          <div className="container grid gap-10 py-20 md:grid-cols-12 md:items-center md:gap-8 md:py-32">
            <div className="md:col-span-6">
              <p className="label">Próximo projeto</p>
              <p className="mt-6 text-display-sm font-light transition-colors duration-300 ease-out group-hover:text-earth">
                {next.name}
              </p>
              <p className="label mt-6 flex items-center gap-3">
                {next.category} · {next.year}
                <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <SmartImage src={next.cover.src} alt={next.cover.alt} ratio="landscape" />
            </div>
          </div>
        </Link>
      </nav>
    </article>
  );
}
