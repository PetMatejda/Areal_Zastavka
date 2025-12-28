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
    title: "Vše na jednom místě",
    description: "Šetříme váš čas"
  },
  {
    title: "Pro firmy i lidi",
    description: "Benefity pro každého"
  },
  {
    title: "Ověřená kvalita",
    description: "Garance Areálu Zastávka"
  }
];

