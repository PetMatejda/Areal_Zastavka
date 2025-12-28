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
      const availableSpacesSection = document.querySelector('section:has([href="/volne-prostory"])')?.closest('section') || 
                                      document.querySelector('section:has(h2:contains("Volné prostory"))')?.closest('section');
      const parallaxBg = document.getElementById("parallax-background");
      
      if (parallaxBg) {
        // Find AvailableSpaces section by checking for the heading text
        const sections = document.querySelectorAll('section');
        let availableSpacesSection: Element | null = null;
        
        sections.forEach(section => {
          const heading = section.querySelector('h2');
          if (heading && heading.textContent?.includes('Volné prostory k pronájmu')) {
            availableSpacesSection = section;
          }
        });
        
        if (availableSpacesSection) {
          const sectionTop = availableSpacesSection.getBoundingClientRect().top;
          
          if (sectionTop <= window.innerHeight * 0.5) {
            // AvailableSpaces section reached - hide parallax background
            parallaxBg.style.opacity = "0";
            parallaxBg.style.transition = "opacity 0.5s ease-out";
          } else {
            // AvailableSpaces section not reached - show parallax background
            parallaxBg.style.opacity = "0.25";
            parallaxBg.style.transition = "opacity 0.5s ease-in";
          }
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

