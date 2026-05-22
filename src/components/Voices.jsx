import { voices } from "../constants/brand";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const Voices = () => (
  <section className="py-24 md:py-32 overflow-hidden">
    <div className="wrap mb-14">
      <Reveal>
        <SectionIntro
          label="From the room"
          title="People describe the feeling, not the menu."
        />
      </Reveal>
    </div>

    <div className="fade-edge-x">
      <div className="flex gap-5 md:gap-6 overflow-x-auto pb-6 px-5 sm:px-8 lg:px-14 snap-x snap-mandatory scrollbar-hide">
        {voices.map((item, i) => (
          <Reveal
            key={item.id}
            variant="reveal-scale"
            delay={i * 80}
            className="snap-start shrink-0 w-[min(88vw,26rem)]"
          >
            <article className="card-elevated p-8 md:p-10 h-full flex flex-col min-h-[16rem]">
              <span className="font-serif text-5xl text-noon-clay/50 leading-none mb-4">
                &ldquo;
              </span>
              <p className="font-serif text-xl md:text-2xl text-noon-ink leading-snug mb-8 flex-1">
                {item.quote}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-noon-line">
                <span className="w-10 h-10 rounded-full bg-noon-sand flex items-center justify-center font-semibold text-sm text-noon-coral">
                  {item.initial}
                </span>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-noon-mist">{item.context}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Voices;
