"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { serviceCategories } from "@/lib/data";
import { Send } from "lucide-react";

interface ContactFormProps {
  defaultInterest?: string;
}

export default function ContactForm({ defaultInterest = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: defaultInterest,
    message: "",
  });

  // Update interest when defaultInterest changes
  useEffect(() => {
    if (defaultInterest) {
      setFormData(prev => ({ ...prev, interest: defaultInterest }));
    }
  }, [defaultInterest]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Create service options from categories
  const serviceOptions = serviceCategories.flatMap((category) =>
    category.items.map((item) => `${category.name} - ${item.title}`)
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Chyba při odesílání');
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        interest: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error('Chyba při odesílání formuláře:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Dekorativní elementy */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blob -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blob -ml-48 -mb-48" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="glass rounded-2xl p-6 md:p-8 shadow-xl inline-block max-w-3xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Poptat služby
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Vyplňte formulář a my se vám ozveme s nabídkou na míru
            </p>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl shadow-xl space-y-6 border border-white/30"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Jméno *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                placeholder="Vaše jméno"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                Firma
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                placeholder="Název firmy"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                placeholder="vas@email.cz"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                O co máte zájem *
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Vyberte službu</option>
                <option value="Pronájem - Volné prostory">Pronájem - Volné prostory</option>
                {serviceOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
                <option value="Jiné">Jiné</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Zpráva
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-500 outline-none transition-all resize-none bg-white/80 backdrop-blur-sm"
                placeholder="Vaše zpráva nebo dotaz..."
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
              >
                Děkujeme! Vaše poptávka byla odeslána. Brzy se vám ozveme.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
              >
                Omlouváme se, došlo k chybě. Zkuste to prosím znovu.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full gradient-blue text-white px-6 py-4 rounded-xl font-semibold hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:scale-105"
            >
              {isSubmitting ? (
                "Odesílám..."
              ) : (
                <>
                  Odeslat poptávku
                  <Send size={20} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

