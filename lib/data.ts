export interface HeroOffer {
  title: string;
  description: string;
  tag: string;
  cta: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategory {
  name: string;
  icon: string;
  items: ServiceItem[];
}

export const heroOffer: HeroOffer = {
  title: "BYZNYS & GURMÁN: Týmová porada se šťávou",
  description: "Vyměňte zářivky v zasedačce za skvělé jídlo. Pronájem salonku, catering a oběd v Měcholupském Parku v jednom balíčku.",
  tag: "Hero Tip Měsíce",
  cta: "Rezervovat termín"
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Pronájem",
    icon: "Building",
    items: [
      {
        title: "Pronájem ploch",
        description: "Flexibilní pronájem volných ploch pro skladování, výrobu nebo další podnikatelské aktivity. Různé velikosti a možnosti využití."
      },
      {
        title: "Pronájem hal",
        description: "Pronájem průmyslových hal a skladových prostor. Ideální pro výrobu, logistiku nebo skladování větších objemů materiálu."
      },
      {
        title: "Pronájem kanceláří",
        description: "Moderní kancelářské prostory různých velikostí. Vhodné pro startupy, malé i střední firmy. Včetně zázemí a parkování."
      },
      {
        title: "Zajištění akcí",
        description: "Pronájem prostor pro natáčení reklam, filmů, fotoshooty nebo firemní akce. Kompletní zajištění včetně technického zázemí."
      },
      {
        title: "Ubytovna",
        description: "Kvalitní ubytování pro zaměstnance nebo hosty. Komfortní pokoje s veškerým zázemím. Ideální pro dlouhodobé i krátkodobé pobyty."
      }
    ]
  },
  {
    name: "Gastro & Eventy",
    icon: "Utensils",
    items: [
      {
        title: "Meeting Boxy do zasedačky",
        description: "Káva, chlebíčky a občerstvení doručené přímo na váš stůl. Ideální pro ranní porady."
      },
      {
        title: "Firemní stravování",
        description: "Zvýhodněné obědy pro vaše zaměstnance v restauraci Měcholupský Park. Fakturace jednou měsíčně."
      },
      {
        title: "Večírky a Eventy",
        description: "Kompletní organizace firemních akcí. Od cateringu až po zajištění hudby a programu."
      }
    ]
  },
  {
    name: "Růst & Technologie",
    icon: "Rocket",
    items: [
      {
        title: "AI Školení & Workshopy",
        description: "Naučte svůj tým používat umělou inteligenci. Praktické kurzy pro administrativu i marketing."
      },
      {
        title: "Správa sociálních sítí",
        description: "Nemáte čas na Instagram? Spravujeme profily a tvoříme obsah pro firmy z areálu."
      },
      {
        title: "Webové služby & Audit",
        description: "Tvorba moderních webů a analýza vaší online prezentace. Zvyšte svou viditelnost."
      }
    ]
  },
  {
    name: "Provoz & Bezpečí",
    icon: "ShieldCheck",
    items: [
      {
        title: "PO & BOZP Servis",
        description: "Kompletní zajištění požární ochrany a bezpečnosti práce naším certifikovaným partnerem."
      },
      {
        title: "Stavební činnost",
        description: "Rekonstrukce kanceláří, malování nebo úpravy interiérů na míru vašim potřebám."
      },
      {
        title: "Kryté parkování (VIP)",
        description: "Dlouhodobé stání pro vaše automobily, veterány nebo karavany v bezpečí našeho areálu."
      }
    ]
  },
  {
    name: "Lifestyle & Volný čas",
    icon: "Heart",
    items: [
      {
        title: "Tenis Aréna (Praha 4)",
        description: "Slevy na lekce a pronájem kurtů v našem partnerském areálu. Skvělý benefit pro zaměstnance."
      },
      {
        title: "Hodinový manžel domů",
        description: "Drobné opravy a údržba pro domácnosti vašich zaměstnanců. Kvalita, kterou znáte z práce."
      }
    ]
  }
];

export const valuePropositions = [
  {
    title: "Skvělá dostupnost",
    description: "Kousek od Pražského okruhu, D1. MHD a vlak do 3 minut chůze."
  },
  {
    title: "Vše na jednom místě",
    description: "K dispozici plná kombinace volných ploch, hal i kanceláří"
  },
  {
    title: "Výhodné ceny",
    description: "Kvalitní prostory za férové ceny"
  }
];

// Volné prostory k pronájmu
// Updated: 2024 - corrected texts for office spaces, warehouse hall, and universal inquiry
export interface AvailableSpace {
  id: string;
  title: string;
  type: string; // "kancelář", "hala", "plocha", "ubytovna"
  area: number | string; // plocha v m² nebo textový popis (např. "od 10 do 150")
  price: string; // cena nebo "na dotaz"
  location: string; // umístění v areálu
  description: string;
  features?: string[]; // výhody/vybavení
  images: string[]; // cesty k obrázkům
  available: boolean; // zda je dostupné
  isUniversal?: boolean; // zda je to univerzální poptávka (ne konkrétní prostor)
}

export const availableSpaces: AvailableSpace[] = [
  {
    id: "kancelar-101",
    title: "Kancelářské prostory",
    type: "kancelář",
    area: "od 10 do 150",
    price: "na dotaz",
    location: "Budova A, 1. patro",
    description: "Moderní kancelářské prostory v nově zrekonstruované budově. Ideální pro malé a střední firmy. Včetně kuchyňky a sociálního zázemí.",
    features: [
      "Kuchyňka",
      "Sociální zázemí",
      "Parkování"
    ],
    images: [
      "/images/areal/budova-terakota.jpg",
      "/images/areal/budova-hneda.jpg"
    ],
    available: true
  },
  {
    id: "hala-5",
    title: "Skladová hala č.5",
    type: "hala",
    area: 800,
    price: "na dotaz",
    location: "Hala č.5",
    description: "Velká skladová hala vhodná pro výrobu, skladování nebo logistiku. Vysoké stropy, možnost instalace jeřábu, přímý přístup pro nákladní vozy.",
    features: [
      "Výška stropu 7m",
      "Přístup pro nákladní vozy",
      "Kancelářské zázemí",
      "Parkování pro zaměstnance",
      "24/7 přístup"
    ],
    images: [
      "/images/areal/hala-6-5.jpg"
    ],
    available: true
  },
  {
    id: "univerzalni-poptavka",
    title: "Máte poptávku?",
    type: "univerzální",
    area: "",
    price: "",
    location: "",
    description: "Dejte nám vědět a zkusíme něco vymyslet.",
    images: [
      "/images/areal/areal-zastavka.jpg"
    ],
    available: true,
    isUniversal: true
  }
];

