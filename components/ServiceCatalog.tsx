"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    "Lifestyle & Volný čas": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80", // Tenisový kurt
  };
  
  return categoryImages[categoryName] || getImageSrc("restaurantFood");
}

export default function ServiceCatalog() {
  return (
    <section id="sluzby" className="py-20" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass rounded-2xl p-6 md:p-8 shadow-xl inline-block max-w-3xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                Naše služby
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                Kompletní katalog služeb pro firmy a jejich zaměstnance
              </p>
            </div>
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
                <div className="flex items-center gap-4 mb-8 glass rounded-xl p-4 shadow-lg inline-flex border border-white/30">
                  <div className="flex items-center justify-center w-12 h-12 gradient-blue rounded-xl shadow-lg">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {category.name}
                  </h3>
                </div>

                {/* Category Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 relative h-64 rounded-2xl overflow-hidden shadow-xl group"
                >
                  <Image
                    src={getCategoryImage(category.name)}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="glass p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-glow hover:border-blue-400/50 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      {/* Dekorativní gradient při hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-orange-50/0 group-hover:from-blue-50/40 group-hover:to-orange-50/40 transition-all duration-500"></div>
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
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

          {/* Link to extended services page */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/sluzby"
              className="inline-block gradient-blue text-white px-8 py-4 rounded-xl font-semibold transition-all text-lg shadow-lg hover:shadow-glow-lg hover:scale-105"
            >
              Zobrazit všechny rozšiřující služby →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

