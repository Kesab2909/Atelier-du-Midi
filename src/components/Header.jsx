import { useState } from "react";
import { brand, nav } from "../constants/brand";
import useScrolled from "../hooks/useScrolled";
import Mark from "./design/Mark";

const Header = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-noon-cream/90 backdrop-blur-xl shadow-soft border-b border-noon-line/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between py-4 md:py-5">
        <a href="#" className="flex items-center gap-3 group">
          <Mark className="w-10 h-10 text-noon-ink transition-transform duration-500 group-hover:rotate-[8deg]" />
          <div>
            <span className="font-serif text-xl block leading-none text-noon-ink">
              {brand.name}
            </span>
            <span className="text-[0.65rem] uppercase tracking-label text-noon-mist hidden sm:block">
              Lunch studio
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <a key={item.id} href={item.href} className="link-nav">
              {item.label}
            </a>
          ))}
          <a href="#visit" className="btn-primary text-xs !px-6 !py-3">
            Reserve
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-sm font-semibold px-4 py-2 rounded-full border border-noon-line"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-noon-line bg-noon-cream px-5 py-6 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#visit" className="btn-primary w-full" onClick={() => setOpen(false)}>
            Reserve a table →
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
