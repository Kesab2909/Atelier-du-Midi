const AmbientShapes = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute -top-[20%] -right-[10%] w-[min(50vw,32rem)] h-[min(50vw,32rem)] rounded-full bg-noon-clay/25 blur-[100px] animate-slow-drift" />
    <div className="absolute top-[40%] -left-[15%] w-[min(40vw,24rem)] h-[min(40vw,24rem)] rounded-full bg-noon-sage/15 blur-[80px] animate-slow-drift" />
    <div className="absolute bottom-0 right-[20%] w-64 h-64 rounded-full bg-noon-coral/10 blur-[90px] animate-pulse-soft" />
    <svg
      className="absolute top-[15%] right-[12%] w-40 h-40 text-noon-clay/20"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  </div>
);

export default AmbientShapes;
