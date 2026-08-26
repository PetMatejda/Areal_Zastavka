"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Na homepage necháme úvodní fotku (a ceduli na ní) volnou - lišta i logo se
  // objeví až po odscrollování. Na ostatních stránkách je lišta vidět vždy.
  const showBar = !isHome || scrolled;

  const links = [
    {href: '/volne-prostory', label: 'Volné prostory'},
    {href: '/sluzby', label: 'Služby'},
    {href: '/provozni-rad', label: 'Provozní řád'},
    {href: '#kontakt', label: 'Kontakt'}
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ease-out px-4 md:px-10 ${showBar ? 'bg-[var(--dark-bg)]/95 backdrop-blur-md border-b border-[var(--dark-border)]' : 'bg-transparent'}`}>
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[72px]">
        {/* Logo - schované, dokud jsme nahoře na homepage */}
        <Link
          href="/"
          aria-hidden={!showBar}
          tabIndex={showBar ? 0 : -1}
          className={`flex items-center gap-3 bg-transparent border-none cursor-pointer group transition-opacity duration-300 ${showBar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <img
            src="/images/logo-budova-white.png"
            alt=""
            className="h-7 md:h-8 w-auto transition-opacity group-hover:opacity-80"
          />
          <span className="font-barlow font-bold text-lg md:text-xl tracking-wide text-[var(--dark-text)] transition-opacity group-hover:opacity-80">
            AREÁL ZASTÁVKA
          </span>
        </Link>

        {/* Menu - vždy jen ikona, rozbaluje se pod ní */}
        <button
          className={`p-2 rounded-lg transition-colors text-white ${showBar ? '' : 'bg-black/30 backdrop-blur-sm'}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Rozbalovací nabídka */}
      <div className={`absolute top-[72px] left-0 right-0 bg-[var(--dark-bg)] border-b border-[var(--dark-border)] transition-all duration-300 overflow-hidden ${open ? 'max-h-[400px] py-4' : 'max-h-0 py-0 border-b-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 gap-2 max-w-[1280px] mx-auto">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-md font-sans text-base font-medium transition-colors ${pathname === link.href ? 'text-[var(--accent)] bg-[rgba(255,255,255,0.05)]' : 'text-[var(--dark-text-muted)] hover:text-[var(--dark-text)] bg-transparent'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
