import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell grid gap-10 py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About POKE CITY"
            title="A fresh bowl shop in the heart of Bolzano"
            text="POKE CITY is built around one simple idea: make a bowl easy to read, easy to customize and good enough to become your everyday takeaway ritual."
          />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forest/66">
            Choose your base, proteins, colorful ingredients, sauces and toppings.
            We keep the experience clean, visual and transparent, with allergen
            numbers visible on every option.
          </p>
          <Link href="/build-your-own" className="primary-button mt-8">
            Build Your Bowl
          </Link>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 p-4 shadow-soft">
          <SmartImage src="/images/fresh-ingredients.jpg" alt="Fresh poke ingredients" className="h-[34rem] w-full rounded-[1.5rem] object-cover" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
