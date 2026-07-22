import useScrolled from "../hooks/useScrolled";

const ScrollProgress = () => {
  const { progress } = useScrolled(0);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-midi-line/40"
      aria-hidden="true"
    >
      <div
        className="h-full bg-midi-coral origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
