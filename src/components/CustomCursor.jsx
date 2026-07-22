import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;
    setEnabled(true);

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (!t) {
        setHover(false);
        setLabel("");
        return;
      }
      setHover(true);
      setLabel(t.dataset.cursor || "");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[250] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%))`,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ease-out flex items-center justify-center ${
            hover ? (label ? "w-16 h-16" : "w-10 h-10") : "w-2 h-2"
          }`}
        >
          {label && (
            <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-midi-ink mix-blend-normal">
              {label}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
