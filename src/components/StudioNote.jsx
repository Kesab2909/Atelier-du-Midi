import { useLanguage } from "../context/LanguageContext";
import FloorPlan from "./design/FloorPlan";
import Reveal from "./ui/Reveal";

const StudioNote = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-midi-cream border-y border-midi-line overflow-hidden">
      <div className="wrap">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <Reveal className="lg:col-span-4 lg:-rotate-1">
            <p className="label text-midi-olive mb-3">{t.note.label}</p>
            <p
              className="font-serif text-2xl md:text-3xl text-midi-ink leading-snug italic font-wonky"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {t.note.text}
            </p>
            <p className="mt-4 text-midi-rust font-serif text-lg">{t.note.sign}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 flex justify-center">
            <FloorPlan className="w-full max-w-[240px] text-midi-olive rotate-[1.5deg]" />
          </Reveal>

          <Reveal delay={200} className="lg:col-span-4 lg:translate-y-6">
            <div className="p-6 border-l-2 border-midi-coral bg-midi-sand/80">
              <p className="label text-midi-500 mb-2">{t.playlist.label}</p>
              <p className="font-semibold text-midi-ink mb-1">{t.playlist.title}</p>
              <p className="text-sm text-midi-500">{t.playlist.track}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default StudioNote;
