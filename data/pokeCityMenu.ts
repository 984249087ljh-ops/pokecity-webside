export type Allergen = {
  id: number;
  name: string;
};

export type BowlSize = {
  slug: "regular" | "large" | "extra-large";
  name: string;
  price: number;
  currency: "EUR";
  image: string;
  includes: {
    base: number;
    proteins: number;
    ingredients: number;
    sauces: number;
    toppings: number;
  };
};

export type BowlOptionCategory =
  | "base"
  | "proteins"
  | "ingredients"
  | "sauces"
  | "toppings";

export type BowlOption = {
  slug: string;
  name: string;
  category: BowlOptionCategory;
  image: string;
  allergens: number[];
  isPopular?: boolean;
  isVegetarian?: boolean;
};

export type ExtraPricing = {
  proteins: number;
  ingredients: number;
  sauces: number;
  toppings: number;
};

export const allergens: Allergen[] = [
  { id: 1, name: "Glutine" },
  { id: 2, name: "Crostacei" },
  { id: 3, name: "Uova" },
  { id: 4, name: "Pesce" },
  { id: 5, name: "Arachidi" },
  { id: 6, name: "Soia" },
  { id: 7, name: "Latte" },
  { id: 8, name: "Frutta a guscio" },
  { id: 9, name: "Sedano" },
  { id: 10, name: "Senape" },
  { id: 11, name: "Sesamo" },
  { id: 12, name: "Solfiti" },
  { id: 13, name: "Lupini" },
  { id: 14, name: "Molluschi" }
];

export const bowlSizes: BowlSize[] = [
  {
    slug: "regular",
    name: "Regular",
    price: 8.5,
    currency: "EUR",
    image: "/images/sizes/regular.jpg",
    includes: { base: 1, proteins: 1, ingredients: 3, sauces: 2, toppings: 1 }
  },
  {
    slug: "large",
    name: "Large",
    price: 11,
    currency: "EUR",
    image: "/images/sizes/large.jpg",
    includes: { base: 1, proteins: 2, ingredients: 4, sauces: 2, toppings: 2 }
  },
  {
    slug: "extra-large",
    name: "Extra Large",
    price: 13.5,
    currency: "EUR",
    image: "/images/sizes/extra-large.jpg",
    includes: { base: 1, proteins: 3, ingredients: 5, sauces: 2, toppings: 2 }
  }
];

export const extraPricing: ExtraPricing = {
  proteins: 2,
  ingredients: 0.5,
  sauces: 0.3,
  toppings: 0.3
};

export const baseOptions: BowlOption[] = [
  { slug: "riso-bianco", name: "Riso bianco", category: "base", image: "/images/base/riso-bianco.jpg", allergens: [] },
  { slug: "riso-venere", name: "Riso venere", category: "base", image: "/images/base/riso-venere.jpg", allergens: [] },
  { slug: "meta-e-meta", name: "Meta e meta", category: "base", image: "/images/base/meta-e-meta.jpg", allergens: [] },
  { slug: "insalata", name: "Insalata", category: "base", image: "/images/base/insalata.jpg", allergens: [], isVegetarian: true },
  { slug: "integrale-quinoa", name: "Integrale con quinoa", category: "base", image: "/images/base/integrale-quinoa.jpg", allergens: [] }
];

export const proteinOptions: BowlOption[] = [
  { slug: "salmone", name: "Salmone", category: "proteins", image: "/images/proteins/salmone.jpg", allergens: [4], isPopular: true },
  { slug: "tonno", name: "Tonno", category: "proteins", image: "/images/proteins/tonno.jpg", allergens: [4] },
  { slug: "gamberi", name: "Gamberi", category: "proteins", image: "/images/proteins/gamberi.jpg", allergens: [2] },
  { slug: "pollo-cotto", name: "Pollo cotto", category: "proteins", image: "/images/proteins/pollo-cotto.jpg", allergens: [] },
  { slug: "polpa-granchio", name: "Polpa di granchio", category: "proteins", image: "/images/proteins/polpa-granchio.jpg", allergens: [2] },
  { slug: "uovo-sodo", name: "Uovo sodo", category: "proteins", image: "/images/proteins/uovo-sodo.jpg", allergens: [3] },
  { slug: "tonno-cotto", name: "Tonno cotto", category: "proteins", image: "/images/proteins/tonno-cotto.jpg", allergens: [4] },
  { slug: "salmone-cotto", name: "Salmone cotto", category: "proteins", image: "/images/proteins/salmone-cotto.jpg", allergens: [4] },
  { slug: "polpo", name: "Polpo", category: "proteins", image: "/images/proteins/polpo.jpg", allergens: [14] },
  { slug: "tofu", name: "Tofu", category: "proteins", image: "/images/proteins/tofu.jpg", allergens: [6], isVegetarian: true }
];

