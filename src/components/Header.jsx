import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import useScrolled from "../hooks/useScrolled";
import Mark from "./design/Mark";

const Header = () => {
  const { t, lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const { scrolled } = useScrolled();

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-[2px] z-50 transition-all duration-500 ${
          scrolled
            ? "bg-midi-cream/92 backdrop-blur-xl shadow-soft border-b border-midi-line/70 py-0"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className={`wrap flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-3" : "py-4 md:py-5"
          }`}
        >
          <a href="#" className="flex items-center gap-3 group" data-cursor="">
            <Mark
              className={`text-midi-ink transition-all duration-500 group-hover:rotate-[8deg] ${
                scrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
            />
            <div className={scrolled ? "scale-95 origin-left transition-transform" : ""}>
              <span className="font-serif text-xl block leading-none text-midi-ink font-wonky">
                {t.brand.name}
              </span>
              {!scrolled && (
                <span className="text-[0.65rem] uppercase tracking-label text-midi-500 hidden sm:block">
                  {t.brand.studio}
                </span>
              )}
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {t.nav.map((item) => (
              <a key={item.id} href={item.href} className="link-nav">
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={toggle}
              className="text-xs font-semibold uppercase tracking-label text-midi-500 hover:text-midi-ink transition-colors"
              aria-label="Toggle language"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <a href="#visit" className="btn-primary text-xs !px-5 !py-2.5">
              {t.reserve}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggle}
              className="text-xs font-semibold uppercase tracking-label text-midi-500"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <button
              type="button"
              className="text-sm font-semibold px-4 py-2 border border-midi-line rounded-btn"
              onClick={() => setOpen(true)}
            >
              {t.menuToggle}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-midi-ink text-midi-cream flex flex-col md:hidden">
          <div className="wrap flex justify-between items-center py-6">
            <Mark className="w-10 h-10 text-midi-cream" />
            <button type="button" onClick={close} className="text-sm uppercase tracking-label">
              {t.close}
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {t.nav.map((item, i) => (
              <a
                key={item.id}
                href={item.href}
                onClick={close}
                className="font-serif text-5xl font-wonky hover:text-midi-clay transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="wrap pb-10">
            <a href="#visit" onClick={close} className="btn-primary w-full !bg-midi-coral">
              {t.reserve} →
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
