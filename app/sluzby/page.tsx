"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { serviceCategories } from "@/lib/data";
import { getImageSrc } from "@/lib/images";
import { Building, Utensils, Rocket, ShieldCheck, Heart, LucideIcon } from "lucide-react";
import { ServiceCategory } from "@/lib/data";
import Link from "next/link";

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
    "Pronájem": "/images/areal/areal-zastavka.jpg",
    "Gastro & Eventy": "/images/gastro/interior.jpg",
    "Růst & Technologie": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    "Provoz & Bezpečí": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80",
    "Lifestyle & Volný čas": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80",
  };
  
  return categoryImages[categoryName] || getImageSrc("restaurantFood");
}

export default function SluzbyPage() {
  // Zobrazujeme všechny kategorie kromě "Pronájem" (která je na homepage)
  const extendedServices = serviceCategories.slice(1);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Rozšiřující služby
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Kompletní servis pro naše klienty a jejich zaměstnance
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {extendedServices.map((category: ServiceCategory, categoryIndex: number) => {
                const IconComponent = iconMap[category.icon] || Utensils;
                return (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                    className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8 bg-white rounded-lg p-4 shadow-lg inline-flex border-2 border-gray-200">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {category.name}
                      </h2>
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
                          transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.1), duration: 0.5 }}
                          whileHover={{ scale: 1.03, y: -8 }}
                          className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
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

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Máte zájem o některou z našich služeb?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Kontaktujte nás a my vám připravíme nabídku na míru
              </p>
              <Link
                href="/#kontakt"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Kontaktujte nás
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

