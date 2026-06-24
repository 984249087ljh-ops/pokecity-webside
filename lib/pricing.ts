import {
  allOptions,
  allergens,
  bowlSizes,
  extraPricing,
  type BowlOption,
  type BowlSize
} from "@/data/pokeCityMenu";

export type BowlSelection = {
  sizeSlug: BowlSize["slug"] | "";
  base: string[];
  proteins: string[];
  ingredients: string[];
  sauces: string[];
  toppings: string[];
};

export type PriceBreakdown = {
  basePrice: number;
  extras: {
    proteins: number;
    ingredients: number;
    sauces: number;
    toppings: number;
  };
  total: number;
};

export const emptySelection: BowlSelection = {
  sizeSlug: "",
  base: [],
  proteins: [],
  ingredients: [],
  sauces: [],
  toppings: []
};

export function formatEuro(value: number) {
  return `${value.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}€`;
}

export function getSelectedSize(selection: BowlSelection) {
  return bowlSizes.find((size) => size.slug === selection.sizeSlug);
}

export function calculateBowlPrice(selection: BowlSelection): PriceBreakdown {
  const size = getSelectedSize(selection);

  if (!size) {
    return {
      basePrice: 0,
      extras: { proteins: 0, ingredients: 0, sauces: 0, toppings: 0 },
      total: 0
    };
  }

  const proteinExtras =
    Math.max(0, selection.proteins.length - size.includes.proteins) * extraPricing.proteins;
  const ingredientExtras =
    Math.max(0, selection.ingredients.length - size.includes.ingredients) *
    extraPricing.ingredients;
  const sauceExtras =
    Math.max(0, selection.sauces.length - size.includes.sauces) * extraPricing.sauces;
  const toppingExtras =
    Math.max(0, selection.toppings.length - size.includes.toppings) *
    extraPricing.toppings;

  const extras = {
    proteins: proteinExtras,
    ingredients: ingredientExtras,
    sauces: sauceExtras,
    toppings: toppingExtras
  };

  return {
    basePrice: size.price,
    extras,
    total: size.price + proteinExtras + ingredientExtras + sauceExtras + toppingExtras
  };
}

export function getOptionsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => allOptions.find((option) => option.slug === slug))
    .filter(Boolean) as BowlOption[];
}

export function getSelectionOptions(selection: BowlSelection) {
  return {
    base: getOptionsBySlugs(selection.base),
    proteins: getOptionsBySlugs(selection.proteins),
    ingredients: getOptionsBySlugs(selection.ingredients),
    sauces: getOptionsBySlugs(selection.sauces),
    toppings: getOptionsBySlugs(selection.toppings)
  };
}

export function getSelectionAllergenIds(selection: BowlSelection) {
  const selected = Object.values(getSelectionOptions(selection)).flat();
  return Array.from(new Set(selected.flatMap((option) => option.allergens))).sort(
    (a, b) => a - b
  );
}

export function getSelectionAllergens(selection: BowlSelection) {
  const ids = getSelectionAllergenIds(selection);
  return ids
    .map((id) => allergens.find((allergen) => allergen.id === id))
    .filter(Boolean);
}

export function isSelectionReady(selection: BowlSelection) {
  return Boolean(
    selection.sizeSlug &&
      selection.base.length === 1 &&
      selection.proteins.length >= 1 &&
      selection.sauces.length >= 1
  );
}
