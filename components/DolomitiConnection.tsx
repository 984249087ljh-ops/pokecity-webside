const moments = [
  {
    title: "Prima del sentiero",
    text: "Una bowl leggera, facile da portare nella giornata, senza appesantire."
  },
  {
    title: "Dopo il rientro",
    text: "Colori, proteine e qualcosa di fresco quando torni in centro a Bolzano."
  },
  {
    title: "Un ricordo semplice",
    text: "Foto, magnete o bowl del giorno: piccoli gesti che restano legati al viaggio."
  }
];

export default function DolomitiConnection() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-ivory sm:py-28">
      <div className="absolute inset-0 bg-[url('/images/dolomiti-bg-1.jpg')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,52,40,0.92)_0%,rgba(23,52,40,0.78)_48%,rgba(23,52,40,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[url('/images/dolomiti-texture.jpg')] bg-cover bg-center opacity-10 mix-blend-screen" />
      <div className="mountain-line absolute bottom-0 left-0 right-0 h-52 bg-ivory/8" />

      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex rounded-full border border-ivory/18 bg-ivory/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-sun backdrop-blur-xl">
            Dolomiti Mood
          </span>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-6xl">
            Una pausa fresca tra città e montagne.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/72">
            Poke City non vuole sembrare una cartolina. Vuole stare nel ritmo vero
            di Bolzano: ufficio, università, turisti, sentieri e rientri in centro.
          </p>
          <div className="relative mt-9 aspect-[0.92] overflow-hidden rounded-[2.4rem] border border-ivory/14 bg-ivory/10 shadow-soft backdrop-blur-xl">
            <div className="absolute inset-0 image-fallback opacity-70" />
            <div className="absolute inset-0 bg-[url('/images/dolomiti-bg-2.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-ivory/10" />
            <div className="food-fallback absolute -bottom-20 -right-16 h-64 w-64 rounded-full opacity-85 shadow-soft" />
            <p className="absolute bottom-6 left-6 right-6 text-2xl font-black">
              Prima o dopo le Dolomiti, passa da Poke City.
            </p>
          </div>
        </div>

        <div className="space-y-6 lg:pt-40">
          {moments.map((moment) => (
            <article key={moment.title} className="rounded-[2rem] border border-ivory/14 bg-ivory/10 p-6 backdrop-blur-xl sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sun">Bolzano rhythm</p>
              <h3 className="mt-4 text-3xl font-black">{moment.title}</h3>
              <p className="mt-4 max-w-xl text-lg leading-8 text-ivory/72">{moment.text}</p>
            </article>
          ))}
          <div className="rounded-[2rem] border border-ivory/14 bg-apricot/16 p-6 backdrop-blur-xl sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-sun">
              Instagram corner
            </p>
            <p className="mt-4 text-2xl font-black">
              Uno spazio pronto per bowl del giorno, omaggi e piccoli ricordi
              ispirati alle Dolomiti.
            </p>
            <a href="https://www.instagram.com/pokecity.it" className="primary-button mt-7 bg-ivory text-forest hover:bg-mint">
              Segui @pokecity.it
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
