const SnackMonth = () => {
  return (
    <section id="menu" className="py-16 md:py-20 bg-platse-burgundy">
      <div className="container-platse">
        <div className="max-w-2xl mx-auto text-center p-10 md:p-14 rounded-3xl border-2 border-platse-red/40 bg-white/5">
          <p className="text-xs uppercase tracking-widest text-platse-cream/60 mb-2">
            Snack van de maand
          </p>
          <h2 className="heading-display text-4xl md:text-5xl mb-4">
            Zigeunerstick
          </h2>
          <p className="text-platse-cream/80 text-sm md:text-base mb-6 leading-relaxed">
            Deze bestaat uit kruidig gehakt met verse ui op een stokje. Zeker een
            aanrader en een klassieker!
          </p>
          <p className="font-display text-3xl text-platse-cream mb-8">3,70 EURO</p>
          <a href="#menu" className="btn-outline-white">
            Bekijk de menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default SnackMonth;
