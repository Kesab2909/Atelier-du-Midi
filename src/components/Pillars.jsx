import { pillars } from "../constants/brand";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const Pillars = () => (
  <section className="py-24 md:py-32">
    <div className="wrap">
      <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <SectionIntro
          label="How we work"
          title="Three rules we don't bend."
          description="Borrowed from places that treat guests like neighbors — not queue numbers."
        />
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((item, i) => (
          <Reveal
            key={item.id}
            variant="reveal-scale"
            delay={i * 120}
            className="group card-elevated p-8 md:p-10 flex flex-col min-h-[18rem]"
          >
            <span className="font-serif text-6xl text-noon-line group-hover:text-noon-clay/40 transition-colors duration-500 leading-none mb-8">
              {item.id}
            </span>
            <h3 className="font-serif text-2xl md:text-[1.65rem] mb-4 text-noon-ink">
              {item.title}
            </h3>
            <p className="text-sm text-noon-mist leading-relaxed mt-auto">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
