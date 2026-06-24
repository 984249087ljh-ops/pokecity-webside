import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POKE CITY Bolzano | Compila la tua Bowl",
  description:
    "POKE CITY Bolzano ti permette di comporre online la tua poke bowl con base, proteine, ingredienti, salse e topping. Takeaway in Piazza Domenicani 33.",
  keywords: [
    "poke bolzano",
    "poke city bolzano",
    "build your bowl bolzano",
    "poke takeaway bolzano",
    "healthy food bolzano",
    "poke bowl bolzano",
    "piazza domenicani bolzano",
    "compila la tua bowl"
  ],
  openGraph: {
    title: "POKE CITY Bolzano | Compila la tua Bowl",
    description:
      "Componi online la tua poke bowl e invia una richiesta takeaway a POKE CITY Bolzano.",
    url: "https://pokecity.it",
    siteName: "Poke City Bolzano",
    locale: "it_IT",
    type: "website"
  },
  alternates: {
    canonical: "https://pokecity.it"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
