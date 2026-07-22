import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";

const Invitation = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 md:py-40">
      <Reveal className="wrap text-center max-w-2xl mx-auto">
        <h2 className="display text-display-md md:text-display-lg mb-8 text-balance font-wonky">
          {t.invitation.title}
        </h2>
        <p className="text-midi-500 text-lg leading-relaxed mb-12">{t.invitation.body}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#visit" className="btn-primary">
            {t.invitation.ctaPrimary}
            <span className="btn-arrow">→</span>
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {t.invitation.ctaSecondary}
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Invitation;
