"use client";

import { motion } from "framer-motion";
import { serviceCategories } from "@/lib/data";
import { Utensils, Rocket, ShieldCheck, Heart } from "lucide-react";
import { ServiceCategory } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Utensils,
  Rocket,
  ShieldCheck,
  Heart,
};

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naše služby
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kompletní katalog služeb pro firmy a jejich zaměstnance
          </p>
        </motion.div>

        <div className="space-y-16">
          {serviceCategories.map((category: ServiceCategory, categoryIndex: number) => {
            const IconComponent = iconMap[category.icon] || Utensils;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                </div>

                {/* Service Items Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.1), duration: 0.5 }}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
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

