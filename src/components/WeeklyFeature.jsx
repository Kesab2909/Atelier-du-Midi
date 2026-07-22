import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const WeeklyFeature = () => {
  const { t } = useLanguage();

  return (
    <section id="today" className="py-28 md:py-36 bg-midi-ink text-midi-cream relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -right-[10%] w-[50vw] h-[50vw] rounded-full bg-midi-rust/20 blur-[120px] pointer-events-none" />

      <div className="wrap relative">
        <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-16 items-center">
          <Reveal delay={100}>
            <SectionIntro light label={t.feature.label} title={t.feature.title} />
            <p className="text-midi-sand/75 leading-relaxed mb-8 max-w-md text-base mt-6">
              {t.feature.body}
            </p>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="display text-5xl text-midi-clay font-wonky">{t.feature.price}</span>
              <span className="text-sm text-midi-sand/55">{t.feature.note}</span>
            </div>
            <a href="#visit" className="btn-primary !bg-midi-coral">
              {t.feature.cta}
              <span className="btn-arrow">→</span>
            </a>
          </Reveal>

          <Reveal variant="reveal-scale" className="relative lg:-mr-16">
            <div className="aspect-[5/4] lg:aspect-[16/11] overflow-hidden shadow-lift photo-grade">
              <img
                src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1000&q=90&auto=format"
                alt="Roasted squash dish"
                className="w-full h-full object-cover photo-duotone scale-105 hover:scale-100 transition-transform duration-[1.4s]"
                loading="lazy"
                width={1000}
                height={688}
                data-cursor="view"
              />
            </div>
            <p className="absolute -bottom-4 -left-2 md:-left-6 bg-midi-cream text-midi-ink px-4 py-2 text-xs uppercase tracking-label rotate-[-2deg]">
              Harbor market · Mon
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WeeklyFeature;
