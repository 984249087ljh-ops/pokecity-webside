import Link from "next/link";
import AllergenTable from "@/components/AllergenTable";
import BowlSizeCard from "@/components/BowlSizeCard";
import Footer from "@/components/Footer";
import MenuBoardSection from "@/components/MenuBoardSection";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import {
  baseOptions,
  bowlSizes,
  ingredientOptions,
  proteinOptions,
  sauceOptions,
  toppingOptions
} from "@/data/pokeCityMenu";

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(231,157,145,0.20),transparent_28rem),radial-gradient(circle_at_80%_16%,rgba(121,183,183,0.24),transparent_30rem)]" />
        <div className="section-shell relative py-16">
          <SectionHeading
            eyebrow="Menu"
            title="Our Menu"
            text="Choose your size, base, proteins, ingredients, sauces and toppings. Every option is visual, structured and ready for takeaway."
          />
          <div className="mt-8">
            <Link href="/build-your-own" className="primary-button">
              Build Your Bowl
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {bowlSizes.map((size) => (
            <BowlSizeCard key={size.slug} size={size} />
          ))}
        </div>
      </section>

      <div className="section-shell space-y-20 py-12">
        <MenuBoardSection title="Base" options={baseOptions} />
        <MenuBoardSection title="Proteine" extra="Extra +2,00€" options={proteinOptions} />
        <MenuBoardSection title="Ingredienti" extra="Extra +0,50€" options={ingredientOptions} />
        <MenuBoardSection title="Salse" extra="Extra +0,30€" options={sauceOptions} />
        <MenuBoardSection title="Topping" extra="Extra +0,30€" options={toppingOptions} />
        <AllergenTable />
      </div>

      <section className="section-shell pb-20">
        <div className="rounded-[2rem] bg-forest p-8 text-ivory shadow-soft md:p-12">
          <h2 className="text-4xl font-black">Ready to build your bowl?</h2>
          <p className="mt-4 max-w-xl text-white/68">
            Open the visual builder, select your ingredients and continue to the takeaway form.
          </p>
          <Link href="/build-your-own" className="mt-7 inline-flex rounded-full bg-ivory px-7 py-4 text-sm font-black text-forest">
            Build Your Bowl
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
