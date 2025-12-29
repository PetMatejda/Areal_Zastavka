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

Kontaktní formulář je připraven k odesílání emailů na následující adresy:
- info@arealzastavka.cz
- petra.huclova@arealzastavka.cz
- petr.matejicek@balloonlightgroup.com

### Nastavení odesílání emailů:

1. **Zaregistrujte se na Resend** (zdarma do 3000 emailů/měsíc):
   - Navštivte: https://resend.com
   - Vytvořte účet a získejte API klíč

2. **Nastavte doménu v Resend**:
   - Přidejte doménu `arealzastavka.cz` do Resend
   - Ověřte DNS záznamy podle instrukcí Resend

3. **Nastavte API klíč v Vercelu**:
   - Jděte do Vercel Dashboard → Váš projekt → Settings → Environment Variables
   - Přidejte novou proměnnou:
     - **Name:** `RESEND_API_KEY`
     - **Value:** váš API klíč z Resend
     - **Environment:** Production, Preview, Development (zaškrtněte všechny)
   - Uložte a redeployujte projekt

4. **Ověřte odesílání**:
   - Po nastavení API klíče se emaily budou automaticky odesílat na všechny tři adresy
   - Pokud API klíč není nastaven, data se pouze logují do konzole

**Poznámka:** Resend je již nainstalován v projektu (`npm install resend`).

