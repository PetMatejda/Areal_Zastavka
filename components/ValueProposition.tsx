"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { valuePropositions } from "@/lib/data";
import { CheckCircle, Users, Award } from "lucide-react";

const icons = [CheckCircle, Users, Award];

export default function ValueProposition() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass rounded-2xl p-8 md:p-12 shadow-xl inline-block max-w-4xl border border-white/20 relative overflow-hidden">
            {/* Dekorativní gradient pozadí */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                Areál Zastávka: místo pro vaše podnikání
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                Ideální lokalita pro vaši firmu s kompletním servisním zázemím
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valuePropositions.map((prop, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8, rotate: 1 }}
                className="text-center p-8 rounded-2xl glass border border-white/30 shadow-xl hover:shadow-glow-lg hover:border-blue-400/50 transition-all relative overflow-hidden group"
              >
                {/* Dekorativní gradient pozadí při hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-orange-50/0 group-hover:from-blue-50/30 group-hover:via-white group-hover:to-orange-50/30 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-blue rounded-2xl mb-6 shadow-lg group-hover:shadow-glow transition-all">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

