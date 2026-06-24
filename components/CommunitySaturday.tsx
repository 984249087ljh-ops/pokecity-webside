const highlights = [
  "1€ donati per ogni bowl",
  "Ogni primo sabato del mese",
  "Progetti sportivi locali",
  "Donazione trasparente"
];

export default function CommunitySaturday() {
  return (
    <section id="community" className="story-section bg-transparent py-20 sm:py-28">
      <div className="section-shell relative">
        <div className="grid overflow-hidden rounded-[2.4rem] border border-white/55 bg-ivory/48 shadow-soft backdrop-blur-2xl lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <span className="eyebrow">Responsabilità locale</span>
            <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-forest sm:text-5xl">
              Sabato per la Comunità
            </h2>
            <p className="mt-4 max-w-2xl text-xl font-semibold leading-8 text-sage">
              Il primo sabato di ogni mese, una bowl può fare la differenza.
            </p>

            <div className="mt-8 space-y-5 text-base leading-8 text-forest/72 sm:text-lg">
              <p>
                Ogni primo sabato del mese, Poke City sostiene la comunità
                locale. Per ogni bowl venduta, doniamo 1€ a progetti locali
                legati alla riabilitazione sportiva e alla crescita dei giovani
                atleti di Bolzano.
              </p>
              <p>
                La partecipazione è completamente volontaria: se un cliente non
                desidera aderire all’iniziativa, può comunicarlo al nostro staff
                prima dell’ordine e l’importo verrà adattato senza alcun
                problema.
              </p>
              <p>
                Crediamo nella trasparenza: dopo ogni evento, pubblicheremo in
                negozio e sul nostro profilo Instagram l’importo raccolto, la
                ricevuta della donazione e l’eventuale ringraziamento dell’ente
                beneficiario.
              </p>
            </div>

            <p className="mt-7 text-lg font-black text-forest">
              Together, we build a healthier community.
            </p>
            <a href="https://www.instagram.com/pokecity.it" className="primary-button mt-8">
              Scopri il progetto del mese
            </a>
          </div>

          <div className="relative min-h-[420px] bg-forest p-6 text-ivory sm:p-8 lg:min-h-full">
            <div className="absolute inset-0 bg-[url('/images/community-sport.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,52,40,0.18)_0%,rgba(23,52,40,0.52)_42%,rgba(23,52,40,0.9)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(232,184,107,0.18),transparent_20rem)]" />
            <div className="mountain-line absolute bottom-0 left-0 right-0 h-40 bg-ivory/8" />

            <div className="relative flex h-full flex-col justify-end">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sun">
                Community impact
              </p>
              <p className="mt-3 text-7xl font-black">1€</p>
              <div className="mt-7 grid gap-3">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-ivory/14 bg-ivory/10 px-4 py-4 text-sm font-black backdrop-blur-xl">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
