import Link from "next/link";
import {
  bowlSizes,
  ingredientOptions,
  proteinOptions
} from "@/data/pokeCityMenu";
import AllergenTable from "./AllergenTable";
import BowlOptionCard from "./BowlOptionCard";
import BowlSizeCard from "./BowlSizeCard";
import SectionHeading from "./SectionHeading";
import TakeawayCTA from "./TakeawayCTA";

const steps = [
  "Choose your size",
  "Choose your base",
  "Pick your proteins",
  "Add ingredients",
  "Select sauces",
  "Finish with toppings",
  "Send your takeaway order"
];

const featured = [
  proteinOptions.find((item) => item.slug === "salmone"),
  proteinOptions.find((item) => item.slug === "tonno"),
  ingredientOptions.find((item) => item.slug === "avocado"),
  ingredientOptions.find((item) => item.slug === "mango"),
  ingredientOptions.find((item) => item.slug === "edamame"),
  ingredientOptions.find((item) => item.slug === "wakame")
].filter(Boolean);

export default function HomeBowlFlow() {
  return (
    <>
      <section className="section-shell py-20">
        <SectionHeading
          eyebrow="Bowl sizes"
          title="Start from your size"
          text="Every bowl includes a clear number of choices. Add more if you want: extras are calculated automatically in the builder."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {bowlSizes.map((size) => (
            <BowlSizeCard key={size.slug} size={size} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-20 text-ivory">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-ocean/20 blur-3xl" />
        <div className="absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-salmon/20 blur-3xl" />
        <div className="section-shell relative">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-mint">
                How it works
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Choose by picture, not by guesswork.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">
                Build a bowl for lunch, gym day, class break, or takeaway from
                the city centre.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step} className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
                  <p className="text-sm font-black text-ocean">0{index + 1}</p>
                  <p className="mt-2 text-xl font-black">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeading
          eyebrow="Featured ingredients"
          title="Fresh, colorful, easy to read"
          text="Representative ingredients from the POKE CITY menu. Full options are on the menu and builder pages."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {featured.map((option) => (
            <BowlOptionCard key={option!.slug} option={option!} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/menu" className="secondary-button">
            View full menu
          </Link>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="rounded-[2rem] border border-salmon/25 bg-salmon/10 p-6 shadow-soft">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-forest/58">
            Allergy reminder
          </p>
          <p className="mt-3 text-xl font-black leading-8 text-forest">
            Allergen numbers follow our in-store menu. Please inform our team
            about allergies or intolerances before ordering.
          </p>
        </div>
      </section>

      <section className="section-shell py-10">
        <AllergenTable />
      </section>

      <TakeawayCTA />
    </>
  );
}
