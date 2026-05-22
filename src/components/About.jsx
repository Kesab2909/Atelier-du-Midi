const About = () => {
  return (
    <section id="over-ons" className="section-light py-16 md:py-24">
      <div className="container-platse">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center gap-4 min-h-[20rem]">
            <div className="w-[45%] max-w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl rotate-[-6deg] translate-y-4 bg-platse-sand">
              <img
                src="https://images.unsplash.com/photo-1633504581787-3162b3e9f21f?w=440&q=80"
                alt="Jamie aan het werk in de frituur"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-[45%] max-w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl rotate-[5deg] -translate-y-2 bg-platse-sand">
              <img
                src="https://images.unsplash.com/photo-1573080496219-96feb45ac424?w=440&q=80"
                alt="Verse frietjes bij Platse"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="heading-display text-4xl md:text-5xl mb-6">
              Hey, ik ben Jamie
            </h2>
            <p className="text-sm md:text-base text-platse-muted leading-relaxed mb-6">
              Ik ben een trotse Rumbekenaar en sinds 2023 de uitbaatster van
              Frituur Rumbeke Platse. Met 8 jaar ervaring in de frituursector bak
              ik elke dag met veel plezier verse, krokante frietjes en serveer ik de
              klassiekers waar iedereen zo graag voor langskomt.
            </p>
            <blockquote className="heading-display text-xl md:text-2xl mb-6 border-l-4 border-platse-red pl-5">
              &ldquo;Voor mij zijn twee dingen belangrijk: dat de frietjes altijd
              vers zijn, en dat de sfeer gezellig is.&rdquo;
            </blockquote>
            <p className="text-sm md:text-base text-platse-muted leading-relaxed">
              Kom gerust eens langs op het Kerkplein in Rumbeke en proef zelf
              waarom zoveel mensen graag ter Platse komen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
