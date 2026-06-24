"use client";

import { FormEvent, useMemo, useState } from "react";
import { allergenDisclaimerEn, allergenDisclaimerIt } from "@/data/pokeCityMenu";
import {
  calculateBowlPrice,
  emptySelection,
  getSelectionAllergens,
  getSelectionOptions,
  type BowlSelection
} from "@/lib/pricing";
import BowlSummary from "./BowlSummary";

export default function OrderForm() {
  const [selection, setSelection] = useState<BowlSelection>(() => {
    if (typeof window === "undefined") return emptySelection;
    const saved = window.localStorage.getItem("pokeCityBowlSelection");
    if (!saved) return emptySelection;
    try {
      return JSON.parse(saved);
    } catch {
      return emptySelection;
    }
  });
  const [submitted, setSubmitted] = useState(false);
  const price = useMemo(() => calculateBowlPrice(selection), [selection]);
  const selected = getSelectionOptions(selection);
  const allergens = getSelectionAllergens(selection);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function clearSelection() {
    localStorage.removeItem("pokeCityBowlSelection");
    setSelection(emptySelection);
  }

  return (
    <div className="section-shell grid gap-8 py-32 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div>
        <p className="eyebrow">Takeaway request</p>
        <h1 className="mt-5 text-5xl font-black tracking-tight text-forest md:text-7xl">
          Order Takeaway
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-forest/66">
          Send your bowl request and our team will confirm your order as soon as possible.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-[1.5rem] border border-sage/30 bg-mint/70 p-6 shadow-soft">
            <h2 className="text-2xl font-black text-forest">Grazie!</h2>
            <p className="mt-2 font-bold leading-7 text-forest/70">
              Abbiamo ricevuto la tua richiesta. Ti confermeremo l&apos;ordine il prima possibile.
            </p>
            <p className="mt-2 font-bold leading-7 text-forest/70">
              Thank you! We received your request and will confirm your order as soon as possible.
            </p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5 rounded-[2rem] border border-forest/10 bg-white/70 p-5 shadow-soft backdrop-blur-xl md:grid-cols-2 md:p-8">
          <Field label="Nome / Name" name="name" required />
          <Field label="Telefono / Phone" name="phone" required />
          <Field label="Email optional" name="email" type="email" />
          <label className="grid gap-2 text-sm font-black text-forest">
            Pickup Date
            <input required type="date" className="form-input" />
          </label>
          <label className="grid gap-2 text-sm font-black text-forest">
            Pickup Time
            <input required type="time" className="form-input" />
          </label>
          <label className="grid gap-2 text-sm font-black text-forest">
            Order Type
            <select className="form-input" defaultValue="Takeaway">
              <option>Takeaway</option>
              <option>Pickup</option>
              <option>Dine-in</option>
              <option>Group Order</option>
            </select>
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-ivory/70 p-4 text-sm font-black text-forest md:col-span-2">
            <input type="checkbox" defaultChecked className="h-5 w-5 accent-forest" />
            D&apos;asporto / Takeaway
          </label>
          <label className="grid gap-2 text-sm font-black text-forest md:col-span-2">
            Notes / Richieste speciali
            <textarea className="form-input min-h-28 resize-y" />
          </label>
          <label className="grid gap-2 text-sm font-black text-forest md:col-span-2">
            Allergy Notes / Allergie o intolleranze
            <textarea className="form-input min-h-28 resize-y" />
          </label>

          <div className="rounded-2xl border border-salmon/25 bg-salmon/12 p-4 text-sm leading-6 text-forest/70 md:col-span-2">
            <p className="font-black text-forest">Allergen reminder</p>
            <p className="mt-2">{allergenDisclaimerIt}</p>
            <p className="mt-2">{allergenDisclaimerEn}</p>
          </div>

          <button className="primary-button md:col-span-2" type="submit">
            Send takeaway request
          </button>
        </form>
      </div>

      <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
        <BowlSummary selection={selection} price={price} />
        <div className="rounded-[1.5rem] border border-forest/10 bg-white/70 p-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-sage">Bowl details</p>
          <OrderList label="Base" items={selected.base} />
          <OrderList label="Proteine" items={selected.proteins} />
          <OrderList label="Ingredienti" items={selected.ingredients} />
          <OrderList label="Salse" items={selected.sauces} />
          <OrderList label="Topping" items={selected.toppings} />
          <p className="mt-5 text-sm font-bold text-forest/62">
            Allergeni: {allergens.length ? allergens.map((item) => `${item?.id}`).join(", ") : "none"}
          </p>
          <button onClick={clearSelection} className="secondary-button mt-5 w-full" type="button">
            Clear current bowl
          </button>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-forest">
      {label}
      <input name={name} type={type} required={required} className="form-input" />
    </label>
  );
}

function OrderList({ label, items }: { label: string; items: { name: string }[] }) {
  return (
    <div className="mt-4">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-forest/42">{label}</p>
      <p className="mt-1 text-sm font-bold text-forest">
        {items.length ? items.map((item) => item.name).join(", ") : "Non selezionato"}
      </p>
    </div>
  );
}
