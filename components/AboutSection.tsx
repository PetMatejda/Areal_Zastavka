"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Users, Target } from "lucide-react";
import { getImageSrc } from "@/lib/images";

// Různé placeholdery pro každou pozici v galerii
const galleryPlaceholders = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80", // Kancelářské budovy
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80", // Průmyslový areál
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80", // Moderní kanceláře
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80", // Business park
  "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1920&q=80", // Interiér
];

export default function AboutSection() {
  const [imageErrors, setImageErrors] = useState<boolean[]>([false, false, false, false, false]);

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const imageSources = [
    "/images/areal/areal-zastavka.jpg",
    "/images/areal/hala-6-5.jpg",
    "/images/areal/budova-terakota.jpg",
    "/images/areal/budova-hneda.jpg",
    getImageSrc("restaurantInterior"),
  ];

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
          className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {imageSources.map((src, index) => {
            const altTexts = [
              "Areál Zastávka - letecký pohled",
              "HALA 6.5 - Balloon Light Praha s.r.o.",
              "Areál Zastávka - budova s terakotovou fasádou",
              "Areál Zastávka - budova se světle hnědou fasádou",
              "Měcholupský Park - Interiér",
            ];
            
            const displaySrc = imageErrors[index] ? galleryPlaceholders[index] : src;
            
            return (
              <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={displaySrc}
                  alt={altTexts[index]}
                  fill
                  className="object-cover"
                  unoptimized
                  onError={() => handleImageError(index)}
                />
              </div>
            );
          })}
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

