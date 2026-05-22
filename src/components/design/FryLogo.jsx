const FryLogo = ({ className = "w-16 h-16" }) => (
  <svg
    className={className}
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M40 8 L68 88 Q40 96 12 88 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M28 32 Q32 20 36 32 M44 28 Q48 16 52 28 M36 44 Q40 32 44 44"
      stroke="#F5C518"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 52 Q36 40 40 52 M48 48 Q52 36 56 48 M40 64 Q44 52 48 64"
      stroke="#F5C518"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default FryLogo;
