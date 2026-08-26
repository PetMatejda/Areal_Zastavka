"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-0.5 bg-[var(--accent)]" />
      <span className="font-barlow text-[13px] font-semibold tracking-[0.15em] text-[var(--accent)] uppercase">
        {children}
      </span>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="kontakt" className="py-[100px] px-6 md:px-10 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="font-barlow font-extrabold text-4xl md:text-5xl lg:text-[68px] text-[var(--white)] leading-[0.95] mb-6">
            POPTAT<br /><span className="text-[var(--steel)]">SLUŽBY</span>
          </h2>
          <p className="text-base text-[var(--text-muted)] font-light leading-relaxed mb-10 max-w-[500px]">
            Spojte se s námi a zjistěte více. Jsme připraveni nabídnout to nejlepší řešení pro Vaše podnikání.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: MapPin, label: 'Adresa', val: 'Za Zástávkou 377/3, 109 00 Praha-Dolní Měcholupy' },
              { icon: Phone, label: 'Telefon', val: '+420 603 233 264' },
              { icon: Mail, label: 'Email', val: 'info@arealzastavka.cz' },
            ].map((c, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[var(--surface2)] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                  <c.icon size={18} className="text-[var(--steel-light)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-dim)] font-medium mb-0.5">{c.label}</div>
                  {c.label === 'Telefon' || c.label === 'Email' ? (
                     <a href={c.label === 'Telefon' ? `tel:${c.val.replace(/ /g,'')}` : `mailto:${c.val}`} className="text-[15px] hover:text-[var(--white)] text-[var(--text)] font-normal transition-colors">{c.val}</a>
                  ) : (
                    <div className="text-[15px] text-[var(--text)] font-normal">{c.val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-8 md:p-12 flex flex-col items-center text-center justify-center min-h-[300px]"
        >
          <div className="w-16 h-16 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-6">
            <MessageCircle size={28} className="text-[var(--accent)]" />
          </div>
          <h3 className="font-barlow font-bold text-3xl text-[var(--white)] mb-4">Ozvěte se nám přímo!</h3>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-8">
            Osobní přístup je pro nás prioritou. Zavolejte nám prosím napřímo, nebo nám zanechte e-mail. Reagujeme obratem.
          </p>
          <div className="flex gap-3 flex-wrap justify-center w-full">
            <a href="tel:+420603233264" className="w-full sm:w-auto text-center bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-all text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-lg transform hover:-translate-y-0.5 shadow-lg inline-flex items-center justify-center gap-2">
              <Phone size={16} /> Zavolat nyní
            </a>
            <a href="mailto:info@arealzastavka.cz" className="w-full sm:w-auto text-center bg-transparent border border-[var(--border)] hover:border-[var(--accent)]/50 hover:text-[var(--white)] transition-all text-[var(--text)] font-sans text-sm font-medium px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2">
              <Mail size={16} /> Napsat e-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
