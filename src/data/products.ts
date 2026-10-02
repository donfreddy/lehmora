export type ProductStatus = "live" | "beta" | "dev";

export interface Product {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  statusLabel: string;
  focus: string;
  pitch: string;
  menuDescription: string;
  url: string;
  accent: string;
}

export const statusLabels: Record<ProductStatus, string> = {
  live: "Live",
  beta: "Beta",
  dev: "En développement",
};

export const products: Product[] = [
  {
    slug: "famsub",
    name: "Famsub",
    category: "Consumer & Digital Economy — B2C",
    status: "live",
    statusLabel: statusLabels.live,
    focus: "Marketplace & Escrow System",
    pitch: "La plateforme de confiance pour le co-abonnement et le partage de services numériques. Sécurisée par un système de paiement séquestre automatisé.",
    menuDescription: "Marketplace & paiement séquestre pour abonnements numériques.",
    url: "https://staging.famsub.com",
    accent: "var(--color-famsub)",
  },
  {
    slug: "tallyno",
    name: "Tallyno",
    category: "Community & Non-Custodial Finance — P2P",
    status: "beta",
    statusLabel: statusLabels.beta,
    focus: "Social Expense & Tontine Engine",
    pitch: "La référence de la finance communautaire non-custodiale. Digitalisation des tontines, gestion transparente des dépenses de groupe et automatisation des relances.",
    menuDescription: "Finance communautaire non-custodiale & tontines digitalisées.",
    url: "https://tallyno-landing.vercel.app",
    accent: "var(--color-tallyno)",
  },
  {
    slug: "payskool",
    name: "Payskool",
    category: "Institutional & Education Tech — B2B",
    status: "dev",
    statusLabel: statusLabels.dev,
    focus: "SaaS de Recouvrement & Gestion Scolaire",
    pitch: "La solution B2B permettant aux établissements d'automatiser la collecte des frais de scolarité, réduire les impayés et piloter leur trésorerie en temps réel.",
    menuDescription: "SaaS B2B de gestion et recouvrement des frais scolaires.",
    url: "https://payskool.vercel.app",
    accent: "var(--color-payskool)",
  },
  {
    slug: "marge",
    name: "Marge",
    category: "Personal Finance & Decision Engine — B2C",
    status: "dev",
    statusLabel: statusLabels.dev,
    focus: "Local-First Spending Decision Engine",
    pitch: "Le moteur de décision financière 100% local-first. Calcule la marge réelle avant chaque achat et simule son impact, sans jamais synchroniser la moindre donnée bancaire.",
    menuDescription: "Decision engine financier local-first, sans synchronisation bancaire.",
    url: "https://marge-landing.vercel.app",
    accent: "var(--color-marge)",
  },
];
