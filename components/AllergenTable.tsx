import { allergenDisclaimerEn, allergenDisclaimerIt, allergens } from "@/data/pokeCityMenu";

export default function AllergenTable() {
  return (
    <section className="rounded-[2rem] border border-forest/10 bg-white/62 p-5 shadow-soft backdrop-blur-xl md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-sage">Allergeni</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-forest md:text-4xl">
            Numeri allergeni
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-forest/62">
          {allergenDisclaimerIt}
        </p>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {allergens.map((allergen) => (
          <div
            key={allergen.id}
            className="flex items-center gap-3 rounded-2xl border border-forest/8 bg-ivory/72 p-4"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-black text-ivory">
              {allergen.id}
            </span>
            <span className="font-black text-forest">{allergen.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-forest/58">{allergenDisclaimerEn}</p>
    </section>
  );
}
