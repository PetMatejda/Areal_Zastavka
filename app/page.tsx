"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Contact, { SectionLabel } from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Building2, UtensilsCrossed, Rocket, ShieldCheck, Heart } from "lucide-react";
import { availableSpaces } from "@/lib/data";

const IMG = {
  areal: '/images/areal/vjezd-brana.jpg',
  budova: 'https://www.arealzastavka.cz/images/areal/budova-terakota.jpg',
  gastro: 'https://www.arealzastavka.cz/images/gastro/interior.jpg',
};

function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 350]);

  return (
    <section className="relative h-screen min-h-[640px] max-h-[1080px] overflow-hidden flex items-end">
      {/* Parallax Image */}
      <motion.div ref={ref} style={{ y }} className="absolute -inset-[20%] w-[140%] h-[140%]">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${IMG.areal})` }} />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-bg)]/35 via-[var(--dark-bg)]/40 to-[var(--dark-bg)]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-bg)]/75 via-[var(--dark-bg)]/20 to-transparent right-[30%]" />

      {/* Content */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 pb-[100px] md:pb-[112px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="inline-flex items-center gap-2 mb-6 bg-[var(--accent)]/15 border border-[var(--accent)]/30 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 block animate-pulse-custom" />
            <span className="font-sans text-[13px] text-[var(--dark-text-muted)] tracking-widest">Praha-Dolní Měcholupy · Kanceláře k dispozici</span>
          </div>

          <h1 className="font-barlow font-extrabold text-[clamp(64px,10vw,130px)] leading-[0.92] text-[var(--dark-text)] tracking-[-0.01em] mb-6 text-balance [text-shadow:0_4px_28px_rgba(0,0,0,0.65)]">
            AREÁL<br />
            <span className="text-[var(--accent)]">ZASTÁVKA</span>
          </h1>

          <p className="text-[clamp(16px,2vw,20px)] text-[var(--dark-text-muted)] max-w-[540px] mb-10 font-light leading-[1.7] [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]">
            Váš servisní hub pro podnikání v Praze. Průmyslové haly, kanceláře a kompletní zázemí — vše na jednom místě.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link href="/volne-prostory" className="bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white border-none rounded-lg font-sans font-semibold text-[15px] px-7 py-3.5 transition-all transform hover:-translate-y-0.5">
              Prohlédnout prostory
            </Link>
            <Link href="#kontakt" className="bg-transparent hover:border-white/40 text-[var(--dark-text-muted)] hover:text-[var(--dark-text)] border border-white/20 rounded-lg font-sans font-medium text-[15px] px-7 py-3.5 transition-all backdrop-blur-md">
              Kontaktovat nás
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-2">
        <span className="font-barlow text-[11px] tracking-[0.15em] text-white/60 writing-m-vertical" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-scroll" />
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="bg-[var(--surface)] border-y border-[var(--border)] relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
        {[
          { val: '3 min', label: 'pěšky na MHD a vlak' },
          { val: '150 m²', label: 'kancelářské prostory k pronájmu' },
          { val: '10+', label: 'dostupných služeb' },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.6 }} className="py-7 md:py-7 px-4 md:px-8 flex flex-col gap-1 text-center md:text-left">
            <span className="font-barlow font-bold text-4xl text-[var(--steel-light)] leading-none">{s.val}</span>
            <span className="text-[13px] text-[var(--text-muted)] font-normal">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SpacesSection() {
  const spaces = availableSpaces.map((s) => ({
    img: s.images[0] || IMG.areal,
    tag: s.isUniversal ? 'Dotaz' : 'Dostupné',
    tagColor: s.isUniversal ? 'var(--accent)' : '#4caf50',
    title: s.title,
    sub: s.location || 'Přizpůsobíme nabídku',
    size: s.isUniversal ? 'Flexibilně' : `${s.area} m²`,
    desc: s.description,
    price: s.isUniversal ? 'Kontaktujte nás' : s.price,
    isContact: s.isUniversal,
  }));

  return (
    <section className="py-[100px] px-6 md:px-10 max-w-[1280px] mx-auto">
      <motion.div className="mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <SectionLabel>Volné prostory</SectionLabel>
        <h2 className="font-barlow font-extrabold text-4xl md:text-5xl lg:text-7xl text-[var(--white)] leading-[0.95] mb-5">
          PROSTORY<br/><span className="text-[var(--steel)]">K PRONÁJMU</span>
        </h2>
        <p className="text-[17px] text-[var(--text-muted)] max-w-[520px] font-light leading-relaxed">Prohlédněte si aktuálně dostupné kanceláře a dejte nám vědět o vaší poptávce na další prostory.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {spaces.map((s, i) => (
          <Link href={s.isContact ? "#kontakt" : "/volne-prostory"} key={i} className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 transition-all duration-300">
            <div className="relative h-[220px] overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,23,28,0.8)] to-transparent" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border rounded-full px-3 py-1 font-sans text-xs font-semibold" style={{ color: s.tagColor, borderColor: `${s.tagColor}40` }}>{s.tag}</div>
              <div className="absolute bottom-4 right-4 font-barlow font-bold text-[22px] text-[var(--white)]">{s.size}</div>
            </div>
            <div className="p-5 md:p-6 flex flex-col flex-grow">
              <div className="text-xs text-[var(--text-muted)] mb-1.5 font-medium">{s.sub}</div>
              <h3 className="font-barlow font-bold text-[26px] text-[var(--white)] mb-3 leading-[1.1]">{s.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-[1.7] mb-5 flex-grow">{s.desc}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className={`font-barlow text-[20px] font-bold ${s.isContact ? 'text-[var(--accent)]' : 'text-[var(--steel-light)]'}`}>{s.price}</span>
                <span className="text-[13px] text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors font-medium">
                  {s.isContact ? 'Kontaktovat →' : 'Více info →'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const cats = [
    { icon: Building2, title: 'Pronájem', color: 'var(--steel)', items: ['Pronájem ploch', 'Pronájem hal', 'Pronájem kanceláří', 'Zajištění akcí', 'Ubytovna'] },
    { icon: UtensilsCrossed, title: 'Gastro & Eventy', color: '#e8a87c', items: ['Meeting Boxy do zasedačky', 'Firemní stravování', 'Večírky a Eventy'] },
    { icon: Rocket, title: 'Růst & Technologie', color: '#7bc8a4', items: ['AI Školení & Workshopy', 'Správa sociálních sítí', 'Webové služby & Audit'] },
    { icon: ShieldCheck, title: 'Provoz & Bezpečí', color: '#a89bc8', items: ['PO & BOZP Servis', 'Stavební činnost', 'Kryté parkování (VIP)'] },
    { icon: Heart, title: 'Lifestyle & Volný čas', color: '#c8a87b', items: ['Tenis Aréna (Praha 4)', 'Hodinový manžel domů'] },
  ];

  return (
    <section className="py-[100px] px-6 md:px-10 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionLabel>Co nabízíme</SectionLabel>
          <h2 className="font-barlow font-extrabold text-4xl md:text-5xl lg:text-7xl text-[var(--white)] leading-[0.95] mb-5">
            KOMPLETNÍ<br/><span className="text-[var(--steel)]">SERVIS</span>
          </h2>
          <p className="text-[17px] text-[var(--text-muted)] max-w-[520px] font-light leading-relaxed">Vše, co potřebujete pro vaše podnikání a pohodu zaměstnanců — na jednom místě.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {cats.map((c, i) => {
            const anchor = c.title === 'Pronájem' ? '/volne-prostory' : 
                           c.title === 'Gastro & Eventy' ? '/sluzby#gastro' :
                           c.title === 'Růst & Technologie' ? '/sluzby#technologie' :
                           c.title === 'Provoz & Bezpečí' ? '/sluzby#provoz' : '/sluzby#zivotni-styl';
             
            return (
            <Link href={anchor} key={i} className="group bg-[var(--bg)] hover:bg-[var(--surface2)] border border-[var(--border)] rounded-xl p-7 md:p-6 cursor-pointer hover:-translate-y-1 transition-all duration-250" style={{ '--col-hover': `${c.color}40`, '--col-bg': `${c.color}18`, '--col-border': `${c.color}30` } as React.CSSProperties}>
              <style jsx>{` a:hover { border-color: var(--col-hover) !important; } `}</style>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4.5" style={{ background: 'var(--col-bg)', border: '1px solid var(--col-border)' }}>
                <c.icon size={20} style={{ color: c.color }} />
              </div>
              <h3 className="font-barlow font-bold text-2xl text-[var(--white)] mb-3.5 leading-none">{c.title}</h3>
              <ul className="list-none flex flex-col gap-2">
                {c.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-[13.5px] text-[var(--text-muted)] font-normal leading-tight">
                    <span className="w-1 h-1 rounded-full shrink-0 relative top-1.5" style={{ background: c.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
}

function GastroFeature() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  // Simplified parallax effect
  const y = useTransform(scrollY, [0, 2000], [0, 200]);

  return (
    <section className="overflow-hidden relative min-h-[500px] flex items-center">
      <motion.div ref={ref} style={{ y }} className="absolute -inset-[20%] w-[140%] h-[140%]">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${IMG.gastro})` }} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-bg)]/95 via-[var(--dark-bg)]/80 to-[var(--dark-bg)]/50" />
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-10 py-20 pointer-events-none">
        <motion.div className="max-w-[500px]" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionLabel>Gastro & Eventy</SectionLabel>
          <h2 className="font-barlow font-extrabold text-4xl md:text-5xl lg:text-6xl text-[var(--dark-text)] leading-[0.95] mb-5">
            FIREMNÍ STRAVOVÁNÍ<br/><span className="text-[var(--accent)]">& EVENTY</span>
          </h2>
          <p className="text-base text-[var(--dark-text-muted)] leading-[1.7] mb-7 font-light">
            Od ranního kafe a chlebíčků po firemní večírky. Kompletní gastronomické zázemí přímo v areálu.
          </p>
          <div className="flex flex-col gap-3">
            {['Meeting Boxy přímo do zasedačky', 'Zvýhodněné obědy pro zaměstnance', 'Organizace firemních eventů'].map((f, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-[var(--dark-text-muted)]">
                <span className="text-[var(--accent)] text-base">✓</span> {f}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Header />
      <Hero />
      <StatsBar />
      <SpacesSection />
      <ServicesSection />
      <GastroFeature />
      <Contact />
      <Footer />
    </main>
  );
}
