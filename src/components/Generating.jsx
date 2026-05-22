import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 glass-depth rounded-[1.7rem] shadow-tactile ${
        className || ""
      } text-base`}
      role="status"
      aria-live="polite"
    >
      <img
        className="w-5 h-5 mr-4 animate-[spin_2.5s_linear_infinite] opacity-90"
        src={loading}
        alt=""
        aria-hidden="true"
      />
      <span className="animate-shimmer font-medium tracking-tight">
        AI is generating
      </span>
    </div>
  );
};

export default Generating;
