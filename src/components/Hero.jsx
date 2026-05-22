import { brand, stats } from "../constants/brand";
import AmbientShapes from "./design/AmbientShapes";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center hero-mesh overflow-hidden">
    <AmbientShapes />

    <div className="wrap relative z-10 w-full py-16 md:py-24 lg:py-28">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <p className="label text-noon-coral mb-6 hero-enter stagger-1 opacity-0">
            {brand.since} · {brand.location}
          </p>

          <h1 className="display text-[clamp(2.75rem,6vw,4.75rem)] mb-7 max-w-[12ch] text-balance hero-enter stagger-2 opacity-0">
            {brand.tagline}
          </h1>

          <p className="text-lg md:text-xl text-noon-mist max-w-lg leading-relaxed mb-10 hero-enter stagger-3 opacity-0">
            A neighborhood lunch studio for people who want real food, unhurried
            service, and a room that remembers you.
          </p>

          <div className="flex flex-wrap gap-4 mb-14 hero-enter stagger-4 opacity-0">
            <a href="#today" className="btn-primary">
              See today&apos;s board
              <span aria-hidden="true">→</span>
            </a>
            <a href="#story" className="btn-ghost">
              Our story
            </a>
          </div>

          <ul className="flex flex-wrap gap-3 hero-enter stagger-4 opacity-0">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="px-5 py-3 rounded-2xl bg-noon-cream/80 border border-noon-line backdrop-blur-sm shadow-soft"
              >
                <span className="block font-serif text-2xl text-noon-ink leading-none">
                  {stat.value}
                </span>
                <span className="text-[0.65rem] uppercase tracking-label text-noon-mist mt-1 block">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 hero-enter stagger-3 opacity-0">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.25rem] bg-noon-clay/30 blur-sm" />
            <div className="img-frame relative aspect-[4/5] lg:aspect-[5/6]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90"
                alt="Sunlit lunch table with ceramics and wine"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noon-ink/70 via-noon-ink/10 to-transparent z-20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30">
                <p className="font-serif text-2xl text-noon-cream leading-snug mb-1">
                  One service.
                </p>
                <p className="text-sm text-noon-sand/80">
                  When the room is full, the door waits — not the food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
