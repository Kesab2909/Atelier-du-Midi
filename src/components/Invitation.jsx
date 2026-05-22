import Reveal from "./ui/Reveal";

const Invitation = () => (
  <section className="py-28 md:py-36 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-noon-coral/20 via-noon-sand to-noon-clay/20" />
    <Reveal className="wrap relative text-center max-w-2xl mx-auto">
      <h2 className="display text-4xl md:text-[3.5rem] mb-6 text-balance">
        Walk in hungry. Leave unhurried.
      </h2>
      <p className="text-noon-mist text-lg leading-relaxed mb-12">
        No app for lunch. Groups of five or more — send a note and we&apos;ll set
        the long table by the window.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#visit" className="btn-primary">
          Plan your visit →
        </a>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          Directions
        </a>
      </div>
    </Reveal>
  </section>
);

export default Invitation;
