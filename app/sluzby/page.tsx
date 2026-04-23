"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact, { SectionLabel } from "@/components/Contact";
import { motion } from "framer-motion";
import { serviceCategories } from "@/lib/data";

export default function SluzbyPage() {
  const extendedServices = serviceCategories.filter(cat => cat.name !== "Pronájem");

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Header />
      <div className="pt-20">
        <section className="relative py-[80px] md:py-[120px] px-6 md:px-10 bg-[var(--surface)] border-b border-[var(--border)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d10] via-[#0b0d10] to-[var(--bg)]"></div>
          
          <div className="container mx-auto max-w-[1280px] relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Naše Služby</SectionLabel>
              <h1 className="font-barlow font-extrabold text-5xl md:text-6xl text-[var(--white)] mb-6 tracking-tight">
                KOMPLETNÍ SERVIS PRO VÁS
              </h1>
              <p className="text-[17px] text-[var(--text-muted)] max-w-2xl mx-auto font-light leading-relaxed">
                Nabízíme širokou škálu doplňkových služeb. Vše, co potřebujete pro bezstarostné podnikání, máte u nás nadosah.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-[100px] px-6 md:px-10 max-w-[1280px] mx-auto">
          <div className="space-y-16 lg:space-y-24">
            {extendedServices.map((category, index) => {
               const colMap: any = {
                 'Gastro & Eventy': '#e8a87c',
                 'Růst & Technologie': '#7bc8a4',
                 'Provoz & Bezpečí': '#a89bc8',
                 'Lifestyle & Volný čas': '#c8a87b'
               };
               const col = colMap[category.name] || 'var(--steel)';

               return (
                  <motion.div
                    key={index}
                    id={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col border border-[var(--border)] bg-[var(--surface)] rounded-xl overflow-hidden p-8 lg:p-12 gap-8 relative shrink-0 scroll-mt-24"
                  >
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.10] -mr-[200px] -mt-[200px] pointer-events-none" style={{ backgroundColor: col }} />

                     <div className="flex flex-col md:flex-row gap-8 relative z-10 w-full">
                       {/* Obrázek */}
                       {category.image && (
                         <div className="w-full md:w-[280px] shrink-0 h-[200px] rounded-xl overflow-hidden border border-[var(--border)] relative">
                            <img src={category.image} alt={category.name} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                         </div>
                       )}
                       
                       <div className="flex flex-col flex-grow justify-center">
                         <div className="flex items-center gap-5 mb-6">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl border" style={{ background: `${col}18`, borderColor: `${col}30` }}>
                               {category.name === 'Gastro & Eventy' ? '🍽' : category.name === 'Růst & Technologie' ? '⚡' : category.name === 'Provoz & Bezpečí' ? '🔧' : '🎾'}
                            </div>
                            <h2 className="font-barlow font-bold text-3xl md:text-4xl text-[var(--white)]">{category.name}</h2>
                         </div>
                       </div>
                     </div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {category.items.map((item, itemIdx) => (
                           <div key={itemIdx} className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-6 hover:border-white/20 transition-all hover:-translate-y-1">
                              <h3 className="font-barlow font-semibold text-xl text-[var(--white)] mb-3">{item.title}</h3>
                              <p className="text-[14.5px] text-[var(--text-muted)] font-light leading-relaxed">{item.description}</p>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               )
            })}
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </main>
  );
}
