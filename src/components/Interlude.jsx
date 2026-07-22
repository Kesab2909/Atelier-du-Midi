import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";

const Interlude = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 md:py-44 relative overflow-hidden">
      <div className="absolute inset-0 bg-midi-olive/10" />
      <Reveal className="wrap relative">
        <p className="display text-[clamp(1.75rem,4.5vw,4rem)] italic text-midi-ink leading-[1.15] text-balance max-w-5xl font-wonky lg:ml-[8%]">
          {t.interlude}
        </p>
      </Reveal>
    </section>
  );
};

export default Interlude;
