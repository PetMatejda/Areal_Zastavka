# Areál Zastávka - Servisní Hub

Moderní webová aplikace pro Areál Zastávka - katalog služeb pro firmy a jejich zaměstnance.

## Technologie

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Instalace

1. Nainstalujte závislosti:
```bash
npm install
```

2. Spusťte vývojový server:
```bash
npm run dev
```

3. Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči

## Struktura projektu

- `app/` - Next.js App Router soubory
- `components/` - React komponenty
- `lib/` - Data a utility funkce

## Aktualizace na GitHub

### Automatická synchronizace

Projekt je nastaven pro automatickou synchronizaci s GitHubem:

1. **Automatický push po commitu** - Git hook automaticky pushne změny po každém commitu
2. **Manuální synchronizace** - Použijte PowerShell skript:
```powershell
.\sync-to-github.ps1
```

### Ruční aktualizace

Nebo ručně pomocí Git příkazů:
```bash
git add .
git commit -m "Popis změn"
git push origin main
```

**Poznámka:** Všechny změny jsou automaticky synchronizovány s repozitářem na GitHubu: https://github.com/PetMatejda/Areal_Zastavka.git

## Poznámky

- Obrázky z původního webu je potřeba přidat do projektu nebo aktualizovat URL v komponentách

## Kontaktní formulář

Kontaktní formulář má připravený API endpoint (`app/api/contact/route.ts`), ale **momentálně pouze loguje data do konzole** - emaily se neposílají.

### Pro skutečné odesílání emailů:

1. **Nainstalujte emailovou službu** (např. Resend - zdarma do 3000 emailů/měsíc):
   ```bash
   npm install resend
   ```

2. **Nastavte API klíč** v proměnných prostředí Vercelu:
   - Jděte do Vercel Dashboard → Settings → Environment Variables
   - Přidejte: `RESEND_API_KEY` = váš API klíč z Resend

3. **Aktualizujte `app/api/contact/route.ts`** - odkomentujte a upravte kód pro odesílání emailů

Alternativně můžete použít jiné služby: SendGrid, Mailgun, nebo vlastní SMTP server.

