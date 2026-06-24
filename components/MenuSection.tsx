import { bowlSizes, buildYourBowlSteps } from "@/data/menu";

const toneClasses: Record<string, string> = {
  sage: "from-sage/20 to-ivory/45",
  apricot: "from-apricot/20 to-ivory/45",
  forest: "from-forest/18 to-ivory/45"
};

export default function MenuSection() {
  return (
    <section id="menu" className="story-section bg-transparent py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-forest/10 to-transparent" />
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <span className="eyebrow">Menu</span>
            <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-forest sm:text-5xl">
              Tre misure, una pausa fresca.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-forest/70 lg:justify-self-end">
            Il menu è pensato per essere letto in pochi secondi: scegli la
            dimensione, poi componi la tua bowl con base, proteine, ingredienti,
            salse e topping.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {bowlSizes.map((size) => (
            <article
              key={size.name}
              className={`lift-hover relative overflow-hidden rounded-[2rem] border border-white/55 bg-gradient-to-br ${toneClasses[size.tone]} p-4 shadow-soft backdrop-blur-2xl`}
            >
              <div className="relative aspect-[1.15] overflow-hidden rounded-[1.5rem] bg-ivory/50">
                <div className="absolute inset-0 image-fallback" />
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${size.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/38 via-transparent to-ivory/18" />
                <div className="food-fallback absolute bottom-[-24%] right-[-18%] h-44 w-44 rounded-full opacity-80 blur-[1px]" />
              </div>

              <div className="relative p-3 pt-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-sage">
                      Bowl size
                    </p>
                    <h3 className="mt-1 text-3xl font-black text-forest">{size.name}</h3>
                  </div>
                  <p className="rounded-full bg-forest px-4 py-2 text-xl font-black text-ivory">
                    {size.price}
                  </p>
                </div>

                <div className="mt-6 grid gap-2.5">
                  {size.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-forest/72">
                      <span className="h-1.5 w-1.5 rounded-full bg-apricot" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 overflow-hidden rounded-[2.2rem] border border-forest/10 bg-forest text-ivory shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[280px] overflow-hidden">
            <div className="absolute inset-0 image-fallback" />
            <div className="absolute inset-0 bg-[url('/images/fresh-ingredients.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/25 to-forest/74" />
            <div className="mountain-line absolute bottom-0 left-0 right-0 h-28 bg-ivory/18" />
          </div>
          <div className="p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-sun">
              Build Your Own Bowl
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Componila come vuoi, senza perdere tempo al banco.
            </h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-5">
              {buildYourBowlSteps.map((step) => (
                <div key={step} className="rounded-2xl border border-ivory/12 bg-ivory/10 px-4 py-4 text-center text-sm font-black backdrop-blur">
                  {step}
                </div>
              ))}
            </div>
            <a href="https://wa.me/393899277133" className="primary-button mt-8 bg-ivory text-forest hover:bg-mint">
              Chiedi su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
