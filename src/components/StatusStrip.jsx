import { statusNote } from "../constants/brand";

const StatusStrip = () => (
  <div className="bg-noon-navy text-noon-sand/90 border-b border-white/5">
    <div className="wrap py-2.5 flex items-center justify-center gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-noon-glow animate-pulse-soft shrink-0" />
      <p className="text-[0.7rem] sm:text-xs tracking-wide text-center">
        {statusNote}
      </p>
    </div>
  </div>
);

export default StatusStrip;
