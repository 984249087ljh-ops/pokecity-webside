"use client";

import Link from "next/link";
import { useEffect } from "react";
import SmartImage from "./SmartImage";
import WaveDecoration from "./WaveDecoration";

export default function Hero() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      document.documentElement.style.setProperty("--hero-shift", `${window.scrollY}px`);
      frame = 0;
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ivory pt-24">
      <WaveDecoration />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(231,157,145,0.22),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(121,183,183,0.22),transparent_30rem)]" />
      <div className="parallax-hero-bg absolute inset-x-0 top-0 h-[62%] bg-[url('/images/dolomiti-hero.jpg')] bg-cover bg-center opacity-18" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/75 via-ivory/88 to-cream" />

      <div className="section-shell relative z-10 grid min-h-[calc(100svh-6rem)] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-3xl">
          <p className="eyebrow">POKE CITY · Bolzano</p>
          <h1 className="mt-6 text-balance text-6xl font-black leading-[0.88] tracking-tight text-forest md:text-8xl">
            Compila la tua Bowl
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-forest/68 md:text-xl">
            Fresh poke bowls made your way: choose your base, proteins,
            ingredients, sauces and toppings. Then send your takeaway request to
            Piazza Domenicani 33.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/build-your-own" className="primary-button">
              Build Your Bowl
            </Link>
            <Link href="/menu" className="secondary-button">
              View Menu
            </Link>
            <Link href="/order" className="secondary-button">
              Order Takeaway
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Regular 8,50€", "Large 11,00€", "Extra Large 13,50€"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/70 bg-white/58 px-5 py-4 font-black text-forest shadow-sm backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-4 top-10 z-20 rounded-full bg-forest px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-ivory shadow-soft">
            Takeaway ready
          </div>
          <div className="absolute -right-2 bottom-10 z-20 rounded-full border border-forest/10 bg-white/78 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-forest shadow-soft backdrop-blur-xl">
            Fresh daily prep
          </div>
          <div className="relative aspect-square rounded-[3rem] border border-white/70 bg-white/45 p-4 shadow-soft backdrop-blur-2xl">
            <div className="absolute inset-10 rounded-full bg-ocean/20 blur-3xl" />
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-cream">
              <SmartImage
                src="/images/poke-hero.png"
                alt="Fresh poke bowl"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/16 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
