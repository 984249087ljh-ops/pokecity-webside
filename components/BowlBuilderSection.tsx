import type { BowlOption } from "@/data/pokeCityMenu";
import BowlOptionCard from "./BowlOptionCard";

type BowlBuilderSectionProps = {
  title: string;
  options: BowlOption[];
  selected: string[];
  included: number;
  extraLabel: string;
  required?: boolean;
  onToggle: (slug: string) => void;
};

export default function BowlBuilderSection({
  title,
  options,
  selected,
  included,
  extraLabel,
  required = false,
  onToggle
}: BowlBuilderSectionProps) {
  return (
    <section className="scroll-mt-28">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-black text-forest">{title}</h2>
          <p className="mt-1 text-sm font-bold text-forest/58">
            {selected.length} / {included} included {required ? "· required" : ""}
          </p>
        </div>
        <p className="rounded-full bg-mint px-4 py-2 text-sm font-black text-forest">
          {extraLabel}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {options.map((option) => (
          <BowlOptionCard
            key={option.slug}
            option={option}
            selected={selected.includes(option.slug)}
            onSelect={() => onToggle(option.slug)}
          />
        ))}
      </div>
    </section>
  );
}
