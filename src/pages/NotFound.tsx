import { ArrowLink } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Página não encontrada");

  return (
    <section className="container flex min-h-[80vh] flex-col justify-center pb-24 pt-36">
      <Reveal>
        <p className="label">Erro 404</p>
        <h1 className="mt-6 text-display-md font-light">Este espaço ainda não foi construído.</h1>
        <p className="mt-8 max-w-md text-base font-light leading-relaxed text-ink/75">
          A página que você procura não existe ou mudou de endereço.
        </p>
        <div className="mt-12">
          <ArrowLink to="/">Voltar ao início</ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}
