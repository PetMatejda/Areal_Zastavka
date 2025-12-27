"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroOffer } from "@/lib/data";
import { getImageSrc } from "@/lib/images";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20 overflow-hidden">
      {/* Background Image from Měcholupský Park */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImageSrc("restaurantMain")}
          alt="Měcholupský Park - Restaurace"
          fill
          className="object-cover opacity-30"
          priority
          onError={(e) => {
            // Fallback pokud obrázek není dostupný
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {heroOffer.tag}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {heroOffer.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            {heroOffer.description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            {heroOffer.cta}
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

