import { useEffect, useState } from "react";
import Mark from "./design/Mark";

const PageLoader = ({ onDone }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = prefersReduced ? 150 : 850;
    const t = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, delay);
    return () => clearTimeout(t);
  }, [onDone]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-midi-sand"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4 animate-pulse-soft">
        <Mark className="w-14 h-14 text-midi-ink" />
        <span className="font-serif text-xl text-midi-ink font-wonky">Atelier du Midi</span>
      </div>
    </div>
  );
};

export default PageLoader;
