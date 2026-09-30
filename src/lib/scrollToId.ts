import type { MouseEvent } from "react";

/**
 * Rola suavemente até um id sem alterar a URL.
 * Mantém âncoras internas funcionando também com HashRouter.
 */
export function scrollToId(id: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (target.tabIndex < 0 && !target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };
}
