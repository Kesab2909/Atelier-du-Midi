import { visit } from "../constants/brand";
import { useLanguage } from "../context/LanguageContext";
import Mark from "./design/Mark";

const Footer = () => {
  const { t, lang } = useLanguage();

  return (
    <footer id="visit" className="bg-midi-ink text-midi-cream pt-20 pb-12">
      <div className="wrap">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-3 mb-6 group">
              <Mark className="text-midi-cream group-hover:text-midi-clay transition-colors" />
              <span className="font-serif text-2xl font-wonky">{t.brand.name}</span>
            </a>
            <p className="text-midi-sand/70 text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="label text-midi-clay mb-5">{t.footer.explore}</p>
            <ul className="space-y-3">
              {t.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm text-midi-sand/80 hover:text-midi-cream transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <p className="label text-midi-clay mb-5">{t.footer.visit}</p>
            <p className="text-midi-cream mb-4">{visit.address}</p>
            <ul className="space-y-2 text-sm mb-8">
              <li>
                <a
                  href={`tel:${visit.phone.replace(/\s/g, "")}`}
                  className="text-midi-sand/80 hover:text-midi-cream transition-colors"
                >
                  {visit.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${visit.email}`}
                  className="text-midi-sand/80 hover:text-midi-cream transition-colors"
                >
                  {visit.email}
                </a>
              </li>
            </ul>
            <ul className="space-y-3 border-t border-white/10 pt-6">
              {visit.hours.map((slot) => (
                <li key={slot.days.en} className="flex justify-between text-sm gap-4">
                  <span className="text-midi-sand/60">{slot.days[lang]}</span>
                  <span className="font-medium">
                    {typeof slot.time === "object" ? slot.time[lang] : slot.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-midi-sand/45 pt-8 border-t border-white/10">
          © {new Date().getFullYear()} {t.brand.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
