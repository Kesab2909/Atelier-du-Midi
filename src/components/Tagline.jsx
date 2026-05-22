import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center text-n-3/90 ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-2 tracking-[0.12em] transition-colors duration-300">
        {children}
      </div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
