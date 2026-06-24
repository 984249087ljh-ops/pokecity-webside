import {
  getSelectedSize,
  getSelectionAllergens,
  getSelectionOptions,
  type BowlSelection,
  type PriceBreakdown,
  formatEuro
} from "@/lib/pricing";

type BowlSummaryProps = {
  selection: BowlSelection;
  price: PriceBreakdown;
  compact?: boolean;
};

function listNames(items: { name: string }[]) {
  return items.length ? items.map((item) => item.name).join(", ") : "Non selezionato";
}

export default function BowlSummary({ selection, price, compact = false }: BowlSummaryProps) {
  const size = getSelectedSize(selection);
  const selected = getSelectionOptions(selection);
  const selectedAllergens = getSelectionAllergens(selection);

  if (compact) {
    return (
      <div>
        <p className="truncate text-sm font-black text-forest">{size?.name ?? "Choose size"}</p>
        <p className="text-2xl font-black text-forest">{formatEuro(price.total)}</p>
      </div>
    );
  }

  return (
    <aside className="rounded-[1.75rem] border border-forest/10 bg-ivory/86 p-5 shadow-soft backdrop-blur-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-sage">Summary</p>
          <h2 className="mt-1 text-2xl font-black text-forest">
            {size?.name ?? "La tua bowl"}
          </h2>
        </div>
        <p className="rounded-full bg-forest px-4 py-2 text-lg font-black text-ivory">
          {formatEuro(price.total)}
        </p>
      </div>

      <div className="mt-5 space-y-4 text-sm">
        <SummaryLine label="Base" value={listNames(selected.base)} />
        <SummaryLine label="Proteine" value={listNames(selected.proteins)} />
        <SummaryLine label="Ingredienti" value={listNames(selected.ingredients)} />
        <SummaryLine label="Salse" value={listNames(selected.sauces)} />
        <SummaryLine label="Topping" value={listNames(selected.toppings)} />
      </div>

      <div className="mt-5 rounded-2xl bg-white/62 p-4 text-sm font-bold text-forest/70">
        <PriceLine label="Base price" value={price.basePrice} />
        <PriceLine label="Extra proteine" value={price.extras.proteins} />
        <PriceLine label="Extra ingredienti" value={price.extras.ingredients} />
        <PriceLine label="Extra salse" value={price.extras.sauces} />
        <PriceLine label="Extra topping" value={price.extras.toppings} />
        <div className="mt-3 border-t border-forest/10 pt-3">
          <PriceLine label="Total" value={price.total} strong />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-salmon/25 bg-salmon/12 p-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-forest/58">
          Allergeni inclusi
        </p>
        <p className="mt-2 text-sm font-bold text-forest">
          {selectedAllergens.length
            ? selectedAllergens.map((allergen) => `${allergen?.id} ${allergen?.name}`).join(", ")
            : "Nessun allergene selezionato"}
        </p>
      </div>
    </aside>
  );
}

function SummaryLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-forest/42">{label}</p>
      <p className="mt-1 font-bold leading-6 text-forest">{value}</p>
    </div>
  );
}

function PriceLine({
  label,
  value,
  strong = false
}: {
  label: string;
  value: number;
  strong?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between gap-3 ${strong ? "text-lg text-forest" : ""}`}>
      <span>{label}</span>
      <span>{formatEuro(value)}</span>
    </div>
  );
}
