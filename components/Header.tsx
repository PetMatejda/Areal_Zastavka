"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { getImageSrc } from "@/lib/images";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10 hidden md:block">
              <Image
                src={getImageSrc("arealLogo")}
                alt="Areál Zastávka Logo"
                fill
                className="object-contain"
                unoptimized
                onError={(e) => {
                  // Fallback to text if logo not available
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Areál Zastávka</h1>
          </motion.div>

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

