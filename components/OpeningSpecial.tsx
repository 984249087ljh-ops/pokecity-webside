export default function OpeningSpecial() {
  return (
    <section id="opening" className="relative overflow-hidden bg-forest py-20 text-ivory sm:py-28">
      <div className="absolute inset-0 bg-[url('/images/dolomiti-bg-1.jpg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(23,52,40,0.96),rgba(23,52,40,0.72))]" />
      <div className="mountain-line absolute bottom-0 left-0 right-0 h-44 bg-ivory/8" />

      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-ivory/18 bg-ivory/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-sun backdrop-blur-xl">
              Opening Special
            </span>
            <h2 className="mt-6 text-balance text-4xl font-black tracking-tight sm:text-6xl">
              Apertura Speciale
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/72">
              A metà luglio apriamo in centro con una piccola sorpresa ispirata
              alle Dolomiti. Ogni giorno prepariamo una quantità limitata, così
              la prima visita resta curata e semplice.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Apertura a metà luglio",
              "Ogni giorno quantità limitata",
              "Solo 30 bowl speciali al giorno",
              "Omaggio Dolomiti in anteprima"
            ].map((item) => (
              <div key={item} className="rounded-[1.7rem] border border-ivory/14 bg-ivory/10 p-5 backdrop-blur-xl">
                <div className="mb-8 h-px w-16 bg-sun" />
                <p className="text-xl font-black">{item}</p>
              </div>
            ))}
            <div className="rounded-[1.7rem] border border-sun/20 bg-sun/18 p-5 text-ivory backdrop-blur-xl sm:col-span-2">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-sun">Countdown placeholder</p>
              <p className="mt-2 text-2xl font-black">Prossimamente online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
