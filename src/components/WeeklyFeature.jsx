import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const WeeklyFeature = () => (
  <section id="today" className="py-24 md:py-32 bg-noon-ink text-noon-cream relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_rgba(224,99,74,0.15)_0%,_transparent_60%)] pointer-events-none" />

    <div className="wrap relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal variant="reveal-scale" className="order-2 lg:order-1">
          <div className="img-frame aspect-[5/4] lg:aspect-[4/5] max-h-[32rem] lg:max-h-none mx-auto lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900&q=90"
              alt="Roasted squash dish"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <SectionIntro
            light
            label="This week's focus"
            title="Roasted squash & miso broth"
          />
          <p className="text-noon-sand/75 leading-relaxed mb-8 max-w-md text-base">
            Built from Monday&apos;s harbor market — rye bread, sharp herb salad,
            and whatever the tide brought in. The board shifts when produce does.
          </p>
          <div className="flex items-baseline gap-4 mb-10">
            <span className="font-serif text-4xl text-noon-clay">€14</span>
            <span className="text-sm text-noon-sand/60">lunch set · Wed–Sat</span>
          </div>
          <a href="#visit" className="btn-primary !bg-noon-coral hover:!bg-noon-clay">
            Book a table →
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

export default WeeklyFeature;
