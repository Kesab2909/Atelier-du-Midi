import ButtonSvg from "../assets/svg/ButtonSvg";
import useMagnetic from "../hooks/useMagnetic";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  magnetic = false,
}) => {
  const { ref, onMove, onLeave } = useMagnetic(0.28);

  const classes = `button group relative inline-flex items-center justify-center h-11 transition-all duration-300 ease-spring hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-color-1/50 focus-visible:ring-offset-2 focus-visible:ring-offset-n-8 ${
    magnetic ? "magnetic-target" : ""
  } ${px || "px-7"} ${
    white ? "text-n-8 hover:text-n-8" : "text-n-1 hover:text-color-1"
  } ${className || ""}`;

  const spanClasses =
    "relative z-10 transition-transform duration-300 group-hover:translate-x-0.5";

  const glowClasses = white
    ? "shadow-glow bg-gradient-to-b from-white/10 to-transparent"
    : "shadow-[0_0_30px_rgba(172,106,255,0.18)]";

  const handlers = magnetic
    ? { onMouseMove: onMove, onMouseLeave: onLeave, ref }
    : {};

  const renderButton = () => (
    <button className={classes} onClick={onClick} {...handlers}>
      <span
        className={`absolute inset-0 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${glowClasses}`}
        aria-hidden="true"
      />
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} {...handlers}>
      <span
        className={`absolute inset-0 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${glowClasses}`}
        aria-hidden="true"
      />
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
