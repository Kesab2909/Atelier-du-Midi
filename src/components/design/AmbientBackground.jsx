const STARS = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  left: `${(i * 19 + 3) % 100}%`,
  top: `${(i * 31 + 7) % 100}%`,
  size: i % 5 === 0 ? "w-1 h-1" : "w-0.5 h-0.5",
  delay: `${(i % 12) * 0.35}s`,
  bright: i % 7 === 0,
}));

const AmbientBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-n-8" />

      <div className="absolute inset-0 star-field opacity-40" />

      <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[160%] h-[80%] bg-[radial-gradient(ellipse_at_center,_rgba(172,106,255,0.16)_0%,_transparent_62%)] animate-glow-breathe" />

      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(159,83,255,0.08)_0%,_transparent_70%)] animate-nebula-drift" />

      <div className="absolute bottom-[-12%] right-[-18%] w-[58%] h-[48%] bg-[radial-gradient(ellipse_at_center,_rgba(133,141,255,0.1)_0%,_transparent_68%)] animate-drift-slow" />

      <div className="absolute top-[40%] left-[-12%] w-[42%] h-[38%] bg-[radial-gradient(ellipse_at_center,_rgba(255,152,226,0.06)_0%,_transparent_72%)] animate-drift-slower" />

      <div className="absolute inset-0">
        {STARS.map((star) => (
          <span
            key={star.id}
            className={`absolute rounded-full animate-star-twinkle ${
              star.bright ? "bg-color-1/70" : "bg-n-1/40"
            } ${star.size}`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.32] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.04%22/%3E%3C/svg%3E')]" />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-n-8 to-transparent" />
    </div>
  );
};

export default AmbientBackground;
