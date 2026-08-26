"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact, { SectionLabel } from "@/components/Contact";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { availableSpaces } from "@/lib/data";

export default function VolneProstoryPage() {
  const spaces = availableSpaces.filter(space => space.available || space.isUniversal);

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Header />
      <div className="pt-20">
        {/* Header Section */}
        <section className="relative py-[80px] md:py-[120px] px-6 md:px-10 bg-[var(--surface2)] border-b border-[var(--border)] overflow-hidden">
          <div className="container mx-auto max-w-[1280px] relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Nabídka pronájmu</SectionLabel>
              <h1 className="font-barlow font-extrabold text-5xl md:text-6xl text-[var(--white)] mb-6 tracking-tight">
                VOLNÉ PROSTORY V AREÁLU
              </h1>
              <p className="text-[17px] text-[var(--text-muted)] max-w-2xl mx-auto font-light leading-relaxed">
                Najděte ideální prostor pro vaši firmu. Aktuálně máme volné kancelářské prostory a rádi probereme i vaši poptávku na sklad či výrobu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Spaces List */}
        <section className="py-[100px] px-6 md:px-10 bg-[var(--bg)]">
          <div className="max-w-[1280px] mx-auto">
            <div className="space-y-12 md:space-y-20">
              {spaces.map((space, index) => {
                const areaDisplay = typeof space.area === 'string' ? space.area : space.area?.toString() || '';
                
                return (
                  <motion.div
                    key={space.id}
                    id={space.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex flex-col md:flex-row bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors duration-500 rounded-xl overflow-hidden group"
                  >
                    {/* Images */}
                    <div className="md:w-5/12 lg:w-1/2 flex flex-col">
                      <div className="relative h-[300px] md:h-full min-h-[300px] overflow-hidden bg-[var(--surface2)]">
                        <img
                          src={space.images[0] || "https://www.arealzastavka.cz/images/areal/areal-zastavka.jpg"}
                          alt={space.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,23,28,0.8)] via-transparent to-transparent"></div>
                        {space.available && !space.isUniversal && (
                          <div className="absolute top-5 left-5 bg-[#4caf50]/20 text-[#4caf50] border border-[#4caf50]/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
                            Dostupné
                          </div>
                        )}
                        {space.area && (
                          <div className="absolute bottom-5 right-5 font-barlow font-bold text-[24px] text-white shadow-lg">
                            {areaDisplay} {typeof space.area === 'number' ? 'm²' : ''}
                          </div>
                        )}
                      </div>
                      {/* Sub images if any */}
                      {space.images.length > 1 && (
                        <div className="grid grid-cols-3 gap-0.5 bg-[var(--border)] flex-shrink-0">
                          {space.images.slice(1, 4).map((img, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={img}
                              alt={`${space.title} - ${imgIndex + 2}`}
                              className="w-full h-[80px] md:h-[120px] object-cover"
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="md:w-7/12 lg:w-1/2 p-8 md:p-12 flex flex-col gap-6">
                      <h2 className="font-barlow font-bold text-3xl md:text-4xl text-[var(--white)] leading-tight">
                        {space.title}
                      </h2>
                      
                      <div className="flex flex-wrap gap-4 gap-y-2 mb-2">
                        {space.location && (
                          <div className="flex items-center gap-2.5 text-[var(--text-muted)] text-[15px]">
                            <MapPin size={18} className="text-[var(--accent)]" />
                            {space.location}
                          </div>
                        )}
                        {space.price && (
                          <div className="flex items-center gap-2.5 text-[15px]">
                            <span className="text-[var(--steel-light)] font-bold text-lg">
                              Cena: {space.price}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-[16px] text-[var(--text-muted)] leading-[1.7] font-light flex-grow">
                        {space.description}
                      </p>

                      {space.features && space.features.length > 0 && (
                        <div className="mt-4">
                          <h3 className="font-barlow font-semibold tracking-wide text-[16px] text-[var(--white)] mb-4 uppercase">Vybavení a výhody</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14.5px] text-[var(--text)]">
                            {space.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2.5">
                                <span className="text-[var(--accent)] font-bold">✓</span>
                                <span className="opacity-90">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mt-8 pt-6 border-t border-[var(--border)] self-start w-full sm:w-auto">
                        <a
                          href="#kontakt"
                          className="inline-block w-full sm:w-auto text-center bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-all text-white font-sans text-[15px] font-semibold px-7 py-3.5 rounded-lg transform hover:-translate-y-0.5"
                        >
                          Získat více informací
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact info will be generic Contact section */}
        <Contact />

      </div>
      <Footer />
    </main>
  );
}
