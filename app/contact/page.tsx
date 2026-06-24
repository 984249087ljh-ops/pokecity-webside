import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";

const actions = [
  { label: "Call now", href: "tel:+393899277133" },
  { label: "WhatsApp", href: "https://wa.me/393899277133" },
  { label: "Instagram", href: "https://www.instagram.com/pokecity.it" },
  {
    label: "Open Google Maps",
    href: "https://www.google.com/maps/search/?api=1&query=Piazza%20Domenicani%2033%2C%20Bolzano%2C%20Italy"
  }
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell py-32">
        <SectionHeading
          eyebrow="Contact"
          title="POKE CITY Bolzano"
          text="Find us in Piazza Domenicani 33. Send a takeaway request online, write us on WhatsApp, or visit us in the city centre."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-forest/10 bg-white/70 p-6 shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sage">Address</p>
            <h2 className="mt-3 text-3xl font-black text-forest">Piazza Domenicani 33</h2>
            <p className="mt-2 font-bold text-forest/62">Bolzano, Italy</p>
            <p className="mt-5 font-bold text-forest/62">Tel / WhatsApp: +39 3899277133</p>
            <p className="font-bold text-forest/62">Instagram: @pokecity.it</p>
            <div className="mt-7 grid gap-3">
              {actions.map((action) => (
                <a key={action.label} href={action.href} className="secondary-button">
                  {action.label}
                </a>
              ))}
            </div>
          </div>
          <div className="min-h-[28rem] overflow-hidden rounded-[2rem] border border-forest/10 bg-mint shadow-soft">
            <iframe
              title="Poke City Bolzano map"
              src="https://www.google.com/maps?q=Piazza%20Domenicani%2033%2C%20Bolzano%2C%20Italy&output=embed"
              className="h-full min-h-[28rem] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
