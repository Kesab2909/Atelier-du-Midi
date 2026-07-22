import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const Pillars = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 md:py-36">
      <div className="wrap">
        <Reveal className="mb-16 lg:max-w-xl">
          <SectionIntro
            label={t.pillars.label}
            title={t.pillars.title}
            description={t.pillars.description}
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-0 border border-midi-line">
          {t.pillarsItems.map((item, i) => (
            <Reveal
              key={item.id}
              variant="reveal-scale"
              delay={i * 100}
              className={`card-rule min-h-[18rem] ${i === 1 ? "md:-translate-y-4 md:bg-midi-sand z-10" : ""}`}
            >
              <span className="font-serif text-5xl text-midi-line leading-none mb-8 block font-wonky">
                {item.id}
              </span>
              <h3 className="font-serif text-2xl mb-4 font-wonky">{item.title}</h3>
              <p className="text-sm text-midi-500 leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
