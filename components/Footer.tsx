"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/images/logo.png");
  
  const logoVariants = [
    "/images/logo.png",
    "/images/logo.svg",
    "/images/areal/logo.png",
    "/images/Logo.png",
    "/images/LOGO.png",
  ];
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            {!logoError ? (
              <Link href="/" className="inline-block mb-4">
                <Image
                  src={logoSrc}
                  alt="Areál Zastávka Logo"
                  width={180}
                  height={43}
                  className="object-contain h-auto w-auto"
                  unoptimized
                  onError={() => {
                    const currentIndex = logoVariants.indexOf(logoSrc);
                    if (currentIndex < logoVariants.length - 1) {
                      setLogoSrc(logoVariants[currentIndex + 1]);
                    } else {
                      setLogoError(true);
                    }
                  }}
                />
              </Link>
            ) : (
              <h3 className="text-2xl font-bold mb-4">Areál Zastávka</h3>
            )}
            <p className="text-gray-400 mt-4">
              Váš servisní hub pro firmy a jejich zaměstnance. Všechny služby na jednom místě.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>Areál Zastávka<br />Zastávka, Česká republika</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+420123456789" className="hover:text-white transition-colors">
                  +420 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@arealzastavka.cz" className="hover:text-white transition-colors">
                  info@arealzastavka.cz
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Rychlé odkazy</h4>
            <div className="space-y-2 text-gray-400">
              <button
                onClick={() => {
                  const element = document.getElementById("sluzby");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors"
              >
                Služby
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("o-nas");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors"
              >
                O nás
              </button>
              <Link
                href="/provozni-rad"
                className="block hover:text-white transition-colors"
              >
                Provozní řád
              </Link>
              <button
                onClick={() => {
                  const element = document.getElementById("kontakt");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Areál Zastávka. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}

