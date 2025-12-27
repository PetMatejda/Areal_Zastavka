import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ServiceCatalog from "@/components/ServiceCatalog";
import AboutSection from "@/components/AboutSection";
import OperationalRules from "@/components/OperationalRules";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <ServiceCatalog />
      <AboutSection />
      <OperationalRules />
      <ContactForm />
      <Footer />
    </main>
  );
}

