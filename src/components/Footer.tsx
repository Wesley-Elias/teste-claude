import { Link } from "react-router-dom";

import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand bg-paper">
      <div className="container py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-4xl font-light tracking-[0.08em] md:text-5xl">
              ARCH STUDIO
            </Link>
            <p className="mt-6 max-w-xs font-serif text-xl font-light italic leading-snug text-ink/70">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-2 md:col-start-7">
            <p className="label mb-6">Estúdio</p>
            <ul className="space-y-3 text-sm font-light">
              {site.nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-quiet">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="label mb-6">Contato</p>
            <address className="space-y-3 text-sm font-light not-italic">
              <p>
                {site.address.street}
                <br />
                {site.address.city}
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-quiet break-all">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={site.phoneHref} className="link-quiet">
                  {site.phone}
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-6">Redes</p>
            <ul className="space-y-3 text-sm font-light">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-quiet">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-sand pt-8 text-xs font-light text-muted-foreground md:mt-28 md:flex-row md:items-center md:justify-between">
          <p>© {year} ARCH STUDIO Arquitetura. Todos os direitos reservados.</p>
          <p>São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
