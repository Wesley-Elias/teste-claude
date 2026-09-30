import { useEffect, useState } from "react";
import { Link, NavLink, matchPath, useLocation } from "react-router-dom";

import { site } from "@/data/site";
import { scrollToId } from "@/lib/scrollToId";
import { useScrolled } from "@/lib/useScrolled";
import { cn } from "@/lib/utils";

/** Rotas que começam com uma imagem em tela cheia: o header fica transparente sobre ela. */
const HERO_ROUTES = ["/", "/projetos/:slug"];

export function Header() {
  const { pathname } = useLocation();
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  const overHero = HERO_ROUTES.some((pattern) => matchPath(pattern, pathname));
  const transparent = overHero && !scrolled && !open;

  // Fecha o menu mobile ao trocar de página
  useEffect(() => setOpen(false), [pathname]);

  // Trava o scroll do body com o menu aberto e fecha com Esc
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,padding] duration-400 ease-out",
        transparent
          ? "border-b border-transparent bg-transparent py-6 text-paper md:py-8"
          : "border-b border-sand/70 bg-paper/95 py-4 text-ink backdrop-blur-sm md:py-5",
      )}
    >
      <a
        href="#conteudo"
        onClick={scrollToId("conteudo")}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-[1.35rem] font-normal tracking-[0.12em] transition-opacity duration-300 hover:opacity-70 md:text-2xl"
          aria-label="ARCH STUDIO, página inicial"
        >
          ARCH STUDIO
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-12">
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "relative font-sans text-[0.72rem] uppercase tracking-label transition-colors duration-300 ease-out",
                      transparent ? "hover:text-sand" : "hover:text-earth",
                      "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-400 after:ease-out",
                      isActive ? "after:scale-x-100" : "after:scale-x-0",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="font-sans text-[0.72rem] uppercase tracking-label md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
    </header>

      {/* Menu mobile em tela cheia (fora do header para não herdar o backdrop-filter) */}
      <div
        id="menu-mobile"
        className={cn(
          "fixed inset-0 z-40 bg-paper pt-16 text-ink transition-[opacity,visibility] duration-400 ease-out md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Navegação mobile" className="container flex h-full flex-col justify-between pb-10 pt-12">
          <ul className="space-y-2">
            {site.nav.map((item, i) => (
              <li key={item.to} className="border-b border-sand/70">
                <NavLink
                  to={item.to}
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    cn(
                      "flex items-baseline gap-5 py-4 font-serif text-4xl font-light tracking-tight transition-colors duration-300",
                      isActive ? "text-earth" : "hover:text-earth",
                    )
                  }
                >
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-sm font-light text-muted-foreground">
            <p>{site.email}</p>
            <p>{site.phone}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
