import { reasons } from "../constants/platse";

const Reasons = () => {
  return (
    <section className="py-16 md:py-20 bg-platse-burgundy">
      <div className="container-platse text-center">
        <h2 className="heading-display text-3xl md:text-4xl mb-4">
          Elke dag een reden om langs te komen
        </h2>
        <p className="text-platse-cream/75 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Verse friet, bekende gezichten en een gezellig plekje op het Kerkplein.
          Dit is wat Platse elke dag opnieuw maakt.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((item) => (
            <article
              key={item.id}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-2xl text-platse-red mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-platse-cream/80 leading-relaxed">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
