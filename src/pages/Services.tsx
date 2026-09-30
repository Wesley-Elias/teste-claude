import { ArrowLink } from "@/components/ArrowLink";
import { Eyebrow } from "@/components/Label";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES, img } from "@/data/images";
import { ErrorBlock, LoadingBlock } from "@/components/QueryState";
import { useServices } from "@/lib/queries";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { pad } from "@/lib/utils";

const process = [
  { title: "Escuta", text: "Conversas, visitas ao terreno e definição do programa." },
  { title: "Estudo", text: "Croquis, maquetes e as primeiras decisões de implantação." },
  { title: "Projeto", text: "Desenvolvimento, detalhamento e compatibilização." },
  { title: "Obra", text: "Acompanhamento próximo até a entrega das chaves." },
];

export default function Services() {
  useDocumentTitle("Serviços");
  const query = useServices();
  const services = query.data ?? [];

  return (
    <>
      <PageIntro eyebrow="O que fazemos" title="Serviços">
        Atuamos em todas as escalas do projeto, da paisagem ao mobiliário, com a mesma atenção à luz, à matéria e ao
        modo de habitar.
      </PageIntro>

      <section className="container pb-24 md:pb-36">
        <div className="grid md:grid-cols-12">
          <Reveal className="md:col-span-9 md:col-start-4">
            <SmartImage
              src={img(IMAGES.services, 2000)}
              alt="Volume arquitetônico em concreto com luz rasante"
              ratio="wide"
              tone="mono"
              zoom={false}
              priority
            />
          </Reveal>
        </div>
      </section>

      <section aria-label="Lista de serviços" className="container pb-28 md:pb-44">
        {query.isPending && <LoadingBlock className="px-0 py-0 md:py-0" label="Carregando serviços" />}
        {query.isError && (
          <ErrorBlock className="px-0 py-0 md:py-0" onRetry={() => query.refetch()}>
            Não foi possível carregar os serviços.
          </ErrorBlock>
        )}
        <ol className="border-t border-ink/80">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} id={s.id} className="scroll-mt-28 border-b border-sand py-14 md:py-20">
              <div className="grid gap-8 md:grid-cols-12 md:gap-8">
                <p className="font-serif text-2xl font-light text-muted-foreground md:col-span-2 md:text-3xl">{pad(i + 1)}</p>
                <div className="md:col-span-4">
                  <h2 className="font-serif text-4xl font-light leading-none tracking-tight md:text-5xl">{s.title}</h2>
                  <p className="mt-5 font-serif text-xl font-light italic leading-snug text-ink/70">{s.lead}</p>
                </div>
                <div className="md:col-span-5 md:col-start-8">
                  <p className="text-[1.0625rem] font-light leading-[1.85] text-ink/85">{s.description}</p>
                  <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="label">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section aria-labelledby="processo" className="bg-sand/35 py-28 md:py-44">
        <div className="container">
          <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12">
            <Reveal className="md:col-span-3">
              <Eyebrow index="06">Processo</Eyebrow>
            </Reveal>
            <Reveal delay={100} className="md:col-span-7 md:col-start-5">
              <h2 id="processo" className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Um caminho claro, do primeiro encontro à entrega.
              </h2>
            </Reveal>
          </div>
          <ol className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="border-t border-ink/70 pt-6">
                <p className="label">Etapa {pad(i + 1)}</p>
                <h3 className="mt-6 font-serif text-3xl font-light">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink/75">{step.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-20">
            <ArrowLink to="/contato">Solicitar uma proposta</ArrowLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
