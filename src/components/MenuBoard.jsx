import { useState } from "react";
import { todayMenu } from "../constants/brand";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const MenuBoard = () => {
  const { t, lang } = useLanguage();
  const [preview, setPreview] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="py-24 md:py-32 bg-midi-cream border-y border-midi-line relative">
      <div className="wrap">
        <Reveal className="mb-14 max-w-xl">
          <SectionIntro
            label={t.menu.label}
            title={t.menu.title}
            description={t.menu.description}
          />
          <p className="text-xs text-midi-olive mt-4 uppercase tracking-label hidden md:block">
            {t.menu.hint}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul
            className="border-t border-midi-line"
            onMouseMove={handleMove}
            onMouseLeave={() => setPreview(null)}
          >
            {todayMenu.map((item, i) => (
              <li
                key={item.name.en}
                className="group flex items-center justify-between gap-6 py-6 md:py-7 border-b border-midi-line transition-colors hover:bg-midi-sand/60 px-2 md:px-4"
                onMouseEnter={() => setPreview(item.image)}
                data-cursor="preview"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-serif text-midi-line text-lg hidden sm:block w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-midi-ink text-lg md:text-xl group-hover:text-midi-coral transition-colors">
                      {item.name[lang]}
                    </p>
                    <p className="text-xs text-midi-500 mt-1 uppercase tracking-wide">
                      {item.note[lang]}
                    </p>
                  </div>
                </div>
                <span className="font-serif text-xl md:text-2xl text-midi-coral shrink-0">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {preview && (
        <div
          className="fixed z-[80] pointer-events-none hidden md:block w-44 h-44 overflow-hidden shadow-lift border border-midi-line photo-grade"
          style={{
            left: cursor.x + 20,
            top: cursor.y - 88,
          }}
        >
          <img src={preview} alt="" className="w-full h-full object-cover photo-duotone" />
        </div>
      )}
    </section>
  );
};

export default MenuBoard;
