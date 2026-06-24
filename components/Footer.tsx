export default function Footer() {
  return (
    <footer className="bg-forest py-10 text-ivory">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-black">POKE CITY Bolzano</p>
          <p className="mt-3 text-white/70">Piazza Domenicani 33, Bolzano</p>
          <p className="text-white/70">Tel: +39 3899277133</p>
          <p className="text-white/70">Instagram: @pokecity.it</p>
          <p className="mt-4 max-w-xl text-xs leading-5 text-white/48">
            Ogni primo sabato del mese sosteniamo progetti sportivi locali con
            “Sabato per la Comunità”.
          </p>
          <p className="mt-5 text-sm text-white/55">© 2026 Poke City. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-white/70">
          <a href="/menu" className="transition hover:text-white">Menu</a>
          <a href="/build-your-own" className="transition hover:text-white">Build Your Bowl</a>
          <a href="/allergens" className="transition hover:text-white">Allergeni</a>
          <a href="#" className="transition hover:text-white">Privacy Policy</a>
          <a href="#" className="transition hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
