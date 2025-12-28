"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Square, ArrowRight } from "lucide-react";
import { availableSpaces } from "@/lib/data";

export default function AvailableSpaces() {
  const featuredSpaces = availableSpaces.filter(space => space.available).slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg inline-block max-w-3xl border-2 border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volné prostory k pronájmu
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Prohlédněte si aktuálně dostupné prostory v našem areálu
            </p>
            <Link
              href="/volne-prostory"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
            >
              Zobrazit všechny prostory
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSpaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all overflow-hidden"
            >
              <Link href={`/volne-prostory#${space.id}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={space.images[0] || "/images/areal/areal-zastavka.jpg"}
                    alt={space.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80";
                    }}
                  />
                  {space.available && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Dostupné
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {space.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} className="text-blue-600" />
                      <span className="text-sm">{space.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Square size={18} className="text-blue-600" />
                      <span className="text-sm">{space.area} m²</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {space.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {space.price}
                    </span>
                    <span className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                      Více info
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