export const ingredientOptions: BowlOption[] = [
  { slug: "ananas", name: "Ananas", category: "ingredients", image: "/images/ingredients/ananas.jpg", allergens: [] },
  { slug: "avocado", name: "Avocado", category: "ingredients", image: "/images/ingredients/avocado.jpg", allergens: [], isPopular: true, isVegetarian: true },
  { slug: "cappuccio-viola", name: "Cappuccio viola", category: "ingredients", image: "/images/ingredients/cappuccio-viola.jpg", allergens: [], isVegetarian: true },
  { slug: "carote", name: "Carote", category: "ingredients", image: "/images/ingredients/carote.jpg", allergens: [], isVegetarian: true },
  { slug: "ceci", name: "Ceci", category: "ingredients", image: "/images/ingredients/ceci.jpg", allergens: [], isVegetarian: true },
  { slug: "cetrioli", name: "Cetrioli", category: "ingredients", image: "/images/ingredients/cetrioli.jpg", allergens: [], isVegetarian: true },
  { slug: "cipolla", name: "Cipolla", category: "ingredients", image: "/images/ingredients/cipolla.jpg", allergens: [], isVegetarian: true },
  { slug: "edamame", name: "Edamame", category: "ingredients", image: "/images/ingredients/edamame.jpg", allergens: [6], isVegetarian: true },
  { slug: "jalapeno", name: "Jalapeno", category: "ingredients", image: "/images/ingredients/jalapeno.jpg", allergens: [], isVegetarian: true },
  { slug: "mais", name: "Mais", category: "ingredients", image: "/images/ingredients/mais.jpg", allergens: [], isVegetarian: true },
  { slug: "mango", name: "Mango", category: "ingredients", image: "/images/ingredients/mango.jpg", allergens: [], isPopular: true, isVegetarian: true },
  { slug: "mozzarella", name: "Mozzarella", category: "ingredients", image: "/images/ingredients/mozzarella.jpg", allergens: [7], isVegetarian: true },
  { slug: "olive", name: "Olive", category: "ingredients", image: "/images/ingredients/olive.jpg", allergens: [], isVegetarian: true },
  { slug: "philadelphia", name: "Philadelphia", category: "ingredients", image: "/images/ingredients/philadelphia.jpg", allergens: [7], isVegetarian: true },
  { slug: "pomodorini", name: "Pomodorini", category: "ingredients", image: "/images/ingredients/pomodorini.jpg", allergens: [], isVegetarian: true },
  { slug: "wakame", name: "Wakame", category: "ingredients", image: "/images/ingredients/wakame.jpg", allergens: [11], isVegetarian: true },
  { slug: "zenzero", name: "Zenzero", category: "ingredients", image: "/images/ingredients/zenzero.jpg", allergens: [], isVegetarian: true },
  { slug: "zucchine", name: "Zucchine", category: "ingredients", image: "/images/ingredients/zucchine.jpg", allergens: [], isVegetarian: true }
];

