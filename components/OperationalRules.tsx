"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { SectionLabel } from "./Contact";

export default function OperationalRules() {
  const pdfUrl = "/documents/Provozni-rad-arealu-032025.pdf";

  return (
    <section className="py-[100px] px-6 md:px-10 bg-[var(--bg)] relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-[900px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[var(--surface)] rounded-2xl p-8 md:p-14 border border-[var(--border)] shadow-xl shadow-black/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-[72px] h-[72px] bg-[var(--surface2)] border border-[var(--border)] rounded-xl flex-shrink-0">
                  <FileText size={36} className="text-[var(--accent)]" />
                </div>
                <div>
                   <SectionLabel>Dokument</SectionLabel>
                  <h2 className="text-3xl md:text-5xl font-barlow font-bold text-[var(--white)] tracking-tight">
                    Provozní řád areálu
                  </h2>
                  <p className="text-[var(--text-dim)] mt-2 font-medium text-sm">Platnost od: 01. 03. 2025</p>
                </div>
              </div>
            </div>

            <div className="text-[16px] max-w-none text-[var(--text)] font-light leading-relaxed">
              <p className="mb-10 text-[var(--text-muted)] text-[17px]">
                Provozní řád upravuje požadavky právních a ostatních předpisů k zajištění bezpečnosti 
                a ochrany pro areál Za Zastávkou 3, Dolní Měcholupy. Tento dokument je závazný pro 
                všechny podnájemce a osoby pohybující se v areálu.
              </p>

              <div className="bg-[var(--bg)] border-l-[3px] border-[var(--accent)] p-6 md:p-8 mb-12 rounded-r-xl">
                <h3 className="text-xl font-barlow font-bold text-[var(--white)] mb-6">Hlavní oblasti provozního řádu:</h3>
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6 text-[15.5px] text-[var(--text-muted)]">
                  {[
                    "Účel a rozsah platnosti",
                    "Důležitá telefonní čísla a kontakty",
                    "Mimořádné události a jejich řešení",
                    "Povinnosti podnájemců",
                    "Prevence rizik a bezpečnost práce",
                    "Doprava a parkování vozidel",
                    "Odpadové hospodářství",
                    "Práce s otevřeným ohněm",
                    "Hasicí přístroje a PO",
                    "BOZP a PO dokumentace",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--accent)] text-lg leading-none mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--surface2)] rounded-xl py-7 px-8 mb-12 border border-[var(--border)]">
                <h3 className="text-xl font-barlow font-bold text-[var(--white)] mb-5 border-b border-[var(--border)] pb-4">Důležitá telefonní čísla</h3>
                <div className="grid md:grid-cols-2 gap-8 text-[15px] text-[var(--text-muted)]">
                  <div>
                    <p className="font-bold text-[var(--white)] mb-4 tracking-wide uppercase text-xs">Tísňová volání</p>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center border-b border-[var(--border)] pb-2"><span className="opacity-80">Hasiči</span> <span className="font-bold text-[var(--white)]">150</span></li>
                      <li className="flex justify-between items-center border-b border-[var(--border)] pb-2"><span className="opacity-80">Tísňové volání</span> <span className="font-bold text-[var(--white)]">112</span></li>
                      <li className="flex justify-between items-center border-b border-[var(--border)] pb-2"><span className="opacity-80">Záchranná služba</span> <span className="font-bold text-[var(--white)]">155</span></li>
                      <li className="flex justify-between items-center border-b border-[var(--border)] pb-2"><span className="opacity-80">Policie</span> <span className="font-bold text-[var(--white)]">158</span></li>
                      <li className="flex justify-between items-center"><span className="opacity-80">Městská policie</span> <span className="font-bold text-[var(--white)]">156</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-[var(--white)] mb-4 tracking-wide uppercase text-xs">Poruchy</p>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center border-b border-[var(--border)] pb-2"><span className="opacity-80">Elektrický proud</span> <span className="font-bold text-[var(--white)]">800 850 860</span></li>
                      <li className="flex justify-between items-center border-b border-[var(--border)] pb-2"><span className="opacity-80">Plyn</span> <span className="font-bold text-[var(--white)]">1239</span></li>
                      <li className="flex justify-between items-center"><span className="opacity-80">Voda</span> <span className="font-bold text-[var(--white)]">840 111 112</span></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                  <span className="font-semibold text-[var(--white)]">Manažer areálu (Mimořádné situace):</span>
                  <a href="tel:+420603233264" className="text-[var(--accent)] hover:text-white transition-colors font-semibold text-lg">+420 603 233 264</a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[var(--accent)] text-white px-6 py-4 rounded-xl font-sans font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all flex items-center justify-center gap-3 text-[15px]"
                >
                  <Download size={20} />
                  Stáhnout (PDF)
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-transparent border border-[var(--border)] text-[var(--text)] hover:text-white hover:border-white/30 hover:bg-white/5 px-6 py-4 rounded-xl font-sans font-semibold hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-[15px]"
                >
                  <ExternalLink size={20} />
                  Otevřít v prohlížeči
                </a>
              </div>

              <p className="text-[13px] text-[var(--text-dim)] border-t border-[var(--border)] pt-5">
                <strong className="text-[var(--text)]">Poznámka:</strong> Podnájemci jsou povinni seznámit své zaměstnance s provozním řádem 
                a zajistit jeho dodržování. Provozní řád je k dispozici také na informačních tabulích 
                umístěných u vjezdu do areálu.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
