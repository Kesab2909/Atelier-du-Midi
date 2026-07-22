import { marqueeWords } from "../constants/brand";
import { useLanguage } from "../context/LanguageContext";

const MarqueeBand = () => {
  const { lang } = useLanguage();
  const words = marqueeWords[lang];
  const line = words.join(" · ") + " · ";
  const doubled = line + line;

  return (
    <div className="py-4 border-y border-midi-line bg-midi-cream overflow-hidden marquee-wrap">
      <div className="flex whitespace-nowrap marquee-track animate-marquee">
        <span className="px-6 font-serif text-xl md:text-2xl italic text-midi-ink/30 font-wonky">
          {doubled}
        </span>
        <span
          className="px-6 font-serif text-xl md:text-2xl italic text-midi-ink/30 font-wonky"
          aria-hidden="true"
        >
          {doubled}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBand;
