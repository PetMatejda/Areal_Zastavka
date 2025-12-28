"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { getImageSrc } from "@/lib/images";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/images/logo.png");
  const pathname = usePathname();
  
  // Zkusíme různé varianty loga
  const logoVariants = [
    "/images/logo.png",
    "/images/logo.svg",
    "/images/areal/logo.png",
    "/images/Logo.png",
    "/images/LOGO.png",
  ];

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      // Pokud nejsme na hlavní stránce, přesměrujeme tam a pak scrollujeme
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              {!logoError ? (
                <div className="relative h-12 w-auto min-w-[200px]">
                  <Image
                    src={logoSrc}
                    alt="Areál Zastávka Logo"
                    width={200}
                    height={48}
                    className="object-contain h-12 w-auto"
                    unoptimized
                    priority
                    onError={() => {
                      // Zkusíme další variantu
                      const currentIndex = logoVariants.indexOf(logoSrc);
                      if (currentIndex < logoVariants.length - 1) {
                        setLogoSrc(logoVariants[currentIndex + 1]);
                      } else {
                        setLogoError(true);
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AZ</span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Areál Zastávka
                  </h1>
                </div>
              )}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sluzby")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("o-nas")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              O nás
            </button>
            <Link
              href="/provozni-rad"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Provozní řád
            </Link>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Kontakt
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("kontakt")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Poptat služby
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <button
              onClick={() => scrollToSection("sluzby")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("o-nas")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              O nás
            </button>
            <Link
              href="/provozni-rad"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Provozní řád
            </Link>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Kontakt
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Poptat služby
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

