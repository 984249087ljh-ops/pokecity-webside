import type { BowlOption } from "@/data/pokeCityMenu";
import AllergenBadge from "./AllergenBadge";
import SmartImage from "./SmartImage";

type BowlOptionCardProps = {
  option: BowlOption;
  selected?: boolean;
  onSelect?: () => void;
};

export default function BowlOptionCard({
  option,
  selected = false,
  onSelect
}: BowlOptionCardProps) {
  const Wrapper = onSelect ? "button" : "div";

  return (
    <Wrapper
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-[1.35rem] border bg-white/72 text-left shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
        selected ? "border-forest ring-4 ring-sage/20" : "border-forest/8 hover:border-sage/35"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={option.image}
          alt={option.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
        {selected ? (
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-forest text-xs font-black text-ivory shadow-soft">
            ✓
          </span>
        ) : null}
        {option.isPopular ? (
          <span className="absolute left-3 top-3 rounded-full bg-salmon px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-forest">
            Popular
          </span>
        ) : null}
      </div>
      <div className="min-h-28 p-4">
        <h3 className="text-base font-black leading-tight text-forest">{option.name}</h3>
        <div className="mt-3 flex min-h-6 flex-wrap gap-1.5">
          {option.allergens.length ? (
            option.allergens.map((id) => <AllergenBadge key={id} id={id} />)
          ) : (
            <span className="rounded-full bg-mint/70 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-forest/58">
              no badge
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
