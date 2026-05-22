/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        noon: {
          ink: "#141B26",
          navy: "#1F2A3D",
          sand: "#F6F1EA",
          cream: "#FFFCF7",
          clay: "#C9956A",
          coral: "#E0634A",
          sage: "#5E7A6B",
          mist: "#6B7A8F",
          line: "#DDD3C4",
          glow: "#F4B860",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm)", ...fontFamily.sans],
        serif: ["var(--font-instrument)", ...fontFamily.serif],
      },
      letterSpacing: {
        label: "0.16em",
        tight: "-0.03em",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(20, 27, 38, 0.06)",
        lift: "0 20px 50px rgba(20, 27, 38, 0.12)",
        frame: "0 0 0 1px rgba(20, 27, 38, 0.06), 0 24px 48px rgba(20, 27, 38, 0.1)",
        glow: "0 0 80px rgba(224, 99, 74, 0.15)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "slow-drift": "slow-drift 22s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-soft": "pulse-soft 5s ease-in-out infinite",
        "hero-in": "hero-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "slow-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(3%, -4%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "hero-in": {
          from: { opacity: "0", transform: "translateY(1.5rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        ".wrap": {
          "@apply max-w-[80rem] mx-auto px-5 sm:px-8 lg:px-14": {},
        },
        ".label": {
          "@apply text-[0.65rem] sm:text-[0.7rem] font-semibold uppercase tracking-label text-noon-mist":
            {},
        },
        ".display": {
          "@apply font-serif text-noon-ink leading-[1.02] tracking-tight": {},
        },
        ".btn-primary": {
          "@apply relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-noon-ink text-noon-cream text-sm font-semibold overflow-hidden transition-all duration-500 ease-out hover:bg-noon-coral hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]":
            {},
        },
        ".btn-ghost": {
          "@apply inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-noon-ink/15 text-noon-ink text-sm font-semibold bg-white/50 backdrop-blur-sm transition-all duration-500 ease-out hover:border-noon-ink hover:bg-noon-ink hover:text-noon-cream hover:scale-[1.02] active:scale-[0.98]":
            {},
        },
        ".card-elevated": {
          "@apply bg-noon-cream rounded-3xl border border-noon-line/80 shadow-soft transition-all duration-500 ease-out hover:shadow-lift hover:-translate-y-1":
            {},
        },
        ".img-frame": {
          "@apply relative rounded-[2rem] overflow-hidden shadow-frame before:absolute before:inset-0 before:rounded-[2rem] before:ring-1 before:ring-inset before:ring-white/20 before:z-10 before:pointer-events-none":
            {},
        },
      });
      addUtilities({
        ".text-balance": { textWrap: "balance" },
        ".stagger-1": { animationDelay: "0.1s" },
        ".stagger-2": { animationDelay: "0.2s" },
        ".stagger-3": { animationDelay: "0.35s" },
        ".stagger-4": { animationDelay: "0.5s" },
      });
    }),
  ],
};
