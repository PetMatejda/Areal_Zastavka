"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Square, Check, Mail, Phone } from "lucide-react";
import { availableSpaces } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export default function VolneProstoryPage() {
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);
  const spaces = availableSpaces.filter(space => space.available);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
          {/* Dekorativní elementy */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blob -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blob -ml-48 -mb-48" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Volné prostory k pronájmu
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium">
                Najděte ideální prostor pro vaši firmu v areálu Zastávka
              </p>
            </motion.div>
          </div>
        </section>

        {/* Spaces List */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {spaces.map((space, index) => {
                const isUniversal = space.isUniversal;
                const areaDisplay = typeof space.area === 'string' ? space.area : space.area.toString();
                
                if (isUniversal) {
                  return (
                    <motion.div
                      key={space.id}
                      id={space.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="glass rounded-2xl shadow-xl overflow-hidden border border-white/30 group"
                    >
                      <div className="md:flex items-center">
                        {/* Image */}
                        <div className="md:w-1/2">
                          <div className="relative h-64 md:h-96 overflow-hidden">
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="md:w-1/2 p-8 md:p-12 relative">
                          {/* Gradient overlay při hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-orange-50/0 group-hover:from-blue-50/20 group-hover:to-orange-50/20 transition-all duration-500"></div>
                          <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 text-center md:text-left">
                              {space.title}
                            </h2>
                            
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg text-center md:text-left">
                              {space.description}
                            </p>

                            <div className="flex justify-center md:justify-start">
                              <a
                                href="#kontakt"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const contactForm = document.getElementById("kontakt");
                                  if (contactForm) {
                                    contactForm.scrollIntoView({ behavior: "smooth" });
                                  }
                                }}
                                className="gradient-blue text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all text-lg shadow-lg hover:scale-105"
                              >
                                Kontaktujte nás
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={space.id}
                    id={space.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="glass rounded-2xl shadow-xl overflow-hidden border border-white/30 group"
                  >
                    <div className="md:flex">
                      {/* Images Gallery */}
                      <div className="md:w-1/2">
                        <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden">
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                          {space.available && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                              Dostupné
                            </div>
                          )}
                        </div>
                        {space.images.length > 1 && (
                          <div className="grid grid-cols-3 gap-2 p-2">
                            {space.images.slice(1, 4).map((img, imgIndex) => (
                              <div key={imgIndex} className="relative h-24">
                                <Image
                                  src={img}
                                  alt={`${space.title} - obrázek ${imgIndex + 2}`}
                                  fill
                                  className="object-cover rounded"
                                  unoptimized
                                  onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80";
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="md:w-1/2 p-8 relative">
                        {/* Gradient overlay při hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-orange-50/0 group-hover:from-blue-50/20 group-hover:to-orange-50/20 transition-all duration-500"></div>
                        <div className="relative z-10">
                          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                            {space.title}
                          </h2>
                        
                        <div className="space-y-4 mb-6">
                          {space.location && (
                            <div className="flex items-center gap-3 text-gray-700">
                              <MapPin size={20} className="text-blue-600" />
                              <span className="font-medium">{space.location}</span>
                            </div>
                          )}
                          {space.area && (
                            <div className="flex items-center gap-3 text-gray-700">
                              <Square size={20} className="text-blue-600" />
                              <span className="font-medium">Plocha: {areaDisplay} m²</span>
                            </div>
                          )}
                          {space.price && (
                            <div className="flex items-center gap-3 text-gray-700">
                              <span className="text-lg font-bold text-blue-600">
                                Cena: {space.price}
                              </span>
                            </div>
                          )}
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {space.description}
                        </p>

                        {space.features && space.features.length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                              Vybavení a výhody:
                            </h3>
                            <div className="grid md:grid-cols-2 gap-2">
                              {space.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                  <Check size={18} className="text-green-500 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                          <button
                            onClick={() => setSelectedSpace(selectedSpace === space.id ? null : space.id)}
                            className="w-full gradient-blue text-white px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all shadow-lg hover:scale-105"
                          >
                            Mám zájem o tento prostor
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        {selectedSpace && (
          <section id="kontakt" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                    Kontaktujte nás ohledně pronájmu
                  </h2>
                  <p className="text-gray-700 font-medium">
                    Vyplňte formulář a my se vám ozveme s dalšími informacemi
                  </p>
                </div>
                <ContactForm 
                  defaultInterest={`Pronájem prostoru: ${spaces.find(s => s.id === selectedSpace)?.title || ''}`}
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* General Contact Form for Universal Request */}
        <section id="kontakt" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                  Máte jinou poptávku?
                </h2>
                <p className="text-gray-700 font-medium">
                  Kontaktujte nás a zkusíme najít řešení pro vás
                </p>
              </div>
              <ContactForm 
                defaultInterest="Pronájem - Volné prostory"
              />
            </motion.div>
          </div>
        </section>

        {/* General Contact Info */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Potřebujete více informací?
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:info@arealzastavka.cz"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <Mail size={20} />
                  info@arealzastavka.cz
                </a>
                <a
                  href="tel:+420603233264"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <Phone size={20} />
                  +420 603 233 264
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

