import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const Origin = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="bg-midi-ink text-midi-cream py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(74,93,78,0.15)_0%,_transparent_55%)] pointer-events-none" />

      <div className="wrap relative">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-8">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <SectionIntro
              light
              label={t.origin.label}
              title={t.origin.title}
              description={t.origin.subtitle}
            />
          </Reveal>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal variant="reveal-scale" delay={100} className="relative mb-12">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8 aspect-[4/5] overflow-hidden -rotate-1 shadow-lift photo-grade">
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=85&auto=format"
                    alt="Cooking at the pass"
                    className="w-full h-full object-cover photo-duotone hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                </div>
                <div className="col-span-4 flex flex-col gap-3 pt-12">
                  <div className="aspect-square overflow-hidden rotate-2 shadow-soft grayscale hover:grayscale-0 transition-all duration-700">
                    <img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=85&auto=format"
                      alt="Plated dish"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
              <blockquote className="absolute -bottom-8 -left-4 md:-left-8 max-w-xs p-5 bg-midi-rust/90 text-midi-cream rotate-[-2deg] shadow-lift">
                <p className="font-serif text-lg italic leading-snug font-wonky">
                  &ldquo;{t.origin.quote}&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={220} className="max-w-lg space-y-5 text-midi-sand/85 text-base leading-[1.8] pt-8">
              <p>{t.origin.p1}</p>
              <p>{t.origin.p2}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Origin;
