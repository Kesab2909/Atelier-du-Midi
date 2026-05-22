const SingleFry = ({ className, flip }) => (
  <svg
    className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    viewBox="0 0 60 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 12 Q20 2 56 12 Q20 22 4 12"
      stroke="#F5C518"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const FryCone = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 70 90"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M35 6 L62 82 Q35 90 8 82 Z"
      stroke="#C41E3A"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M22 30 Q26 18 30 30 M38 26 Q42 14 46 26 M28 44 Q32 32 36 44"
      stroke="#F5C518"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M30 52 Q34 40 38 52 M46 48 Q50 36 54 48"
      stroke="#F5C518"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const FriesDecor = () => (
  <>
    <SingleFry className="absolute top-[18%] left-[8%] w-14 h-6 animate-fry-float opacity-90" />
    <SingleFry
      className="absolute top-[12%] right-[12%] w-16 h-7 animate-fry-float-delayed opacity-80"
      flip
    />
    <SingleFry className="absolute top-[42%] left-[4%] w-12 h-5 animate-fry-float-delayed opacity-70" />
    <FryCone className="absolute top-[28%] right-[6%] w-16 h-20 animate-fry-float opacity-85" />
    <SingleFry className="absolute bottom-[32%] left-[14%] w-20 h-8 animate-fry-float opacity-75" flip />
    <FryCone className="absolute bottom-[28%] right-[10%] w-14 h-18 animate-fry-float-delayed opacity-80" />
    <SingleFry className="absolute bottom-[18%] right-[22%] w-11 h-5 animate-fry-float opacity-60" />
  </>
);

export default FriesDecor;
