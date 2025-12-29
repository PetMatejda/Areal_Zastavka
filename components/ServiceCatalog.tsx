"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { serviceCategories } from "@/lib/data";
import { getImageSrc } from "@/lib/images";
import { Building, Utensils, Rocket, ShieldCheck, Heart, LucideIcon } from "lucide-react";
import { ServiceCategory } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Building,
  Utensils,
  Rocket,
  ShieldCheck,
  Heart,
};

// Funkce pro získání obrázku pro kategorii
function getCategoryImage(categoryName: string): string {
  const categoryImages: Record<string, string> = {
    "Pronájem": "/images/areal/areal-zastavka.jpg", // Letecký pohled na areál Zastávka
    "Gastro & Eventy": "/images/gastro/interior.jpg", // Interiéry restaurace Měcholupský Park
    "Růst & Technologie": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80", // Technologie, tým
    "Provoz & Bezpečí": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80", // Bezpečnost, stavebnictví
    "Lifestyle & Volný čas": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80", // Sport, volný čas
  };
  
  return categoryImages[categoryName] || getImageSrc("restaurantFood");
}

export default function ServiceCatalog() {
  return (
    <section id="sluzby" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg inline-block max-w-3xl border-2 border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naše služby
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kompletní katalog služeb pro firmy a jejich zaměstnance
            </p>
          </div>
        </motion.div>

        <div className="space-y-20">
          {/* Hlavní kategorie - Pronájem */}
          {serviceCategories.slice(0, 1).map((category: ServiceCategory, categoryIndex: number) => {
            const IconComponent = iconMap[category.icon] || Building;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 bg-white rounded-lg p-4 shadow-lg inline-flex border-2 border-gray-200">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                </div>

                {/* Category Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 relative h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={getCategoryImage(category.name)}
                    alt={category.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>

                {/* Service Items Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.1), duration: 0.5 }}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all cursor-pointer"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Rozšiřující služby - Oddělovač */}
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-700 text-center">
                  Rozšiřující služby
                </h3>
                <p className="text-sm text-gray-600 text-center mt-1">
                  Pro naše klienty a jejich zaměstnance
                </p>
              </div>
            </div>
          </div>

          {/* Rozšiřující kategorie */}
          {serviceCategories.slice(1).map((category: ServiceCategory, categoryIndex: number) => {
            const IconComponent = iconMap[category.icon] || Utensils;
            const adjustedIndex = categoryIndex + 1; // Pro správné delay
            return (
              <motion.div
                key={adjustedIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: adjustedIndex * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 bg-white rounded-lg p-4 shadow-lg inline-flex border-2 border-gray-200">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                </div>

                {/* Category Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 relative h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={getCategoryImage(category.name)}
                    alt={category.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>

                {/* Service Items Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (adjustedIndex * 0.1) + (itemIndex * 0.1), duration: 0.5 }}
                      whileHover={{ scale: 1.03, y: -8 }}
                      className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all cursor-pointer"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

