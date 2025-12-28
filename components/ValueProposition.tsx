"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { valuePropositions } from "@/lib/data";
import { CheckCircle, Users, Award } from "lucide-react";

const icons = [CheckCircle, Users, Award];

export default function ValueProposition() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Image with Parallax Effect - only visible until Services section */}
      <div 
        id="parallax-background"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/areal/areal-zastavka.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.25,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg inline-block max-w-4xl border-2 border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areál Zastávka: místo pro vaše podnikání
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ideální lokalita pro vaši firmu s kompletním servisním zázemím
            </p>
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
                whileHover={{ scale: 1.05, y: -8 }}
                className="text-center p-8 rounded-xl bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

