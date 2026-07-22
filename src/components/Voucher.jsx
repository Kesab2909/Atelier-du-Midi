import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";

const Voucher = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="wrap">
        <Reveal variant="reveal-scale">
          <div className="grid lg:grid-cols-[45%_55%] min-h-[28rem]">
            <div className="relative order-2 lg:order-1 lg:-ml-14 z-10">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85&auto=format"
                alt="Shared lunch table"
                className="w-full h-full min-h-[20rem] object-cover photo-duotone photo-grade"
                loading="lazy"
                width={900}
                height={600}
                data-cursor="view"
              />
            </div>
            <div className="bg-midi-navy text-midi-cream p-10 md:p-14 lg:p-16 flex flex-col justify-center order-1 lg:order-2 lg:-mr-8 relative z-20">
              <p className="label text-midi-clay mb-5">{t.voucher.label}</p>
              <h2 className="display text-3xl md:text-[2.5rem] text-midi-cream mb-6 text-balance font-wonky">
                {t.voucher.title}
              </h2>
              <p className="text-midi-sand/75 leading-relaxed mb-10 max-w-md">{t.voucher.body}</p>
              <a
                href={`mailto:${visitEmail}?subject=Lunch%20voucher`}
                className="btn-primary w-fit !bg-midi-rust hover:!bg-midi-coral"
              >
                {t.voucher.cta}
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const visitEmail = "hello@atelierdumidi.studio";

export default Voucher;
