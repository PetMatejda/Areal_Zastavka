"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ValueProposition from "@/components/ValueProposition";
import AvailableSpaces from "@/components/AvailableSpaces";
import ServiceCatalog from "@/components/ServiceCatalog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxBg = document.getElementById("parallax-background");
      
      if (parallaxBg) {
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
          
          // Hide parallax when AvailableSpaces section becomes visible (top of section reaches top of viewport)
          const img = parallaxBg.querySelector('img');
          if (img) {
            if (sectionTop <= window.innerHeight) {
              // AvailableSpaces section is visible - hide parallax background
              img.style.opacity = "0";
              img.style.transition = "opacity 0.5s ease-out";
            } else {
              // AvailableSpaces section not yet visible - show parallax background
              img.style.opacity = "0.8";
              img.style.transition = "opacity 0.5s ease-in";
            }
          }
        } else {
          // Fallback: if section not found, hide after ValueProposition
          const valuePropSection = document.querySelector('section:has(h2:contains("Areál Zastávka"))') as HTMLElement | null;
          if (valuePropSection) {
            const valuePropBottom = valuePropSection.getBoundingClientRect().bottom;
            const img = parallaxBg.querySelector('img');
            if (img) {
              if (valuePropBottom <= window.innerHeight) {
                img.style.opacity = "0";
                img.style.transition = "opacity 0.5s ease-out";
              } else {
                img.style.opacity = "0.8";
                img.style.transition = "opacity 0.5s ease-in";
              }
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
    <main className="min-h-screen relative">
      {/* Parallax Background - using Next.js Image for better loading */}
      <div 
        id="parallax-background"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
        }}
      >
        <Image
          src="/images/areal/areal-zastavka.jpg"
          alt="Areál Zastávka"
          fill
          className="object-cover"
          style={{
            opacity: 0.8,
            willChange: 'opacity',
            position: 'fixed',
          }}
          priority
          unoptimized
          quality={90}
        />
      </div>
      
      <div className="relative z-10 bg-transparent">
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

