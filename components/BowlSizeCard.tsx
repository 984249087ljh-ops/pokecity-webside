import type { BowlSize } from "@/data/pokeCityMenu";
import { formatEuro } from "@/lib/pricing";
import SmartImage from "./SmartImage";

type BowlSizeCardProps = {
  size: BowlSize;
  selected?: boolean;
  onSelect?: () => void;
};

export default function BowlSizeCard({ size, selected = false, onSelect }: BowlSizeCardProps) {
  const Wrapper = onSelect ? "button" : "div";

  return (
    <Wrapper
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-[1.75rem] border bg-white/70 text-left shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
        selected ? "border-forest ring-4 ring-sage/20" : "border-forest/10"
      }`}
    >
      <div className="relative h-44 overflow-hidden">
        <SmartImage
          src={size.image}
          alt={size.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/55 to-transparent" />
        {selected ? (
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-black text-ivory">
            ✓
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <div className="flex items-end justify-between gap-3">
          <h3 className="text-2xl font-black text-forest">{size.name}</h3>
          <p className="text-2xl font-black text-apricot">{formatEuro(size.price)}</p>
        </div>
        <ul className="mt-4 grid gap-2 text-sm font-bold text-forest/68">
          <li>{size.includes.base} base</li>
          <li>{size.includes.proteins} proteine</li>
          <li>{size.includes.ingredients} ingredienti</li>
          <li>{size.includes.sauces} salse</li>
          <li>{size.includes.toppings} topping</li>
        </ul>
      </div>
    </Wrapper>
  );
}
