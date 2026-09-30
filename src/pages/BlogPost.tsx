import { Link, useParams } from "react-router-dom";

import { ArrowLink } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { ErrorBlock, LoadingBlock } from "@/components/QueryState";
import { usePost } from "@/lib/queries";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { formatDate } from "@/lib/utils";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const query = usePost(slug);
  const { post, previous, next } = query;
  useDocumentTitle(post?.title ?? (query.isPending ? "Blog" : "Página não encontrada"));

  if (query.isPending) return <LoadingBlock className="pt-36 md:pt-52" label="Carregando post" />;
  if (query.isError) {
    return (
      <ErrorBlock className="pt-36 md:pt-52" onRetry={() => query.refetch()}>
        Não foi possível carregar este post.
      </ErrorBlock>
    );
  }
  if (!post) return <NotFound />;

  return (
    <article>
      <header className="container pb-14 pt-36 md:pb-20 md:pt-52">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <ArrowLink to="/blog" direction="left">
              Blog
            </ArrowLink>
          </Reveal>
          <Reveal delay={80}>
            <p className="label mt-14">
              <span className="text-earth">{post.category}</span> · {formatDate(post.date)}
            </p>
            <h1 className="mt-6 text-display-sm font-light text-balance">{post.title}</h1>
            <p className="mt-8 font-serif text-xl font-light italic leading-snug text-ink/70 md:text-2xl">{post.excerpt}</p>
          </Reveal>
          <Reveal delay={160} className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-sand pt-5">
            <p className="label">Por {post.author}</p>
            <p className="label">Leitura de {post.readingTime} min</p>
          </Reveal>
        </div>
      </header>

      <Reveal className="container">
        <SmartImage src={post.cover.src} alt={post.cover.alt} ratio="wide" tone="natural" zoom={false} priority />
      </Reveal>

      <div className="container py-20 md:py-32">
        <div className="prose-editorial mx-auto max-w-prose">
          {post.body.map((section, i) => (
            <section key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.quote && <blockquote>{section.quote}</blockquote>}
            </section>
          ))}
        </div>
      </div>

      <nav aria-label="Outros textos" className="border-t border-sand">
        <div className="container grid md:grid-cols-2">
          {previous ? (
            <Link to={`/blog/${previous.slug}`} className="group block py-14 md:border-r md:border-sand md:py-20 md:pr-10">
              <p className="label">← Mais recente</p>
              <p className="mt-5 font-serif text-3xl font-light leading-tight transition-colors duration-300 group-hover:text-earth">
                {previous.title}
              </p>
            </Link>
          ) : (
            <div className="hidden md:block md:border-r md:border-sand" />
          )}
          {next && (
            <Link
              to={`/blog/${next.slug}`}
              className="group block border-t border-sand py-14 md:border-t-0 md:py-20 md:pl-10 md:text-right"
            >
              <p className="label">Anterior →</p>
              <p className="mt-5 font-serif text-3xl font-light leading-tight transition-colors duration-300 group-hover:text-earth">
                {next.title}
              </p>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
