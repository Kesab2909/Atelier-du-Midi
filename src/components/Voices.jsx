import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const Voices = () => {
  const { t } = useLanguage();
  const railRef = useRef(null);

  const scroll = (dir) => {
    railRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="py-28 md:py-36 overflow-hidden">
      <div className="wrap mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <Reveal>
          <SectionIntro label={t.voices.label} title={t.voices.title} />
        </Reveal>
        <div className="hidden md:flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="w-10 h-10 border border-midi-line flex items-center justify-center hover:bg-midi-ink hover:text-midi-cream transition-colors rounded-btn"
            aria-label="Previous review"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            className="w-10 h-10 border border-midi-line flex items-center justify-center hover:bg-midi-ink hover:text-midi-cream transition-colors rounded-btn"
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </div>

      <div className="fade-edge-x">
        <div
          ref={railRef}
          className="flex gap-5 md:gap-6 overflow-x-auto pb-6 px-5 sm:px-8 lg:px-14 snap-x snap-mandatory scrollbar-hide"
        >
          {t.voicesItems.map((item, i) => (
            <Reveal
              key={item.id}
              variant="reveal-scale"
              delay={i * 70}
              className="snap-start shrink-0 w-[min(88vw,24rem)]"
            >
              <article className="h-full min-h-[17rem] p-8 md:p-10 border border-midi-line bg-midi-cream flex flex-col">
                <p className="font-serif text-xl md:text-2xl text-midi-ink leading-snug mb-8 flex-1 font-wonky">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-midi-line">
                  <span className="w-9 h-9 flex items-center justify-center bg-midi-olive/15 text-midi-olive font-semibold text-sm">
                    {item.initial}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-midi-500">{item.context}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="snap-start shrink-0 w-8 md:w-16" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Voices;
