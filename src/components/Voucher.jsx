import Reveal from "./ui/Reveal";

const Voucher = () => (
  <section className="py-24 md:py-28">
    <div className="wrap">
      <Reveal variant="reveal-scale">
        <div className="grid lg:grid-cols-2 rounded-[2.5rem] overflow-hidden bg-noon-navy text-noon-cream shadow-lift">
          <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <p className="label text-noon-clay mb-5">Give a table</p>
            <h2 className="display text-3xl md:text-[2.75rem] text-noon-cream mb-6 text-balance">
              Lunch vouchers for people who already have enough stuff.
            </h2>
            <p className="text-noon-sand/75 leading-relaxed mb-10 max-w-md">
              Choose an amount, we send a note, they pick their day. Birthdays,
              thank-yous, or &ldquo;you looked like you needed soup.&rdquo;
            </p>
            <a
              href="mailto:hello@atelierdu-midi.studio?subject=Lunch%20voucher"
              className="btn-primary w-fit !bg-noon-coral hover:!bg-noon-clay"
            >
              Request a voucher →
            </a>
          </div>
          <div className="relative min-h-[20rem] lg:min-h-full order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85"
              alt="Shared lunch table"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-noon-navy via-noon-navy/40 to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-noon-navy/80 to-transparent lg:hidden" />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Voucher;
