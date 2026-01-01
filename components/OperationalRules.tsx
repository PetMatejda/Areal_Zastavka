"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function OperationalRules() {
  const pdfUrl = "https://www.arealzastavka.cz/static/media/Provozn%C3%AD%20%C5%99%C3%A1d%20are%C3%A1lu%20032025.85ec1e43eec86593a7a4.pdf";

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Dekorativní elementy */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blob -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blob -ml-48 -mb-48" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl shadow-xl p-8 md:p-12 border border-white/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 gradient-blue rounded-xl shadow-lg">
                <FileText size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Provozní řád areálu
                </h2>
                <p className="text-gray-600 mt-1 font-medium">Platnost od: 01. 03. 2025</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Provozní řád upravuje požadavky právních a ostatních předpisů k zajištění bezpečnosti 
                a ochrany pro areál Za Zastávkou 3, Dolní Měcholupy. Tento dokument je závazný pro 
                všechny podnájemce a osoby pohybující se v areálu.
              </p>

              <div className="glass border-l-4 border-blue-600 p-6 mb-6 rounded-r-xl shadow-lg">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">Hlavní oblasti provozního řádu:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Účel a rozsah platnosti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Důležitá telefonní čísla a kontakty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Mimořádné události a jejich řešení</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Povinnosti podnájemců</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Prevence rizik a bezpečnost práce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Doprava, parkování a odstavování vozidel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Odpadové hospodářství</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Práce s otevřeným ohněm a hořlavými látkami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Hasicí přístroje a požární ochrana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>BOZP a PO dokumentace</span>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6 mb-6 shadow-lg border border-white/30">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">Důležitá telefonní čísla:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Tísňová volání:</p>
                    <ul className="space-y-1 text-sm">
                      <li>Hasiči: <span className="font-bold text-blue-600">150</span></li>
                      <li>Tísňové volání: <span className="font-bold text-blue-600">112</span></li>
                      <li>Záchranná služba: <span className="font-bold text-blue-600">155</span></li>
                      <li>Policie: <span className="font-bold text-blue-600">158</span></li>
                      <li>Městská policie: <span className="font-bold text-blue-600">156</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Poruchy:</p>
                    <ul className="space-y-1 text-sm">
                      <li>Elektrický proud: <span className="font-bold text-blue-600">800 850 860</span></li>
                      <li>Plyn: <span className="font-bold text-blue-600">1239</span></li>
                      <li>Voda: <span className="font-bold text-blue-600">840 111 112</span></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Kontakt pro mimořádné situace:</span><br />
                    Josef Šiška: <a href="tel:+420603233264" className="text-blue-600 hover:underline">+420 603 233 264</a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Stáhnout provozní řád (PDF)
                </motion.a>
                <motion.a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gray-200 text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  Otevřít v novém okně
                </motion.a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
                <p>
                  <strong>Poznámka:</strong> Podnájemci jsou povinni seznámit své zaměstnance s provozním řádem 
                  a zajistit jeho dodržování. Provozní řád je k dispozici také na informačních tabulích 
                  umístěných u vjezdu do areálu.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

