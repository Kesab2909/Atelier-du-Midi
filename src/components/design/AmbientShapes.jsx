const AmbientShapes = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute -top-[20%] -right-[10%] w-[min(50vw,32rem)] h-[min(50vw,32rem)] rounded-full bg-midi-clay/20 blur-[100px] animate-slow-drift" />
    <div className="absolute top-[40%] -left-[15%] w-[min(40vw,24rem)] h-[min(40vw,24rem)] rounded-full bg-midi-olive/12 blur-[80px] animate-slow-drift" />
  </div>
);

export default AmbientShapes;