export const sauceOptions: BowlOption[] = [
  { slug: "piccante", name: "Piccante", category: "sauces", image: "/images/sauces/piccante.jpg", allergens: [] },
  { slug: "senape-miele", name: "Salsa senape al miele", category: "sauces", image: "/images/sauces/senape-miele.jpg", allergens: [10] },
  { slug: "yogurt-erbe", name: "Yogurt alle erbe", category: "sauces", image: "/images/sauces/yogurt-erbe.jpg", allergens: [7] },
  { slug: "soia", name: "Salsa soia", category: "sauces", image: "/images/sauces/soia.jpg", allergens: [1, 6] },
  { slug: "wasabi-maionese", name: "Wasabi maionese", category: "sauces", image: "/images/sauces/wasabi-maionese.jpg", allergens: [3, 1] },
  { slug: "poke", name: "Salsa Poke", category: "sauces", image: "/images/sauces/poke.jpg", allergens: [3, 1], isPopular: true },
  { slug: "mango", name: "Salsa mango", category: "sauces", image: "/images/sauces/mango.jpg", allergens: [] },
  { slug: "teriyaki", name: "Teriyaki", category: "sauces", image: "/images/sauces/teriyaki.jpg", allergens: [1, 6] },
  { slug: "sesamo", name: "Salsa sesamo", category: "sauces", image: "/images/sauces/sesamo.jpg", allergens: [11] },
  { slug: "olio-evo", name: "Olio EVO", category: "sauces", image: "/images/sauces/olio-evo.jpg", allergens: [] },
  { slug: "agrodolce", name: "Agrodolce", category: "sauces", image: "/images/sauces/agrodolce.jpg", allergens: [] },
  { slug: "ponzu", name: "Ponzu", category: "sauces", image: "/images/sauces/ponzu.jpg", allergens: [1, 6] },
  { slug: "maionese", name: "Maionese", category: "sauces", image: "/images/sauces/maionese.jpg", allergens: [3, 1] },
  { slug: "spicy-maionese", name: "Spicy maionese", category: "sauces", image: "/images/sauces/spicy-maionese.jpg", allergens: [3, 1] }
];

export const toppingOptions: BowlOption[] = [
  { slug: "sesamo", name: "Sesamo", category: "toppings", image: "/images/toppings/sesamo.jpg", allergens: [11] },
  { slug: "cipolla-fritta", name: "Cipolla fritta", category: "toppings", image: "/images/toppings/cipolla-fritta.jpg", allergens: [] },
  { slug: "mandorle", name: "Mandorle", category: "toppings", image: "/images/toppings/mandorle.jpg", allergens: [8] },
  { slug: "pistacchio", name: "Granella di pistacchio", category: "toppings", image: "/images/toppings/pistacchio.jpg", allergens: [8] },
  { slug: "cocco", name: "Cocco", category: "toppings", image: "/images/toppings/cocco.jpg", allergens: [] },
  { slug: "arachidi", name: "Arachidi", category: "toppings", image: "/images/toppings/arachidi.jpg", allergens: [5] },
  { slug: "alghe-nori", name: "Alghe nori", category: "toppings", image: "/images/toppings/alghe-nori.jpg", allergens: [] },
  { slug: "vege-chips", name: "Vege chips", category: "toppings", image: "/images/toppings/vege-chips.jpg", allergens: [] },
  { slug: "anacardi", name: "Anacardi", category: "toppings", image: "/images/toppings/anacardi.jpg", allergens: [8] },
  { slug: "uvetta", name: "Uvetta", category: "toppings", image: "/images/toppings/uvetta.jpg", allergens: [] },
  { slug: "porkfloss", name: "Porkfloss", category: "toppings", image: "/images/toppings/porkfloss.jpg", allergens: [3, 1] }
];

export const optionGroups = [
  { key: "base", title: "Base", options: baseOptions, extraLabel: "Included", required: true },
  { key: "proteins", title: "Proteine", options: proteinOptions, extraLabel: "Extra +2,00€", required: true },
  { key: "ingredients", title: "Ingredienti", options: ingredientOptions, extraLabel: "Extra +0,50€", required: false },
  { key: "sauces", title: "Salse", options: sauceOptions, extraLabel: "Extra +0,30€", required: true },
  { key: "toppings", title: "Topping", options: toppingOptions, extraLabel: "Extra +0,30€", required: false }
] as const;

export const allOptions = [
  ...baseOptions,
  ...proteinOptions,
  ...ingredientOptions,
  ...sauceOptions,
  ...toppingOptions
];

export const allergenDisclaimerIt =
  "Gli allergeni indicati si riferiscono alla ricetta standard. In caso di allergie o intolleranze informare sempre il personale. Possibile contaminazione crociata.";

export const allergenDisclaimerEn =
  "Allergen information refers to the standard recipe. In case of allergies or intolerances, always inform our staff. Cross-contamination may occur.";
