import { Link } from "react-router-dom";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { posts } from "@/data/posts";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { formatDate } from "@/lib/utils";

export default function Blog() {
  useDocumentTitle("Blog");
  const [latest, ...rest] = posts;

  return (
    <>
      <PageIntro eyebrow="Diário do estúdio" title="Notas sobre matéria, luz e lugar.">
        Ensaios curtos, bastidores de obra e reflexões da equipe sobre o que aprendemos ao projetar.
      </PageIntro>

      <section className="container pb-28 md:pb-44">
        {/* Post mais recente em destaque, com imagem discreta */}
        {latest && (
          <Reveal as="article" className="border-t border-ink/80 pt-10 md:pt-14">
            <Link to={`/blog/${latest.slug}`} className="group grid gap-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-6">
                <p className="label">
                  <span className="text-earth">{latest.category}</span> · {formatDate(latest.date)}
                </p>
                <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight transition-colors duration-300 ease-out group-hover:text-earth md:text-6xl">
                  {latest.title}
                </h2>
                <p className="mt-6 max-w-md text-[1.0625rem] font-light leading-[1.8] text-ink/75">{latest.excerpt}</p>
                <p className="label mt-8">
                  Leitura de {latest.readingTime} min <span aria-hidden>→</span>
                </p>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <SmartImage src={latest.cover.src} alt={latest.cover.alt} ratio="landscape" />
              </div>
            </Link>
          </Reveal>
        )}

        {/* Lista editorial sem thumbnails */}
        <ul className="mt-20 border-t border-sand md:mt-32">
          {rest.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={(i % 3) * 60} className="border-b border-sand">
              <Link
                to={`/blog/${post.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:py-12"
              >
                <p className="label md:col-span-2">{formatDate(post.date)}</p>
                <h2 className="font-serif text-3xl font-light leading-tight tracking-tight transition-colors duration-300 ease-out group-hover:text-earth md:col-span-5 md:text-4xl">
                  {post.title}
                </h2>
                <p className="text-sm font-light leading-relaxed text-ink/70 md:col-span-4">{post.excerpt}</p>
                <p className="label md:col-span-1 md:text-right">{post.category}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
