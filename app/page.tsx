"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import ValueProposition from "@/components/ValueProposition";
import AvailableSpaces from "@/components/AvailableSpaces";
import ServiceCatalog from "@/components/ServiceCatalog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main className="min-h-screen relative modern-background">
      <div className="relative z-10">
        <Header />
        <ValueProposition />
        <AvailableSpaces />
        <ServiceCatalog />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}

