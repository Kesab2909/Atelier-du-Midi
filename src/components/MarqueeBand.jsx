import { marqueeWords } from "../constants/brand";

const MarqueeBand = () => {
  const line = marqueeWords.join(" · ") + " · ";
  const doubled = line + line;

  return (
    <div className="py-5 border-y border-noon-line bg-noon-cream overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="px-4 font-serif text-2xl md:text-3xl italic text-noon-ink/25">
          {doubled}
        </span>
        <span className="px-4 font-serif text-2xl md:text-3xl italic text-noon-ink/25" aria-hidden="true">
          {doubled}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBand;
