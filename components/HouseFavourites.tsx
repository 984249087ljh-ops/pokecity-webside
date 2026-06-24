const favourites = [
  {
    name: "City Salmon Bowl",
    tag: "Popular",
    image: "/images/salmon-bowl.jpg",
    description: "Salmone, base fresca, verdure croccanti e salsa leggera."
  },
  {
    name: "Dolomiti Chicken Bowl",
    tag: "Fresh",
    image: "/images/poke-bowl-2.jpg",
    description: "Pollo, ingredienti di stagione e un finale saporito ma pulito."
  },
  {
    name: "Summer Mango Bowl",
    tag: "Apricot",
    image: "/images/mango-bowl.jpg",
    description: "Mango, crunch e colori estivi per una pausa luminosa."
  },
  {
    name: "Vegan Green Bowl",
    tag: "Vegan",
    image: "/images/vegan-bowl.jpg",
    description: "Verde, leggera, vegetale: pensata per restare in movimento."
  }
];

export default function HouseFavourites() {
  return (
    <section className="story-section bg-transparent py-20 sm:py-28">
      <div className="section-shell relative">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Signature Bowls</span>
            <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-forest sm:text-5xl">
              Bowl pronte per pranzo, foto e giornata piena.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-forest/68">
            Idee semplici e riconoscibili, facili da ordinare quando sei in pausa,
            in viaggio o prima di salire verso le Dolomiti.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {favourites.map((item, index) => (
            <article
              key={item.name}
              className={`lift-hover relative overflow-hidden rounded-[2rem] border border-white/55 bg-ivory/45 shadow-soft backdrop-blur-2xl ${index % 2 ? "lg:mt-12" : ""}`}
            >
              <div className="relative aspect-[0.86] overflow-hidden">
                <div className="absolute inset-0 image-fallback" />
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/64 via-transparent to-ivory/5" />
                <span className="ingredient-label absolute left-4 top-4">{item.tag}</span>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory">
                  <h3 className="text-2xl font-black">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ivory/74">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
