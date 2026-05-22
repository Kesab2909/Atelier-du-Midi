const Mark = ({ className = "w-10 h-10" }) => (
  <svg
    className={className}
    viewBox="0 0 56 56"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="28"
      cy="28"
      r="26"
      stroke="currentColor"
      strokeWidth="1.25"
      opacity="0.9"
    />
    <path
      d="M18 32 C22 20 28 16 36 22 C40 26 38 34 28 36 C22 37 18 35 18 32Z"
      fill="currentColor"
      opacity="0.12"
    />
    <path
      d="M20 30 Q28 14 38 28"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="28" cy="30" r="2.5" fill="currentColor" opacity="0.5" />
  </svg>
);

export default Mark;
