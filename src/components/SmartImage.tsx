import { useState } from "react";

import { cn } from "@/lib/utils";

type Ratio = "landscape" | "portrait" | "square" | "wide" | "tall" | "auto";

const ratios: Record<Ratio, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4]",
  auto: "",
};

interface SmartImageProps {
  src: string;
  alt: string;
  ratio?: Ratio;
  className?: string;
  imgClassName?: string;
  /**
   * muted: começa dessaturada e ganha cor no hover (padrão, para listas e grids)
   * mono: sempre em preto e branco (retratos da equipe)
   * natural: cor original, sem filtro
   */
  tone?: "muted" | "mono" | "natural";
  /** Aplica zoom sutil no hover do elemento pai com a classe "group" */
  zoom?: boolean;
  priority?: boolean;
  sizes?: string;
}

/**
 * Imagem com carregamento suave, hover discreto e fallback em tom de areia
 * caso a URL deixe de existir.
 */
export function SmartImage({
  src,
  alt,
  ratio = "auto",
  className,
  imgClassName,
  tone = "muted",
  zoom = true,
  priority = false,
  sizes,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const toneClass = {
    muted: "grayscale-[70%] group-hover:grayscale-0",
    mono: "grayscale contrast-[1.05]",
    natural: "",
  }[tone];

  return (
    <div className={cn("relative overflow-hidden bg-sand/50", ratios[ratio], className)}>
      {failed ? (
        <div role="img" aria-label={alt} className="flex h-full min-h-[12rem] w-full items-end bg-sand p-4">
          <span className="label text-ink/60">ARCH STUDIO</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-[transform,filter,opacity] duration-700 ease-out",
            loaded ? "opacity-100" : "opacity-0",
            zoom && "group-hover:scale-[1.03]",
            toneClass,
            imgClassName,
          )}
        />
      )}
    </div>
  );
}
