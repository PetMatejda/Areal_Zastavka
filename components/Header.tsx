"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {href: '/volne-prostory', label: 'Volné prostory'},
    {href: '/sluzby', label: 'Služby'},
    {href: '/provozni-rad', label: 'Provozní řád'},
    {href: '#kontakt', label: 'Kontakt'}
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ease-out px-4 md:px-10 ${scrolled ? 'bg-[#0b0d10]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.07)]' : 'bg-transparent'}`}>
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 bg-transparent border-none cursor-pointer group">
          <img 
            src="/images/logo.svg" 
            alt="Areál Zastávka" 
            className="h-8 md:h-9 group-hover:opacity-80 transition-opacity"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`px-4 py-2 rounded-md font-sans text-[15px] font-semibold transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${pathname === link.href ? 'text-white' : 'text-slate-100 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className="ml-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white border-none rounded-md cursor-pointer font-sans text-sm font-semibold px-5 py-[9px] transition-all transform hover:-translate-y-[1px]">
            Poptat služby
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[var(--white)] p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-[72px] left-0 right-0 bg-[#13171c] border-b border-[rgba(255,255,255,0.07)] transition-all duration-300 overflow-hidden ${open ? 'max-h-[400px] py-4' : 'max-h-0 py-0 border-b-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-md font-sans text-base font-medium transition-colors ${pathname === link.href ? 'text-[var(--accent)] bg-[rgba(255,255,255,0.05)]' : 'text-[var(--text-muted)] hover:text-[var(--white)] bg-transparent'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" onClick={() => setOpen(false)} className="mt-2 text-center bg-[var(--accent)] text-white rounded-md font-sans text-base font-semibold px-4 py-3">
            Poptat služby
          </Link>
        </nav>
      </div>
    </header>
  );
}
