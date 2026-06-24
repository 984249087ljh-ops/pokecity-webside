const ingredients = [
  { label: "fresh", image: "/images/salmon-bowl.jpg", title: "Salmon" },
  { label: "daily prep", image: "/images/vegan-bowl.jpg", title: "Avocado" },
  { label: "colorful", image: "/images/mango-bowl.jpg", title: "Mango" },
  { label: "light", image: "/images/salad-bowl.jpg", title: "Salad" }
];

export default function FreshIngredients() {
  return (
    <section className="story-section bg-transparent py-20 sm:py-28">
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Fresh Ingredients</span>
            <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-forest sm:text-5xl">
              Colori naturali, preparazione pulita, luce da pranzo vero.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-forest/70">
              Una bowl deve sembrare buona prima ancora del primo morso: riso o
              insalata, proteine, frutta, verdure croccanti e salse dosate al
              momento.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="relative col-span-2 min-h-[320px] overflow-hidden rounded-[2.2rem] border border-white/55 bg-ivory/45 shadow-soft backdrop-blur-2xl sm:min-h-[430px]">
              <div className="absolute inset-0 image-fallback" />
              <div className="absolute inset-0 bg-[url('/images/fresh-ingredients.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/42 via-transparent to-ivory/10" />
              <span className="ingredient-label absolute left-5 top-5">daily prep</span>
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/30 bg-ivory/68 p-5 text-forest backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sage">
                  Bolzano lunch
                </p>
                <p className="mt-2 text-2xl font-black">Una bowl fresca prima di tornare in città.</p>
              </div>
            </div>

            {ingredients.map((item) => (
              <div key={item.title} className="relative min-h-[170px] overflow-hidden rounded-[1.8rem] border border-white/55 bg-ivory/45 shadow-soft backdrop-blur-2xl sm:min-h-[220px]">
                <div className="absolute inset-0 image-fallback" />
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/42 to-transparent" />
                <span className="ingredient-label absolute left-4 top-4">{item.label}</span>
                <p className="absolute bottom-4 left-4 text-xl font-black text-ivory drop-shadow">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
