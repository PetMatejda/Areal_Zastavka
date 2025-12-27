"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Users, Target } from "lucide-react";
import { getImageSrc } from "@/lib/images";

export default function AboutSection() {
  return (
    <section id="o-nas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Areálu Zastávka
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jsme více než jen pronajímatel kancelářských prostor. Jsme váš partner pro všechny služby, které vaše firma a zaměstnanci potřebují.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={getImageSrc("arealMain")}
              alt="Areál Zastávka"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={getImageSrc("restaurantInterior")}
              alt="Měcholupský Park - Interiér"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Building2 size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Moderní areál
            </h3>
            <p className="text-gray-600">
              Kvalitní kancelářské prostory v srdci Zastávky s výbornou dopravní dostupností.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Komunita firem
            </h3>
            <p className="text-gray-600">
              Spojujeme firmy a vytváříme prostředí pro spolupráci a růst.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Servisní hub
            </h3>
            <p className="text-gray-600">
              Od gastro přes technologie až po lifestyle - vše na jednom místě.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

