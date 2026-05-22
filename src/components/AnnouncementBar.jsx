import { announcement } from "../constants/platse";

const AnnouncementBar = () => {
  const text = `${announcement} · `.repeat(4);

  return (
    <div className="bg-platse-red text-white text-xs md:text-sm font-semibold uppercase tracking-wide overflow-hidden py-2.5">
      <div className="ticker-track whitespace-nowrap">
        <span className="px-8">{text}</span>
        <span className="px-8" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
