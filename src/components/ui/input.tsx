import * as React from "react";

import { cn } from "@/lib/utils";

/** Campo com apenas a linha inferior, no espírito de um formulário impresso. */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border-0 border-b border-stone/60 bg-transparent px-0 py-2 font-sans text-base font-light text-ink transition-colors duration-300 ease-out placeholder:text-stone focus-visible:border-ink focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
