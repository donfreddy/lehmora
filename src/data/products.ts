/**
 * Language-neutral facts about each product. Every claim here must be
 * checkable in the product's repository; copy lives in src/i18n.
 */
export type ProductSlug = "famsub" | "tallyno" | "payskool" | "marge";
export type ProductStatus = "staging" | "dev";

export interface Product {
  slug: ProductSlug;
  name: string;
  url: string;
  status: ProductStatus;
  /** Whether the product ever holds user funds. */
  holdsFunds: boolean;
  stack: string[];
}

export const products: Product[] = [
  {
    slug: "famsub",
    name: "Famsub",
    url: "https://famsub.com",
    status: "staging",
    holdsFunds: true,
    stack: ["NestJS", "TypeORM", "Nuxt", "Flutter"],
  },
  {
    slug: "tallyno",
    name: "Tallyno",
    url: "https://tallyno-landing.vercel.app",
    status: "dev",
    holdsFunds: false,
    stack: ["NestJS", "Prisma", "Flutter", "Nuxt"],
  },
  {
    slug: "payskool",
    name: "Payskool",
    url: "https://payskool.vercel.app",
    status: "dev",
    holdsFunds: false,
    stack: ["NestJS", "Next.js"],
  },
  {
    slug: "marge",
    name: "Marge",
    url: "https://marge-landing.vercel.app",
    status: "dev",
    holdsFunds: false,
    stack: ["Flutter", "Drift"],
  },
];

/** What the studio actually shares across products, and who uses it. */
export type Usage = "yes" | "planned" | "no";

export interface SharedAsset {
  key: "infra" | "nui" | "nest";
  name: string;
  usage: Record<ProductSlug, Usage>;
}

export const sharedAssets: SharedAsset[] = [
  {
    key: "infra",
    name: "lehmora-infra",
    // Written, not provisioned yet (lehmora-infra/docs/09-roadmap.md).
    usage: { famsub: "planned", tallyno: "planned", payskool: "planned", marge: "no" },
  },
  {
    key: "nui",
    name: "nui_flutter",
    usage: { famsub: "yes", tallyno: "yes", payskool: "no", marge: "yes" },
  },
  {
    key: "nest",
    name: "NestJS",
    usage: { famsub: "yes", tallyno: "yes", payskool: "yes", marge: "no" },
  },
];

/** Fictional tontine round used in the hero. Built on Tallyno's real rules
 * (Tallyno/tallyno-api/TONTINE.md): the round opens on its due date, the
 * beneficiary does not pay into their own pot, payments are declared then
 * confirmed, and an unpaid share becomes a debt when the round is
 * force-closed after the grace period (J+7 by default). */
export const sampleRound = {
  group: "Tontine des Amis de Bonamoussadi",
  cycle: 3,
  round: 5,
  rounds: 8,
  dueDate: "2026-10-25",
  closedOn: "2026-11-01",
  graceDays: 7,
  share: 25000,
  beneficiary: "Esther K.",
  defaulter: "Hervé B.",
  members: [
    { name: "Aïcha M.", paidOn: "2026-10-25" },
    { name: "Brice N.", paidOn: "2026-10-26" },
    { name: "Carine T.", paidOn: "2026-10-27" },
    { name: "Didier E.", paidOn: "2026-10-29" },
    { name: "Fabrice O.", paidOn: "2026-10-30" },
    { name: "Grâce A.", paidOn: "2026-10-31" },
    { name: "Hervé B.", paidOn: null },
  ],
} as const;
