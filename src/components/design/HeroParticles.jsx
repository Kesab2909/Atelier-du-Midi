const DUST = Array.from({ length: 32 }, (_, i) => ({
  id: `d-${i}`,
  left: `${(i * 13 + 5) % 100}%`,
  top: `${(i * 19 + 9) % 100}%`,
  size: i % 4 === 0 ? "w-1 h-1" : "w-0.5 h-0.5",
  delay: `${(i % 10) * 0.55}s`,
  duration: `${3.5 + (i % 6)}s`,
  opacity: 0.12 + (i % 5) * 0.06,
  blur: i % 3 === 0,
}));

const STARS = Array.from({ length: 14 }, (_, i) => ({
  id: `s-${i}`,
  left: `${(i * 27 + 11) % 100}%`,
  top: `${(i * 37 + 3) % 100}%`,
  delay: `${(i % 7) * 0.9}s`,
  duration: `${5 + (i % 4)}s`,
  opacity: 0.35 + (i % 3) * 0.15,
}));

const HeroParticles = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,_rgba(172,106,255,0.12)_0%,_transparent_55%)]" />

      {DUST.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full bg-color-1/70 animate-particle-float ${p.size} ${
            p.blur ? "blur-[1px]" : ""
          }`}
          style={{
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {STARS.map((p) => (
        <span
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-n-1/90 animate-star-twinkle shadow-[0_0_8px_rgba(172,106,255,0.5)]"
          style={{
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default HeroParticles;
