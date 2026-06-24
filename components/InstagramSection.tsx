const images = [
  "/images/instagram-1.jpg",
  "/images/instagram-2.jpg",
  "/images/instagram-3.jpg",
  "/images/salmon-bowl.jpg",
  "/images/vegan-bowl.jpg",
  "/images/mango-bowl.jpg"
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="relative overflow-hidden bg-forest py-20 text-ivory sm:py-28">
      <div className="absolute inset-0 bg-[url('/images/dolomiti-texture.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(217,130,75,0.18),transparent_28rem)]" />

      <div className="section-shell relative">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="inline-flex rounded-full border border-ivory/18 bg-ivory/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-sun backdrop-blur-xl">
              Social
            </span>
            <h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl">
              Seguici su Instagram
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ivory/70">
              Novità, bowl del giorno, apertura e piccoli momenti da Piazza
              Domenicani.
            </p>
          </div>
          <a href="https://www.instagram.com/pokecity.it" className="primary-button bg-ivory text-forest hover:bg-mint">
            @pokecity.it
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {images.map((image, index) => (
            <a
              key={image}
              href="https://www.instagram.com/pokecity.it"
              className={`lift-hover relative aspect-square overflow-hidden rounded-[1.8rem] border border-ivory/12 bg-ivory/10 shadow-soft backdrop-blur-xl ${index % 2 ? "lg:mt-10" : ""}`}
              aria-label={`Instagram preview ${index + 1}`}
            >
              <div className="absolute inset-0 image-fallback" />
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/62 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-sm font-black text-ivory">
                Poke City
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
