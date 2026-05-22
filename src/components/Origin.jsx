import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const Origin = () => (
  <section id="story" className="bg-noon-ink text-noon-cream py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,149,106,0.12)_0%,_transparent_50%)] pointer-events-none" />

    <div className="wrap relative">
      <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <SectionIntro
            light
            label="Behind the pass"
            title="I opened the room I wished already existed."
            description="Noor — cook, host, and the person who remembers how you take your coffee."
          />
        </Reveal>

        <div className="lg:col-span-7 space-y-10">
          <Reveal variant="reveal-scale" delay={100} className="grid grid-cols-12 gap-4">
            <div className="col-span-7 rounded-[1.5rem] overflow-hidden aspect-[3/4] shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=85"
                alt="Cooking at the pass"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-5 flex flex-col gap-4 pt-8">
              <div className="rounded-[1.25rem] overflow-hidden aspect-square shadow-soft flex-1">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=85"
                  alt="Plated dish"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 rounded-[1.25rem] bg-noon-navy/80 border border-white/10">
                <p className="font-serif text-xl italic text-noon-clay leading-snug">
                  &ldquo;Good lunch isn&apos;t a transaction. It&apos;s the hour where
                  everything else can wait.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="max-w-xl space-y-5 text-noon-sand/80 text-base leading-[1.75]">
            <p>
              Before Atelier Noon I worked kitchens that prized throughput over memory.
              I wanted the opposite: twelve seats, one rhythm, a door that stays open
              to the neighborhood.
            </p>
            <p>
              We cook in small runs, seat without performance, and treat every return
              visit like continuity — not a loyalty program.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Origin;
