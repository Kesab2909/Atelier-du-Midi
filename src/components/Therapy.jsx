const Therapy = () => {
  return (
    <section className="py-20 md:py-28 bg-platse-burgundy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,58,0.15)_0%,_transparent_70%)] pointer-events-none" />
      <div className="container-platse relative text-center max-w-3xl mx-auto px-4">
        <p className="text-xs uppercase tracking-widest text-platse-cream/50 mb-4">
          Onze therapie
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-platse-cream leading-tight mb-6">
          een zakje friet&apos;n
        </h2>
        <p className="text-sm md:text-base text-platse-cream/80 leading-relaxed">
          Geen stress, geen afspraak, gewoon friet&apos;n met wie je graag hebt,
          lachen, praten en genieten van krokante frietjes en vertrouwde snacks.
          Het kleine geluk van de dag zit soms gewoon in een puntzak.
        </p>
      </div>
    </section>
  );
};

export default Therapy;
