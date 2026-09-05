Agis en tant que Designer UX/UI Senior et Expert Frontend React/Tailwind CSS. 

Je souhaite reconcevoir le Header (Navbar) de la landing page de "Lehmora Labs" (Venture Studio d'ingénierie logicielle et d'infrastructures SaaS). 

Génère le composant React (Next.js App Router) responsive avec Tailwind CSS et Framer Motion pour les animations.

---

### 1. ARCHITECTURE DES MENUS DU HEADER

Le Header doit comporter un Logo ("Lehmora Labs") à gauche, suivi de 4 blocs de navigation principaux au centre, et un bouton d'action (CTA) principal à droite :

1. **À propos**
   - **À Propos :** Lien ancre (`#about`) vers l'histoire et le statut de Venture Studio.

2. **Gouvernance (Dropdown Menu "Gouvernance")**
   - **Vision, Mission & Valeurs :** Lien ancre (`#dna`) regroupant la vision 100 ans, la mission et les 4 valeurs piliers.

2. **Portfolio (Dropdown Menu Rich Megamenu)**
   Chaque élément de ce menu déroulant doit afficher une icône, le nom du produit, une micro-description, un badge de statut, et naviguer DIRECTEMENT vers le site/landing page externe du produit (target="_blank") :
   - **Famsub** [Badge: Live] : "Marketplace & paiement séquestre pour abonnements numériques." -> URL: https://famsub.app
   - **Tallyno** [Badge: Beta] : "Finance communautaire non-custodiale & tontines digitalisées." -> URL: https://tallyno.app
   - **Payskool** [Badge: En dév.] : "SaaS B2B de gestion et recouvrement des frais scolaires." -> URL: https://payskool.app

3. **Contact (Lien simple)**
   - Lien ancre (`#contact`) vers la section contact/partenariats.

4. **Bouton d'Action à Droite (CTA)**
   - Bouton primaire : "Nous contacter" ou Mailto direct (`contact@lehmora.com`).

---

### 2. EXIGENCES DESIGN & STYLE UI

- **Style :** Clean, Modern Dark Mode ou Ultra-minimalist Light/Glassmorphism (vibe Vercel, Stripe, Supabase).
- **Sticky & Glassmorphism :** Le header doit être fixé en haut (`sticky top-0`), avec un fond flouté haut de gamme (`backdrop-blur-md bg-background/80 border-b border-border/40`).
- **Dropdowns Interactifs :** Utilise Radix UI / Shadcn UI NavigationMenu ou du state React propre avec Framer Motion pour des transitions fluides au survol/clic.
- **Mobile Responsive :** Menu Mobile (Sheet / Drawer / Hamburger) parfaitement adapté qui regroupe intelligemment les catégories sans surcharger l'écran.

Fournis-moi le code complet du composant React propre, typé en TypeScript et modulaire.