import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import AvailableSpaces from "@/components/AvailableSpaces";
import ServiceCatalog from "@/components/ServiceCatalog";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <AvailableSpaces />
      <ServiceCatalog />
      <AboutSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

