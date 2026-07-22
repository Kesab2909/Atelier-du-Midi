import { useLanguage } from "../context/LanguageContext";

const StatusStrip = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-midi-navy text-midi-sand/90 border-b border-white/5">
      <div className="wrap py-2.5 flex items-center justify-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-midi-glow animate-pulse-soft shrink-0" />
        <p className="text-[0.7rem] sm:text-xs tracking-wide text-center">{t.statusNote}</p>
      </div>
    </div>
  );
};

export default StatusStrip;
