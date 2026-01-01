"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Square, ArrowRight } from "lucide-react";
import { availableSpaces } from "@/lib/data";

export default function AvailableSpaces() {
  const featuredSpaces = availableSpaces.filter(space => space.available).slice(0, 3);

  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="glass rounded-2xl p-6 md:p-8 shadow-xl inline-block max-w-3xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/15 via-white/10 to-orange-50/15"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                Volné prostory k pronájmu
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 font-medium">
                Prohlédněte si aktuálně dostupné prostory v našem areálu
              </p>
              <Link
                href="/volne-prostory"
                className="inline-flex items-center gap-2 gradient-blue text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-glow transition-all hover:scale-105"
              >
                Zobrazit všechny prostory
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSpaces.map((space, index) => {
            const isUniversal = space.isUniversal;
            const areaDisplay = typeof space.area === 'string' ? space.area : space.area.toString();
            
            const cardContent = (
              <>
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={space.images[0] || "/images/areal/areal-zastavka.jpg"}
                    alt={space.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80";
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all"></div>
                  {space.available && !isUniversal && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Dostupné
                    </div>
                  )}
                </div>
                <div className="p-6 relative">
                  {/* Gradient overlay při hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-orange-50/0 group-hover:from-blue-50/20 group-hover:to-orange-50/20 transition-all duration-500"></div>
                  <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {space.title}
                  </h3>
                  {!isUniversal && (
                    <>
                      <div className="space-y-2 mb-4">
                        {space.location && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={18} className="text-blue-600" />
                            <span className="text-sm">{space.location}</span>
                          </div>
                        )}
                        {space.area && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <Square size={18} className="text-blue-600" />
                            <span className="text-sm">{areaDisplay} m²</span>
                          </div>
                        )}
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
                    </>
                  )}
                  {isUniversal && (
                    <>
                      <p className="text-gray-600 text-lg mb-4 text-center">
                        {space.description}
                      </p>
                      <div className="flex items-center justify-center">
                        <span className="text-blue-600 hover:text-blue-700 font-semibold text-base flex items-center gap-1">
                          Kontaktujte nás
                          <ArrowRight size={18} />
                        </span>
                      </div>
                    </>
                  )}
                  </div>
                </div>
              </>
            );

            return (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -8, rotate: 0.5 }}
                className="glass rounded-2xl shadow-xl border border-white/30 hover:shadow-glow-lg hover:border-blue-400/50 transition-all overflow-hidden group"
              >
                {isUniversal ? (
                  <Link href="/volne-prostory#kontakt">
                    {cardContent}
                  </Link>
                ) : (
                  <Link href={`/volne-prostory#${space.id}`}>
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

