import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-bg)] border-t border-[var(--dark-border)] pt-16 pb-10 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-12 mb-12">
          <div>
            <img src="/images/logo.svg" alt="Areál Zastávka" className="h-8 mb-4" />
            <p className="text-sm text-[var(--dark-text-muted)] leading-relaxed max-w-sm">
              Váš servisní hub pro firmy a jejich zaměstnance. Všechny služby na jednom místě v Praze-Dolní Měcholupy.
            </p>
          </div>

          <div>
            <h4 className="font-barlow font-bold text-base text-[var(--dark-text)] tracking-[0.08em] mb-4">NAVIGACE</h4>
            <div className="flex flex-col gap-1 items-start">
              {[
                {href: '/volne-prostory', label: 'Volné prostory'},
                {href: '/sluzby', label: 'Služby'},
                {href: '/provozni-rad', label: 'Provozní řád'},
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-sm font-sans text-[var(--dark-text-muted)] hover:text-[var(--dark-text)] py-1 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-barlow font-bold text-base text-[var(--dark-text)] tracking-[0.08em] mb-4">KONTAKT</h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+420603233264" className="text-sm text-[var(--dark-text-muted)] hover:text-[var(--dark-text)] transition-colors decoration-transparent">+420 603 233 264</a>
              <a href="mailto:info@arealzastavka.cz" className="text-sm text-[var(--dark-text-muted)] hover:text-[var(--dark-text)] transition-colors decoration-transparent">info@arealzastavka.cz</a>
              <span className="text-[13px] text-[var(--dark-text-muted)] opacity-70 leading-relaxed mt-1">Za Zástávkou 377/3<br />109 00 Praha-Dolní Měcholupy</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--dark-border)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[13px] text-[var(--dark-text-muted)] opacity-70">© 2026 Areál Zastávka. Všechna práva vyhrazena.</span>
          <Link href="/provozni-rad" className="text-[13px] text-[var(--dark-text-muted)] opacity-70 hover:opacity-100 underline transition-opacity">
            Provozní řád
          </Link>
        </div>
      </div>
    </footer>
  );
}
