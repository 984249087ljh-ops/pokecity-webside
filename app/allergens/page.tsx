import AllergenTable from "@/components/AllergenTable";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";

export default function AllergensPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell py-32">
        <SectionHeading
          eyebrow="Allergens"
          title="Allergen information"
          text="Every menu option can show allergen numbers. Please always inform our staff about allergies or intolerances before ordering."
        />
        <div className="mt-10">
          <AllergenTable />
        </div>
      </section>
      <Footer />
    </main>
  );
}
