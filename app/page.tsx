"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import ValueProposition from "@/components/ValueProposition";
import AvailableSpaces from "@/components/AvailableSpaces";
import ServiceCatalog from "@/components/ServiceCatalog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("sluzby");
      const parallaxBg = document.getElementById("parallax-background");
      
      if (servicesSection && parallaxBg) {
        const servicesTop = servicesSection.getBoundingClientRect().top;
        
        if (servicesTop <= 0) {
          // Services section reached - hide parallax background
          parallaxBg.style.opacity = "0";
          parallaxBg.style.transition = "opacity 0.5s ease-out";
        } else {
          // Services section not reached - show parallax background
          parallaxBg.style.opacity = "0.25";
          parallaxBg.style.transition = "opacity 0.5s ease-in";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <ValueProposition />
      <AvailableSpaces />
      <ServiceCatalog />
      <ContactForm />
      <Footer />
    </main>
  );
}

