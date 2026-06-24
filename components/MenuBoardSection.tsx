import type { BowlOption } from "@/data/pokeCityMenu";
import BowlOptionCard from "./BowlOptionCard";

type MenuBoardSectionProps = {
  title: string;
  eyebrow?: string;
  extra?: string;
  options: BowlOption[];
};

export default function MenuBoardSection({
  title,
  eyebrow,
  extra,
  options
}: MenuBoardSectionProps) {
  return (
    <section className="scroll-mt-28">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {eyebrow ? (
            <p className="text-xs font-black uppercase tracking-[0.2em] text-sage">{eyebrow}</p>
          ) : null}
          <h2 className="mt-1 text-3xl font-black tracking-tight text-forest md:text-5xl">
            {title}
          </h2>
        </div>
        {extra ? (
          <p className="rounded-full bg-forest px-5 py-3 text-sm font-black text-ivory">
            {extra}
          </p>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {options.map((option) => (
          <BowlOptionCard key={option.slug} option={option} />
        ))}
      </div>
    </section>
  );
}
