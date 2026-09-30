import { Link } from "react-router-dom";

import { ArrowLink } from "@/components/ArrowLink";
import { Eyebrow } from "@/components/Label";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { Button } from "@/components/ui/button";
import { IMAGES, img } from "@/data/images";
import { site } from "@/data/site";
import { scrollToId } from "@/lib/scrollToId";
import { ErrorBlock, LoadingBlock } from "@/components/QueryState";
import { useProjects, useRecognition } from "@/lib/queries";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export default function Home() {
  useDocumentTitle();
  const projectsQuery = useProjects();
  const recognition = useRecognition();
  const allProjects = projectsQuery.data ?? [];
  const featured = allProjects.filter((p) => p.featured).slice(0, 4);
  const [first, second, third, fourth] = featured;
  const projectIndex = (slug: string) => allProjects.findIndex((p) => p.slug === slug) + 1;
  const awards = recognition.data?.awards ?? [];
  const clients = recognition.data?.clients ?? [];
  const publications = recognition.data?.publications ?? [];

  return (
    <>
      {/* HERO */}
      <section aria-label="Apresentação" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
        <img
          src={img(IMAGES.hero, 2400)}
          alt="Edifício contemporâneo de linhas curvas e fachada branca contra o céu"
          className="absolute inset-0 h-full w-full animate-fade-in object-cover grayscale-[35%]"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/35" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/60 to-transparent" />

        <div className="container relative flex h-full flex-col justify-end pb-14 text-paper md:pb-20">
          <p className="label mb-6 text-paper/80 md:mb-10">Arquitetura · Interiores · Paisagismo</p>
          <h1 className="text-display-lg font-light">
            ARCH
            <br />
            <span className="pl-[12vw] md:pl-[18vw]">STUDIO</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm font-serif text-2xl font-light italic leading-snug text-paper/90 md:text-3xl">
              Espaços que respiram.
              <br />
              Arquitetura que permanece.
            </p>

            <a
              href="#manifesto"
              onClick={scrollToId("manifesto")}
              className="group hidden items-center gap-4 self-end text-paper/80 transition-colors duration-300 hover:text-paper md:flex"
              aria-label="Rolar para o conteúdo"
            >
              <span className="label text-current">Role</span>
              <span className="relative block h-14 w-px overflow-hidden bg-paper/25">
                <span className="absolute inset-0 animate-scroll-line bg-paper" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="container scroll-mt-24 py-28 md:py-44">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <Eyebrow index="00">Estúdio</Eyebrow>
          </Reveal>
          <Reveal delay={100} className="md:col-span-8 md:col-start-5">
            <p className="font-serif text-[1.85rem] font-light leading-[1.2] tracking-tight text-balance md:text-5xl md:leading-[1.12]">
              Somos um estúdio de arquitetura em São Paulo dedicado a projetos silenciosos e precisos,
              onde a luz, a matéria e o lugar dizem mais do que qualquer gesto excessivo.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              <ArrowLink to="/sobre">Conheça o estúdio</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJETOS EM DESTAQUE */}
      <section aria-labelledby="destaques" className="container pb-28 md:pb-44">
        <div className="mb-16 flex items-end justify-between gap-6 border-t border-sand pt-8 md:mb-24">
          <Reveal>
            <Eyebrow index="01">Projetos selecionados</Eyebrow>
            <h2 id="destaques" className="mt-6 text-display-sm">
              Obras recentes
            </h2>
          </Reveal>
          <Reveal delay={120} className="hidden md:block">
            <ArrowLink to="/projetos">Ver todos</ArrowLink>
          </Reveal>
        </div>

        {projectsQuery.isPending && <LoadingBlock className="px-0 py-0 md:py-0" label="Carregando projetos" />}
        {projectsQuery.isError && (
          <ErrorBlock className="px-0 py-0 md:py-0" onRetry={() => projectsQuery.refetch()}>
            Não foi possível carregar os projetos.
          </ErrorBlock>
        )}
        <div className="grid gap-y-20 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
          {first && (
            <Reveal className="md:col-span-7">
              <ProjectCard project={first} index={projectIndex(first.slug)} ratio="landscape" size="lg" />
            </Reveal>
          )}
          {second && (
            <Reveal delay={120} className="md:col-span-4 md:col-start-9 md:mt-48">
              <ProjectCard project={second} index={projectIndex(second.slug)} ratio="portrait" />
            </Reveal>
          )}
          {third && (
            <Reveal className="md:col-span-4 md:col-start-2 md:mt-40">
              <ProjectCard project={third} index={projectIndex(third.slug)} ratio="tall" />
            </Reveal>
          )}
          {fourth && (
            <Reveal delay={120} className="md:col-span-6 md:col-start-7 md:mt-72">
              <ProjectCard project={fourth} index={projectIndex(fourth.slug)} ratio="landscape" size="lg" />
            </Reveal>
          )}
        </div>

        <div className="mt-16 md:hidden">
          <ArrowLink to="/projetos">Ver todos os projetos</ArrowLink>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section aria-labelledby="filosofia" className="bg-sand/35 py-28 md:py-44">
        <div className="container grid gap-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-3">
            <Eyebrow index="02">Filosofia</Eyebrow>
          </Reveal>

          <div className="md:col-span-4 md:col-start-5">
            <Reveal>
              <h2 id="filosofia" className="sr-only">
                Filosofia do estúdio
              </h2>
              <div className="space-y-6 text-[1.0625rem] font-light leading-[1.85] text-ink/85">
                <p>
                  Acreditamos que a boa arquitetura nasce da escuta. Do terreno, do clima, da luz que atravessa o
                  lugar em cada hora do dia, e das pessoas que vão viver ali.
                </p>
                <p>
                  Trabalhamos com poucos materiais, escolhidos pela forma como envelhecem. Preferimos a proporção ao
                  ornamento, o vazio ao excesso, a permanência à novidade.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="md:col-span-3 md:col-start-10 md:-mt-6">
            <SmartImage
              src={img(IMAGES.philosophy, 1000)}
              alt="Detalhe de estrutura em concreto aparente"
              ratio="tall"
              tone="mono"
              zoom={false}
            />
          </Reveal>

          <Reveal as="figure" className="md:col-span-9 md:col-start-2 md:mt-16">
            <blockquote className="font-serif text-4xl font-light italic leading-[1.1] tracking-tight text-balance md:text-7xl">
              "O luxo está na contenção. Naquilo que escolhemos não construir."
            </blockquote>
            <figcaption className="label mt-8">Helena Valadares, sócia fundadora</figcaption>
          </Reveal>
        </div>
      </section>

      {/* PRÊMIOS E CLIENTES */}
      <section aria-labelledby="reconhecimento" className="container py-28 md:py-44">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-3">
            <Eyebrow index="03">Reconhecimento</Eyebrow>
            <h2 id="reconhecimento" className="mt-6 font-serif text-3xl font-light md:text-4xl">
              Prêmios e clientes
            </h2>
          </Reveal>

          <Reveal delay={100} className="md:col-span-8 md:col-start-5">
            <ul className="border-t border-sand">
              {awards.map((a) => (
                <li
                  key={`${a.year}-${a.title}`}
                  className="grid grid-cols-[4rem_1fr] gap-x-4 gap-y-1 border-b border-sand py-5 text-[0.72rem] uppercase tracking-[0.16em] md:grid-cols-[5rem_1fr_14rem]"
                >
                  <span className="text-muted-foreground">{a.year}</span>
                  <span>{a.title}</span>
                  <span className="col-start-2 text-muted-foreground md:col-start-3 md:text-right">{a.project}</span>
                </li>
              ))}
            </ul>

            <div className="mt-20 grid gap-12 sm:grid-cols-2">
              <div>
                <p className="label mb-6">Clientes</p>
                <ul className="grid grid-cols-1 gap-3 text-[0.72rem] uppercase tracking-[0.16em] sm:grid-cols-1">
                  {clients.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label mb-6">Publicado em</p>
                <ul className="space-y-3 text-[0.72rem] uppercase tracking-[0.16em]">
                  {publications.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 opacity-25">
          <img
            src={img(IMAGES.cta, 2000)}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <div className="container relative grid gap-12 py-32 md:grid-cols-12 md:py-52">
          <Reveal className="md:col-span-3">
            <p className="label text-paper/70">
              <span className="text-sand">04</span> · Contato
            </p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-8 md:col-start-5">
            <h2 id="cta" className="text-display-sm font-light text-balance">
              Vamos desenhar juntos o seu próximo espaço?
            </h2>
            <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-paper/70 text-paper hover:border-paper hover:bg-paper hover:text-ink"
              >
                <Link to="/contato">Iniciar uma conversa</Link>
              </Button>
              <a href={`mailto:${site.email}`} className="text-sm font-light text-paper/80 transition-colors hover:text-sand">
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
