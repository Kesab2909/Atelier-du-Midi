const GiftCard = () => {
  return (
    <section className="section-light py-16 md:py-20">
      <div className="container-platse text-center max-w-3xl mx-auto">
        <h2 className="heading-display text-3xl md:text-4xl mb-4">
          Cadeaubon kopen
        </h2>
        <p className="text-xs md:text-sm uppercase tracking-wide text-platse-muted mb-8 leading-relaxed">
          Weet je niet wat geven? Een Platse-cadeaubon is altijd raak. Vers,
          krokant en gegarandeerd geliefd.
        </p>
        <a
          href="mailto:info@platse.be?subject=Cadeaubon"
          className="btn-outline-red"
        >
          Cadeaubon aanvragen
        </a>
      </div>
    </section>
  );
};

export default GiftCard;
