import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

/** Toaster do shadcn/ui (baseado em sonner) com o visual do estúdio. */
const Toaster = (props: ToasterProps) => (
  <Sonner
    position="bottom-right"
    toastOptions={{
      unstyled: true,
      classNames: {
        toast:
          "flex w-full items-start gap-3 border border-sand bg-paper px-5 py-4 font-sans text-sm text-ink sm:w-[360px]",
        title: "font-serif text-lg font-normal leading-tight",
        description: "mt-1 text-[0.8rem] font-light text-muted-foreground",
        error: "border-destructive/50",
      },
    }}
    {...props}
  />
);

export { Toaster };
