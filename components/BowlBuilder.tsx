"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  baseOptions,
  bowlSizes,
  ingredientOptions,
  proteinOptions,
  sauceOptions,
  toppingOptions
} from "@/data/pokeCityMenu";
import {
  calculateBowlPrice,
  emptySelection,
  isSelectionReady,
  type BowlSelection
} from "@/lib/pricing";
import BowlBuilderSection from "./BowlBuilderSection";
import BowlSizeCard from "./BowlSizeCard";
import BowlSummary from "./BowlSummary";

export default function BowlBuilder() {
  const router = useRouter();
  const [selection, setSelection] = useState<BowlSelection>(emptySelection);
  const price = useMemo(() => calculateBowlPrice(selection), [selection]);
  const selectedSize = bowlSizes.find((size) => size.slug === selection.sizeSlug);
  const ready = isSelectionReady(selection);

  function toggleList(key: keyof Omit<BowlSelection, "sizeSlug">, slug: string, maxOne = false) {
    setSelection((current) => {
      const currentList = current[key];
      const exists = currentList.includes(slug);
      return {
        ...current,
        [key]: maxOne ? (exists ? [] : [slug]) : exists ? currentList.filter((item) => item !== slug) : [...currentList, slug]
      };
    });
  }

  function continueToOrder() {
    if (!ready) return;
    localStorage.setItem("pokeCityBowlSelection", JSON.stringify(selection));
    router.push("/order?custom=true");
  }

  return (
    <div className="section-shell grid gap-8 pb-28 pt-32 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-12">
        <div>
          <p className="eyebrow">Online bowl builder</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-forest md:text-7xl">
            Build Your Bowl
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-forest/66">
            Choose your size, base, proteins, ingredients, sauces and toppings.
            Every choice is visual, quick, and ready for takeaway.
          </p>
        </div>

        <section>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-forest">Step 1 · Choose your size</h2>
              <p className="mt-1 text-sm font-bold text-forest/58">Required before building</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {bowlSizes.map((size) => (
              <BowlSizeCard
                key={size.slug}
                size={size}
                selected={selection.sizeSlug === size.slug}
                onSelect={() => setSelection((current) => ({ ...current, sizeSlug: size.slug }))}
              />
            ))}
          </div>
        </section>

        <BowlBuilderSection
          title="Step 2 · Base"
          options={baseOptions}
          selected={selection.base}
          included={selectedSize?.includes.base ?? 1}
          extraLabel="Included"
          required
          onToggle={(slug) => toggleList("base", slug, true)}
        />
        <BowlBuilderSection
          title="Step 3 · Proteine"
          options={proteinOptions}
          selected={selection.proteins}
          included={selectedSize?.includes.proteins ?? 0}
          extraLabel="Extra +2,00€"
          required
          onToggle={(slug) => toggleList("proteins", slug)}
        />
        <BowlBuilderSection
          title="Step 4 · Ingredienti"
          options={ingredientOptions}
          selected={selection.ingredients}
          included={selectedSize?.includes.ingredients ?? 0}
          extraLabel="Extra +0,50€"
          onToggle={(slug) => toggleList("ingredients", slug)}
        />
        <BowlBuilderSection
          title="Step 5 · Salse"
          options={sauceOptions}
          selected={selection.sauces}
          included={selectedSize?.includes.sauces ?? 0}
          extraLabel="Extra +0,30€"
          required
          onToggle={(slug) => toggleList("sauces", slug)}
        />
        <BowlBuilderSection
          title="Step 6 · Topping"
          options={toppingOptions}
          selected={selection.toppings}
          included={selectedSize?.includes.toppings ?? 0}
          extraLabel="Extra +0,30€"
          onToggle={(slug) => toggleList("toppings", slug)}
        />
      </div>

      <div className="hidden lg:block">
        <div className="sticky top-28 space-y-4">
          <BowlSummary selection={selection} price={price} />
          <button
            onClick={continueToOrder}
            disabled={!ready}
            className="primary-button w-full disabled:pointer-events-none disabled:opacity-40"
          >
            Continue to Order
          </button>
          {!ready ? (
            <p className="text-center text-sm font-bold text-forest/52">
              Select size, base, at least one proteina and one salsa.
            </p>
          ) : null}
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-ivory/92 p-3 shadow-[0_-18px_55px_rgba(23,52,40,0.16)] backdrop-blur-2xl lg:hidden">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-sage">Total</p>
            <BowlSummary selection={selection} price={price} compact />
          </div>
          <button
            onClick={continueToOrder}
            disabled={!ready}
            className="rounded-full bg-forest px-5 py-4 text-sm font-black text-ivory disabled:opacity-40"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
