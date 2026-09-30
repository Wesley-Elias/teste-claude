import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Paleta ARCH STUDIO
 * Cada token aponta para uma CSS variable definida em src/index.css,
 * o que permite usar opacidade (ex: bg-ink/80) e trocar a paleta num só lugar.
 */
const withAlpha = (variable: string) => `hsl(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", md: "2.5rem", xl: "4rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        // Tokens da marca
        paper: withAlpha("--paper"), // #F5F3EF
        ink: withAlpha("--ink"), // #1A1A1A
        sand: withAlpha("--sand"), // #D9CFC1
        stone: withAlpha("--stone"), // #8A8580
        earth: withAlpha("--earth"), // #6E5C4E

        // Tokens semânticos (shadcn/ui)
        border: withAlpha("--border"),
        input: withAlpha("--input"),
        ring: withAlpha("--ring"),
        background: withAlpha("--background"),
        foreground: withAlpha("--foreground"),
        primary: {
          DEFAULT: withAlpha("--primary"),
          foreground: withAlpha("--primary-foreground"),
        },
        secondary: {
          DEFAULT: withAlpha("--secondary"),
          foreground: withAlpha("--secondary-foreground"),
        },
        muted: {
          DEFAULT: withAlpha("--muted"),
          foreground: withAlpha("--muted-foreground"),
        },
        accent: {
          DEFAULT: withAlpha("--accent"),
          foreground: withAlpha("--accent-foreground"),
        },
        destructive: {
          DEFAULT: withAlpha("--destructive"),
          foreground: withAlpha("--destructive-foreground"),
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
        "display-sm": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(3.75rem, 13vw, 11rem)", { lineHeight: "0.88", letterSpacing: "-0.035em" }],
      },
      letterSpacing: {
        tightest: "-0.035em",
        label: "0.22em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
        700: "700ms",
        1200: "1200ms",
      },
      maxWidth: {
        prose: "38rem",
        narrow: "32rem",
      },
      keyframes: {
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "45%": { transform: "scaleY(1)", transformOrigin: "top" },
          "55%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "scroll-line": "scroll-line 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "fade-in": "fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [animate],
};

export default config;
