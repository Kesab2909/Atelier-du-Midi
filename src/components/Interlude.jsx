import Reveal from "./ui/Reveal";

const Interlude = () => (
  <section className="py-28 md:py-40 relative overflow-hidden">
    <div className="absolute inset-0 bg-noon-clay/15" />
    <Reveal className="wrap relative text-center max-w-4xl mx-auto">
      <div className="w-12 h-px bg-noon-coral mx-auto mb-10" />
      <p className="display text-[clamp(1.75rem,4vw,3.25rem)] italic text-noon-ink leading-[1.2] text-balance">
        The best meetings we&apos;ve had weren&apos;t scheduled. They happened between
        the main and the coffee.
      </p>
      <div className="w-12 h-px bg-noon-coral mx-auto mt-10" />
    </Reveal>
  </section>
);

export default Interlude;
