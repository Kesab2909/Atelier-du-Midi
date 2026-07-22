/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midi: {
          ink: "#141B26",
          navy: "#1F2A3D",
          900: "#1A2230",
          800: "#2A3548",
          700: "#3D4A5C",
          600: "#556275",
          500: "#6B7A8F",
          400: "#8A97A8",
          300: "#B0BAC6",
          200: "#D4D9E0",
          100: "#EBEEF2",
          50: "#F6F1EA",
          sand: "#F6F1EA",
          cream: "#FFFCF7",
          clay: "#C9956A",
          coral: "#E0634A",
          olive: "#4A5D4E",
          rust: "#A65D42",
          mist: "#556275",
          line: "#DDD3C4",
          glow: "#F4B860",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...fontFamily.sans],
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
      },
      fontSize: {
        "display-xl": ["6rem", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-md": ["2.25rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        label: "0.18em",
        display: "-0.04em",
      },
      borderRadius: {
        btn: "6px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(20, 27, 38, 0.06)",
        lift: "0 20px 50px rgba(20, 27, 38, 0.12)",
        frame: "0 0 0 1px rgba(20, 27, 38, 0.06), 0 24px 48px rgba(20, 27, 38, 0.1)",
        glow: "0 0 80px rgba(224, 99, 74, 0.15)",
        btn: "0 4px 14px rgba(20, 27, 38, 0.18)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "slow-drift": "slow-drift 22s ease-in-out infinite",
        marquee: "marquee 45s linear infinite",
        "pulse-soft": "pulse-soft 5s ease-in-out infinite",
        "hero-in": "hero-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "loader-out": "loader-out 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
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
          from: { opacity: "0", transform: "translateY(1.75rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "loader-out": {
          to: { opacity: "0", visibility: "hidden" },
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
          "@apply text-[0.65rem] sm:text-[0.7rem] font-semibold uppercase tracking-label text-midi-500":
            {},
        },
        ".display": {
          "@apply font-serif text-midi-ink": {},
          fontVariationSettings: '"SOFT" 50, "WONK" 1',
        },
        ".btn-primary": {
          "@apply relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-btn bg-midi-ink text-midi-cream text-sm font-semibold shadow-btn overflow-hidden transition-all duration-300 ease-out hover:bg-midi-coral hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0":
            {},
        },
        ".btn-secondary": {
          "@apply inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-midi-ink text-midi-ink text-sm font-semibold bg-transparent transition-all duration-300 ease-out hover:bg-midi-ink hover:text-midi-cream active:scale-[0.98]":
            {},
        },
        ".btn-tertiary": {
          "@apply inline-flex items-center gap-1.5 text-sm font-semibold text-midi-ink relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-midi-coral after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 transition-colors hover:text-midi-coral":
            {},
        },
        ".card-rule": {
          "@apply border border-midi-line bg-midi-cream p-8 md:p-10 transition-all duration-500 ease-out hover:border-midi-olive/40 hover:-translate-y-1":
            {},
        },
        ".photo-grade": {
          "@apply relative overflow-hidden after:absolute after:inset-0 after:bg-midi-olive/15 after:mix-blend-multiply after:pointer-events-none":
            {},
        },
      });
      addUtilities({
        ".text-balance": { textWrap: "balance" },
        ".font-wonky": { fontVariationSettings: '"SOFT" 100, "WONK" 1' },
        ".stagger-1": { animationDelay: "0.08s" },
        ".stagger-2": { animationDelay: "0.18s" },
        ".stagger-3": { animationDelay: "0.32s" },
        ".stagger-4": { animationDelay: "0.48s" },
        ".stagger-5": { animationDelay: "0.62s" },
      });
    }),
  ],
};
