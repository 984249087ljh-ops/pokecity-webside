const actions = [
  {
    label: "Google Maps",
    href: "https://www.google.com/maps/search/?api=1&query=Piazza+Domenicani+33+Bolzano+Italy"
  },
  { label: "Chiama ora", href: "tel:+393899277133" },
  { label: "WhatsApp", href: "https://wa.me/393899277133" },
  { label: "Instagram", href: "https://www.instagram.com/pokecity.it" }
];

export default function Location() {
  return (
    <section id="location" className="story-section bg-transparent py-20 sm:py-28">
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Contatti</span>
            <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-forest sm:text-5xl">
              Poke fresco in Piazza Domenicani.
            </h2>
            <div className="mt-7 space-y-4 text-lg leading-8 text-forest/72">
              <p>
                <strong className="text-forest">Poke City Bolzano</strong>
                <br />
                Piazza Domenicani 33, Bolzano, Italy
              </p>
              <p>
                Tel / WhatsApp: <a className="font-black text-sage" href="tel:+393899277133">+39 3899277133</a>
                <br />
                Instagram: <a className="font-black text-sage" href="https://www.instagram.com/pokecity.it">@pokecity.it</a>
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {actions.map((action, index) => (
                <a key={action.label} href={action.href} className={index === 2 ? "primary-button" : "secondary-button"}>
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2.4rem] border border-white/55 bg-ivory/45 p-4 shadow-soft backdrop-blur-2xl">
            <div className="absolute inset-0 image-fallback" />
            <div className="absolute inset-0 bg-[url('/images/dolomiti-bg-2.jpg')] bg-cover bg-center opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-br from-ivory/84 via-ivory/54 to-forest/34" />
            <div className="relative flex h-full min-h-[488px] items-end rounded-[2rem] border border-white/45 p-5 sm:p-8">
              <div className="max-w-md rounded-[1.8rem] border border-white/55 bg-ivory/76 p-6 text-forest shadow-soft backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sage">
                  Google Maps embed placeholder
                </p>
                <p className="mt-3 text-3xl font-black">Piazza Domenicani 33</p>
                <p className="mt-3 text-forest/65">
                  Qui andrà l&apos;iframe Google Maps quando la sede sarà pronta. I
                  pulsanti sono già pensati per chi arriva da telefono.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
