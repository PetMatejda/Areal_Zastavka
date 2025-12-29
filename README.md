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
- Kontaktní formulář momentálně simuluje odeslání - je potřeba připojit backend API

