import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import useCountUp from "../hooks/useCountUp";
import AmbientShapes from "./design/AmbientShapes";

const Stat = ({ value, suffix, label }) => {
  const { ref, value: count } = useCountUp(value);
  return (
    <li
      ref={ref}
      className="px-5 py-4 border border-midi-line bg-midi-cream/90 backdrop-blur-sm"
    >
      <span className="block font-serif text-3xl text-midi-ink leading-none font-wonky tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-[0.65rem] uppercase tracking-label text-midi-500 mt-2 block">
        {label}
      </span>
    </li>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const imgRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translateY(${y * 0.12}px) scale(1.05)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[94vh] flex items-center hero-mesh overflow-hidden">
      <AmbientShapes />

      <div className="wrap relative z-10 w-full py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[58%_42%] gap-10 lg:gap-14 items-end">
          <div>
            <p className="label text-midi-coral mb-6 hero-enter stagger-1 opacity-0">
              {t.brand.since} · {t.brand.location}
            </p>

            <h1 className="display text-[clamp(2.5rem,5.5vw,5.5rem)] mb-7 max-w-[11ch] text-balance font-wonky hero-enter stagger-2 opacity-0">
              {t.brand.tagline}
            </h1>

            <p className="text-lg md:text-xl text-midi-500 max-w-md leading-relaxed mb-10 hero-enter stagger-3 opacity-0">
              {t.hero.lead}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12 hero-enter stagger-4 opacity-0">
              <a href="#today" className="btn-primary" data-cursor="">
                {t.hero.ctaPrimary}
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#story" className="btn-tertiary">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <ul className="flex flex-wrap gap-2 hero-enter stagger-5 opacity-0">
              {t.stats.map((stat) => (
                <Stat
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </ul>
          </div>

          <div className="relative lg:translate-x-8 lg:-mb-8 hero-enter stagger-3 opacity-0">
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-midi-olive/30 rounded-full pointer-events-none" />
            <div
              ref={imgRef}
              className="relative aspect-[4/5] overflow-hidden shadow-lift will-change-transform"
              data-cursor="view"
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop"
                alt="Sunlit lunch table with ceramics"
                className="w-full h-full object-cover photo-duotone photo-grade"
                width={800}
                height={1000}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midi-ink/75 via-transparent to-midi-olive/10 z-20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30">
                <p className="font-serif text-2xl text-midi-cream leading-snug mb-1 font-wonky">
                  {t.hero.captionTitle}
                </p>
                <p className="text-sm text-midi-sand/85">{t.hero.captionBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
