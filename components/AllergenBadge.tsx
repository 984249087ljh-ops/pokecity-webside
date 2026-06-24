import { allergens } from "@/data/pokeCityMenu";

type AllergenBadgeProps = {
  id: number;
};

export default function AllergenBadge({ id }: AllergenBadgeProps) {
  const allergen = allergens.find((item) => item.id === id);

  return (
    <span className="group relative inline-flex">
      <span
        title={allergen?.name}
        className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-forest/10 bg-ivory px-1.5 text-[0.68rem] font-black text-forest shadow-sm"
      >
        {id}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-forest px-3 py-1.5 text-[0.68rem] font-bold text-ivory shadow-soft group-hover:block">
        {allergen?.name ?? `Allergene ${id}`}
      </span>
    </span>
  );
}
