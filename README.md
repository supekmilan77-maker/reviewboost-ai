# 🌟 ReviewBoost AI

Jednoduchá React aplikácia na rýchle a ľahké generovanie Google recenzií pre reštaurácie a služby.

## 📋 Úvod

**ReviewBoost AI** pomáha zákazníkom v reštauráciách, kavárenách a iných službách rýchlo vytvoriť a publikovať kvalitné Google recenzie. Aplikácia ponúka jednoduchý a intuitívny výber hodnotenia a tagov, na základe ktorých automaticky vygeneruje priradenú recenziu v slovenčine.

## ✨ Hlavné funkcie

- **⭐ Výber hodnotenia** - Jednoduchý výber 1-5 hviezdičiek
- **🏷️ Inteligentný výber tagov** - 5 predpripravených tagov na výber
  - Skvelá kávička
  - Rýchla obsluha
  - Príjemné prostredie
  - Chutné dezerty
  - Dobrá cena
- **🤖 AI generovanie textu** - Automatické generovanie priaznivého textu recenzie v slovenčine
- **📋 Kopírovanie** - Jednoklikom skopírovať recenziu
- **🌙 Svetlý/tmavý režim** - Automatická detekcia a manuálny prepínač
- **📱 Mobilný dizajn** - Plne responzívna aplikácia
- **🎨 Moderný dizajn** - Tailwind CSS s gradientami a animáciami

## 🛠️ Technológie

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling a dizajn
- **JavaScript (ES6+)** - Programovací jazyk
- **React Scripts** - Build a development tools

## 📦 Inštalácia

```bash
# Naklonuj repozitár
git clone https://github.com/supekmilan77-maker/reviewboost-ai.git
cd reviewboost-ai

# Nainštaluj dependencies
npm install

# Spusti development server
npm start
```

Aplikácia sa otvorí na `http://localhost:3000`

## 🚀 Použitie

1. **Zadaj názov prevádzky** - V hornej časti aplikácie zadaj názov reštaurácie/kaviarne
2. **Vyber hodnotenie** - Klikni na hviezdičky (1-5)
3. **Vyber tagy** - Klikni na tagy, ktoré sa vzťahujú na tvoju skúsenosť (možno viacero)
4. **Vygeneruj recenziu** - Klikni na modré tlačidlo "Vygenerovať moju recenziu"
5. **Skopíruj a zdieľaj** - Skopíruj text a pridaj ho na Google Recenzie

## 📱 Ukážka štruktúry

```
┌─────────────────────────────────────┐
│         ⭐ ReviewBoost AI           │
│    (Názov prevádzky: Kaviareň)      │
├─────────────────────────────────────┤
│                                     │
│  1️⃣  Vyber hodnotenie              │
│     ⭐ ⭐ ⭐ ⭐ ⭐               │
│                                     │
│  2️⃣  Vyber tagy                    │
│     [✓ Skvelá kávička]             │
│     [✓ Rýchla obsluha]             │
│     [  Príjemné prostredie]        │
│                                     │
│  [🚀 Vygenerovať moju recenziu]     │
│                                     │
│  ✨ Tvoja recenzia                 │
│  "Dnes som tu bol na káve..."      │
│                                     │
│  [📋 Skopírovať]  [🔗 Na Google]   │
└─────────────────────────────────────┘
```

## 🎨 Logika generovania textu

Aplikácia používa šablóny na základe hvezdičkového hodnotenia a kombinuje ich s vybranými tagmi:

### Príklad - 5 hviezdičiek + Skvelá kávička + Rýchla obsluha:
```
"Dnes som tu bol a musím povedať, že to bolo skvelé! 
Káva bola vynikajúca. Obsluha bola rýchla a milá. 
Určite sa sem rád vrátim!"
```

### Príklad - 4 hviezdičky + Príjemné prostredie + Dobrá cena:
```
"Navštívil som túto prevádzku a má to svoje výhody. 
Prostredie je veľmi príjemné a pohodlné. 
Ceny sú veľmi spravodlivé. Určite prídem znova!"
```

## 🌙 Svetlý a tmavý režim

Aplikácia automaticky detekuje preferencu systému a umožňuje manuálny prepínač v header-i.

## 📱 Responsívny dizajn

- ✅ Mobilný - Optimalizované pre malé obrazovky
- ✅ Tablet - Perfektné na iPad a podobné zariadenia
- ✅ Desktop - Plne funkčné na veľkých monitoroch

## 🔧 Build pre produkciu

```bash
npm run build
```

Optimalizovaná verzia sa vytvorí v priečinku `/build`.

## 📄 Licencia

Tento projekt je bez licencie - voľne dostupný na použitie.

## 👨‍💻 Autor

Vytvorené ako pomôcka pre zákazníkov v reštauráciách a službách.

## 🤝 Príspevky

Chceš vylepšiť aplikáciu? Posielajte pull requesty!

## ❓ FAQ

**Q: Ako zmením farbu tlačidiel?**  
A: Zmeň farby v `tailwind.config.js` alebo priamo v `App.js` v classoch.

**Q: Môžem pridať viac tagov?**  
A: Áno, jednoducho pridaj nové tagy do poľa `availableTags` v `App.js`.

**Q: Ako môžem zmeniť generované texty?**  
A: Zmeň šablóny v objekte `reviewTemplates` v `App.js`.

---

**Vďaka za použitie ReviewBoost AI! 🌟**
