import { todayMenu } from "../constants/brand";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

const MenuBoard = () => (
  <section className="py-20 md:py-24 bg-noon-cream border-y border-noon-line">
    <div className="wrap">
      <Reveal className="mb-12">
        <SectionIntro
          label="Walk-in board"
          title="What we're cooking today."
          description="Changes when the market does — not when a calendar says so."
        />
      </Reveal>

      <Reveal delay={80}>
        <ul className="divide-y divide-noon-line rounded-3xl border border-noon-line bg-noon-sand overflow-hidden shadow-soft">
          {todayMenu.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-6 px-6 md:px-10 py-5 md:py-6 transition-colors hover:bg-white/60"
            >
              <div>
                <p className="font-medium text-noon-ink">{item.name}</p>
                <p className="text-xs text-noon-mist mt-0.5 uppercase tracking-wide">
                  {item.note}
                </p>
              </div>
              <span className="font-serif text-xl text-noon-coral shrink-0">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default MenuBoard;
