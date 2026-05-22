import TagLine from "./Tagline";
import ScrollReveal from "./ScrollReveal";

const Heading = ({ className, title, text, tag }) => {
  return (
    <ScrollReveal
      variant="scale"
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-5 text-n-3 max-w-lg md:mx-auto">{text}</p>}
    </ScrollReveal>
  );
};

export default Heading;
