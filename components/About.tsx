export default function About() {
  return (
    <section id="about" className="story-section bg-transparent py-20 sm:py-28">
      <div className="section-shell relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative order-2 min-h-[520px] lg:order-1">
          <div className="absolute left-0 top-0 h-[72%] w-[72%] overflow-hidden rounded-[2.4rem] border border-white/55 bg-ivory/45 shadow-soft backdrop-blur-2xl">
            <div className="absolute inset-0 image-fallback" />
            <div className="absolute inset-0 bg-[url('/images/poke-bowl-1.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/38 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 h-[56%] w-[58%] overflow-hidden rounded-[2rem] border border-white/55 bg-ivory/45 shadow-soft backdrop-blur-2xl">
            <div className="absolute inset-0 image-fallback" />
            <div className="absolute inset-0 bg-[url('/images/fresh-ingredients.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/42 to-transparent" />
            <span className="ingredient-label absolute left-4 top-4">Bolzano lunch</span>
          </div>
          <div className="absolute left-[8%] top-[62%] rounded-full border border-white/55 bg-ivory/76 px-5 py-3 text-sm font-black text-forest shadow-soft backdrop-blur-xl">
            Piazza Domenicani 33
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">Chi siamo</span>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-forest sm:text-5xl">
            Dal cuore di Bolzano, con energia fresca.
          </h2>
          <p className="mt-6 text-lg leading-8 text-forest/72">
            Poke City nasce per una pausa concreta: ingredienti freschi, servizio
            veloce e una bowl che resta leggera prima del lavoro, dopo le lezioni
            o durante un giro in centro.
          </p>
          <p className="mt-4 text-lg leading-8 text-forest/72">
            Il mood guarda alle Dolomiti senza trasformarsi in souvenir: aria
            pulita, colori naturali, porzioni chiare e un posto facile da
            ricordare in Piazza Domenicani.
          </p>
        </div>
      </div>
    </section>
  );
}
