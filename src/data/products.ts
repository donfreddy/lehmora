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
  /** Shown on the site. Set to false to keep a product out of every list. */
  listed: boolean;
  stack: string[];
}

export const products: Product[] = [
  {
    slug: "famsub",
    name: "Famsub",
    url: "https://famsub.com",
    status: "staging",
    holdsFunds: true,
    listed: true,
    stack: ["NestJS", "TypeORM", "Nuxt", "Flutter"],
  },
  {
    slug: "tallyno",
    name: "Tallyno",
    url: "https://tallyno-landing.vercel.app",
    status: "dev",
    holdsFunds: false,
    listed: true,
    stack: ["NestJS", "Prisma", "Flutter", "Nuxt"],
  },
  {
    slug: "payskool",
    name: "Payskool",
    url: "https://payskool.vercel.app",
    status: "dev",
    holdsFunds: false,
    listed: true,
    stack: ["NestJS", "Next.js"],
  },
  {
    slug: "marge",
    name: "Marge",
    url: "https://marge-landing.vercel.app",
    status: "dev",
    holdsFunds: false,
    // Kept out of the site for now (owner decision, Nov 2026).
    listed: false,
    stack: ["Flutter", "Drift"],
  },
];

/**
 * Flagship screenshots. The files in public/screens are SVG placeholders:
 * capture the real screens at 1170 x 2532 (portrait phone), drop them in
 * public/screens and change `src` here (e.g. "/screens/tallyno-round.webp").
 * Set `width` and `height` to the real pixel size of each file: they give the
 * frame its ratio, so a 1080 x 2400 Android capture works too.
 * Captions and alt text live in src/i18n.
 */
export interface Screenshot {
  key: "round" | "debts";
  src: string;
  width: number;
  height: number;
}

export const flagshipScreens: Screenshot[] = [
  { key: "round", src: "/screens/tallyno-round.svg", width: 1170, height: 2532 },
  { key: "debts", src: "/screens/tallyno-debts.svg", width: 1170, height: 2532 },
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

/** Products shown on the site. */
export const listedProducts = products.filter((product) => product.listed);
