const SectionIntro = ({ label, title, description, light = false, className = "" }) => (
  <div className={className}>
    {label && (
      <p className={`label mb-4 ${light ? "text-midi-clay" : "text-midi-coral"}`}>
        {label}
      </p>
    )}
    <h2
      className={`display text-display-md md:text-display-lg text-balance max-w-2xl font-wonky ${
        light ? "text-midi-cream" : "text-midi-ink"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-5 text-base md:text-lg leading-relaxed max-w-xl ${
          light ? "text-midi-sand/80" : "text-midi-500"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionIntro;
