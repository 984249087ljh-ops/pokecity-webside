import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeBowlFlow from "@/components/HomeBowlFlow";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HomeBowlFlow />
      <Footer />
    </main>
  );
}
