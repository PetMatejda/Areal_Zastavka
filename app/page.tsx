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
      const parallaxOverlay = document.getElementById("parallax-background");
      
      if (parallaxOverlay) {
        // Find AvailableSpaces section by checking for the heading text
        const sections = document.querySelectorAll('section');
        let availableSpacesSection: HTMLElement | null = null;
        
        for (const section of Array.from(sections)) {
          const heading = section.querySelector('h2');
          if (heading && heading.textContent?.includes('Volné prostory k pronájmu')) {
            availableSpacesSection = section as HTMLElement;
            break;
          }
        }
        
        if (availableSpacesSection) {
          const sectionTop = availableSpacesSection.getBoundingClientRect().top;
          
          // Hide parallax when AvailableSpaces section becomes visible
          if (sectionTop <= window.innerHeight) {
            // AvailableSpaces section is visible - hide parallax background
            parallaxOverlay.style.backgroundColor = "rgba(255, 255, 255, 1)";
            parallaxOverlay.style.transition = "background-color 0.5s ease-out";
          } else {
            // AvailableSpaces section not yet visible - show parallax background
            parallaxOverlay.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            parallaxOverlay.style.transition = "background-color 0.5s ease-in";
          }
        } else {
          // Fallback: if section not found, hide after ValueProposition
          const valuePropSection = document.querySelector('section:has(h2:contains("Areál Zastávka"))') as HTMLElement | null;
          if (valuePropSection) {
            const valuePropBottom = valuePropSection.getBoundingClientRect().bottom;
            if (valuePropBottom <= window.innerHeight) {
              parallaxOverlay.style.backgroundColor = "rgba(255, 255, 255, 1)";
              parallaxOverlay.style.transition = "background-color 0.5s ease-out";
            } else {
              parallaxOverlay.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              parallaxOverlay.style.transition = "background-color 0.5s ease-in";
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/images/areal/areal-zastavka.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay pro kontrolu opacity */}
      <div 
        id="parallax-background"
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          zIndex: 0,
          willChange: 'background-color',
        }}
      />
      
      <div className="relative z-10" style={{ backgroundColor: 'transparent' }}>
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

