const SectionIntro = ({ label, title, description, light = false, className = "" }) => (
  <div className={className}>
    {label && (
      <p className={`label mb-4 ${light ? "text-noon-clay" : "text-noon-coral"}`}>
        {label}
      </p>
    )}
    <h2
      className={`display text-3xl sm:text-4xl md:text-5xl text-balance max-w-2xl ${
        light ? "text-noon-cream" : ""
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-5 text-base md:text-lg leading-relaxed max-w-xl ${
          light ? "text-noon-sand/75" : "text-noon-mist"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionIntro;
