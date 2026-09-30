import { ArrowLink } from "@/components/ArrowLink";
import { Eyebrow } from "@/components/Label";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES, img } from "@/data/images";
import { milestones, values } from "@/data/team";
import { ErrorBlock, LoadingBlock } from "@/components/QueryState";
import { useTeam } from "@/lib/queries";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { pad } from "@/lib/utils";

export default function About() {
  useDocumentTitle("Sobre");
  const teamQuery = useTeam();
  const team = teamQuery.data ?? [];

  return (
    <>
      <PageIntro eyebrow="Sobre o estúdio" title="Arquitetura feita com tempo, escuta e poucos gestos.">
        Desde 2012 projetamos casas, espaços de trabalho e equipamentos culturais em todo o Brasil, sempre a partir
        de uma pergunta simples: o que este lugar pede?
      </PageIntro>

      {/* Imagem de abertura assimétrica */}
      <section className="container pb-28 md:pb-44">
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <SmartImage
              src={img(IMAGES.aboutStudio, 2000)}
              alt="Mesa do estúdio com desenhos técnicos e instrumentos de desenho"
              ratio="wide"
              tone="mono"
              zoom={false}
              priority
            />
          </Reveal>
          <Reveal delay={150} className="md:col-span-3 md:col-start-10 md:self-end">
            <p className="label">Estúdio em São Paulo</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
              Vila Madalena, onde uma equipe de doze pessoas desenha, discute e constrói maquetes todos os dias.
            </p>
          </Reveal>
        </div>
      </section>

      {/* História */}
      <section aria-labelledby="historia" className="container pb-28 md:pb-44">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-3">
            <Eyebrow index="01">História</Eyebrow>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5 md:col-start-5">
            <h2 id="historia" className="font-serif text-3xl font-light leading-tight md:text-5xl">
              Um estúdio pequeno por escolha.
            </h2>
            <div className="mt-10 space-y-6 text-[1.0625rem] font-light leading-[1.85] text-ink/85">
              <p>
                O ARCH STUDIO nasceu do encontro entre Helena Valadares e Rafael Mendes, colegas de faculdade que
                compartilhavam o interesse pela arquitetura moderna brasileira e pela precisão do detalhe construtivo.
              </p>
              <p>
                Mantemos uma equipe enxuta para que os sócios acompanhem cada projeto do primeiro croqui ao último dia
                de obra. Essa proximidade é o que nos permite trabalhar com calma e com rigor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200} className="md:col-span-3 md:col-start-10">
            <ol className="border-t border-sand">
              {milestones.map((m) => (
                <li key={m.year} className="border-b border-sand py-5">
                  <p className="font-serif text-2xl font-light">{m.year}</p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">{m.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Abordagem */}
      <section aria-labelledby="abordagem" className="bg-sand/35 py-28 md:py-44">
        <div className="container grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="order-2 md:order-1 md:col-span-5">
            <SmartImage
              src={img(IMAGES.aboutProcess, 1400)}
              alt="Estrutura de obra em andamento"
              ratio="portrait"
              tone="mono"
              zoom={false}
            />
          </Reveal>
          <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 md:pt-24">
            <Reveal>
              <Eyebrow index="02">Abordagem</Eyebrow>
              <h2 id="abordagem" className="mt-8 font-serif text-3xl font-light leading-tight md:text-5xl">
                Da leitura do lugar ao último detalhe.
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-10 space-y-6 text-[1.0625rem] font-light leading-[1.85] text-ink/85">
              <p>
                Cada projeto começa com visitas ao terreno em diferentes horários e longas conversas com quem vai usar
                o espaço. Só depois vêm os primeiros desenhos, quase sempre à mão.
              </p>
              <p>
                Trabalhamos com maquetes físicas durante todo o processo e acompanhamos a obra de perto, porque é no
                canteiro que as decisões de projeto ganham ou perdem sentido.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section aria-labelledby="valores" className="container py-28 md:py-44">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <Eyebrow index="03">Valores</Eyebrow>
          </Reveal>
          <Reveal delay={100} className="md:col-span-8 md:col-start-5">
            <h2 id="valores" className="font-serif text-3xl font-light leading-tight md:text-5xl">
              Quatro princípios que orientam cada decisão.
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-px border-y border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="bg-paper py-10 sm:px-8 sm:first:pl-0">
              <p className="font-serif text-lg font-light text-muted-foreground">{pad(i + 1)}</p>
              <h3 className="mt-6 font-serif text-3xl font-light">{v.title}</h3>
              <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-ink/75">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section aria-labelledby="equipe" className="container pb-28 md:pb-44">
        <div className="mb-16 flex flex-col gap-8 border-t border-sand pt-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow index="04">Equipe</Eyebrow>
            <h2 id="equipe" className="mt-6 text-display-sm">
              Pessoas
            </h2>
          </Reveal>
          <Reveal delay={100} className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            Arquitetos, designers e paisagistas que compartilham a mesma atenção ao detalhe.
          </Reveal>
        </div>

        {teamQuery.isPending && <LoadingBlock className="px-0 py-0 md:py-0" label="Carregando equipe" />}
        {teamQuery.isError && (
          <ErrorBlock className="px-0 py-0 md:py-0" onRetry={() => teamQuery.refetch()}>
            Não foi possível carregar a equipe.
          </ErrorBlock>
        )}
        <ul className="grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
          {team.map((m, i) => {
            // Alterna posições e alturas para manter o ritmo assimétrico
            const layout = [
              "md:col-span-4",
              "md:col-span-3 md:col-start-6 md:mt-24",
              "md:col-span-3 md:col-start-10",
              "md:col-span-3 md:col-start-2",
              "md:col-span-4 md:col-start-6 md:-mt-16",
              "md:col-span-3 md:col-start-10 md:mt-20",
            ][i % 6];
            return (
              <Reveal as="li" key={m.name} delay={(i % 3) * 90} className={`group ${layout}`}>
                <SmartImage src={m.photo} alt={`Retrato de ${m.name}`} ratio="tall" tone="mono" />
                <h3 className="mt-5 font-serif text-xl font-normal md:text-2xl">{m.name}</h3>
                <p className="label mt-2">{m.role}</p>
                <p className="mt-3 hidden text-sm font-light leading-relaxed text-ink/70 md:block">{m.bio}</p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-24 md:mt-32">
          <ArrowLink to="/contato">Trabalhe conosco</ArrowLink>
        </Reveal>
      </section>
    </>
  );
}
