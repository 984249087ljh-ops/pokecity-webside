import Link from "next/link";

type TakeawayCTAProps = {
  title?: string;
  text?: string;
};

export default function TakeawayCTA({
  title = "Ready to build your bowl?",
  text = "Choose your ingredients online and send a takeaway request to POKE CITY Bolzano."
}: TakeawayCTAProps) {
  return (
    <section className="section-shell py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest p-8 text-ivory shadow-soft md:p-12">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ocean/25 blur-3xl" />
        <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-salmon/20 blur-3xl" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-mint">Takeaway</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-white/72">{text}</p>
          </div>
          <Link href="/build-your-own" className="inline-flex shrink-0 items-center justify-center rounded-full bg-ivory px-7 py-4 text-sm font-black text-forest shadow-soft transition hover:-translate-y-1">
            Build Your Bowl
          </Link>
        </div>
      </div>
    </section>
  );
}
