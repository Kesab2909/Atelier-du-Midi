const FloorPlan = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 280 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Floor plan sketch of the lunch room"
  >
    <rect
      x="8"
      y="8"
      width="264"
      height="184"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeDasharray="4 3"
      opacity="0.35"
    />
    <rect x="24" y="24" width="80" height="48" stroke="currentColor" strokeWidth="1.5" rx="2" />
    <text x="32" y="52" fill="currentColor" fontSize="9" fontFamily="serif" opacity="0.7">
      pass
    </text>
    <circle cx="180" cy="80" r="22" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="220" cy="120" r="22" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="140" cy="130" r="22" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="100" cy="90" r="22" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    <path
      d="M200 170 L240 170 L240 185 L200 185"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <text x="200" y="165" fill="currentColor" fontSize="8" opacity="0.6">
      door →
    </text>
    <path
      d="M40 160 Q80 140 120 155"
      stroke="currentColor"
      strokeWidth="0.8"
      opacity="0.4"
      strokeDasharray="2 2"
    />
  </svg>
);

export default FloorPlan;
