import { brand, nav, visit } from "../constants/brand";
import Mark from "./design/Mark";

const Footer = () => (
  <footer id="visit" className="bg-noon-ink text-noon-cream pt-20 pb-12">
    <div className="wrap">
      <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        <div className="lg:col-span-5">
          <a href="#" className="inline-flex items-center gap-3 mb-6 group">
            <Mark className="text-noon-cream group-hover:text-noon-clay transition-colors" />
            <span className="font-serif text-2xl">{brand.name}</span>
          </a>
          <p className="text-noon-sand/70 text-sm leading-relaxed max-w-sm">
            A lunch studio in the harbor quarter. Slow food, small room, open door
            — inspired by neighborhood hospitality, built as an original concept.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="label text-noon-clay mb-5">Explore</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm text-noon-sand/80 hover:text-noon-cream transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <p className="label text-noon-clay mb-5">Visit us</p>
          <p className="text-noon-cream mb-4">{visit.address}</p>
          <ul className="space-y-2 text-sm mb-8">
            <li>
              <a
                href={`tel:${visit.phone.replace(/\s/g, "")}`}
                className="text-noon-sand/80 hover:text-noon-cream transition-colors"
              >
                {visit.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${visit.email}`}
                className="text-noon-sand/80 hover:text-noon-cream transition-colors"
              >
                {visit.email}
              </a>
            </li>
          </ul>
          <ul className="space-y-3 border-t border-white/10 pt-6">
            {visit.hours.map((slot) => (
              <li key={slot.days} className="flex justify-between text-sm gap-4">
                <span className="text-noon-sand/60">{slot.days}</span>
                <span className="font-medium">{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-white/10 text-xs text-noon-sand/50">
        <p>© {new Date().getFullYear()} {brand.name}</p>
        <p>Original concept · craft over template</p>
      </div>
    </div>
  </footer>
);

export default Footer;
