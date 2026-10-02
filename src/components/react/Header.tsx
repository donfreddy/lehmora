import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { products } from "../../data/products";
import logo from "../../assets/logo-dark.png";

const NAV_LINKS = [{ label: "À propos", href: "/#about" }];

const GOVERNANCE_ITEMS = [
  {
    label: "Vision",
    description: "Notre horizon à 50 ans pour l'économie émergente.",
    href: "/#vision",
  },
  {
    label: "Mission",
    description: "Éditer, mutualiser et pérenniser nos infrastructures SaaS.",
    href: "/#mission",
  },
  {
    label: "Valeurs",
    description: "Les quatre principes d'ingénierie non négociables.",
    href: "/#valeurs",
  },
];

type MenuKey = "governance" | "portfolio" | null;

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [mobileOpen]);

  function toggleMenu(key: MenuKey) {
    setOpenMenu((current) => (current === key ? null : key));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between border-surface-border px-6 md:border-x">
        <a href="/#top" className="flex items-center gap-2.5">
          <img src={logo.src} alt="" className="h-6 w-6 rounded-md" />
          <span className="text-[15px] font-semibold tracking-tight text-text-primary">
            Lehmora Labs
          </span>
        </a>

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("governance")}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
              aria-expanded={openMenu === "governance"}
            >
              Gouvernance
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${openMenu === "governance" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openMenu === "governance" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-solid! border-surface-border bg-surface p-1.5 shadow-xl shadow-black/40"
                >
                  {GOVERNANCE_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenMenu(null)}
                      className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-background"
                    >
                      <span className="block text-sm text-text-primary">{item.label}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-text-muted">
                        {item.description}
                      </span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("portfolio")}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
              aria-expanded={openMenu === "portfolio"}
            >
              Portfolio
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${openMenu === "portfolio" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openMenu === "portfolio" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-1/2 top-full mt-2 w-[26rem] -translate-x-1/2 rounded-xl border border-solid! border-surface-border bg-surface p-1.5 shadow-xl shadow-black/40"
                >
                  {products.map((product) => (
                    <a
                      key={product.slug}
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpenMenu(null)}
                      className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-background"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: product.accent }}
                      />
                      <span className="flex-1">
                        <span className="flex items-center gap-2">
                          <span className="text-sm text-text-primary">{product.name}</span>
                          <span className="rounded border border-solid! border-surface-border px-1.5 py-0.5 font-mono text-[10px] text-text-muted">
                            {product.statusLabel}
                          </span>
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-text-muted">
                          {product.menuDescription}
                        </span>
                      </span>
                      <ArrowUpRight size={14} className="mt-1 shrink-0 text-text-muted" />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:contact@lehmora.com"
            className="hidden rounded-md bg-lehmora px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-lehmora/90 lg:inline-block"
          >
            Nous contacter
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-solid! border-surface-border text-text-secondary lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileOpen(false)}
                  className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col overflow-y-auto border-l border-surface-border bg-surface p-6 lg:hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <img src={logo.src} alt="" className="h-6 w-6 rounded-md" />
                      <span className="text-sm font-semibold text-text-primary">Lehmora Labs</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-solid! border-surface-border text-text-secondary"
                      aria-label="Fermer le menu"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="mt-8 flex flex-col gap-1">
                    <a
                      href="/#about"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-3 text-[15px] text-text-primary hover:bg-background"
                    >
                      À propos
                    </a>
                    <p className="mt-4 px-3 font-mono text-[11px] uppercase tracking-wider text-text-muted">
                      Gouvernance
                    </p>
                    {GOVERNANCE_ITEMS.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-3 py-3 hover:bg-background"
                      >
                        <span className="block text-[15px] text-text-primary">{item.label}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-text-muted">
                          {item.description}
                        </span>
                      </a>
                    ))}

                    <p className="mt-4 px-3 font-mono text-[11px] uppercase tracking-wider text-text-muted">
                      Portfolio
                    </p>
                    {products.map((product) => (
                      <a
                        key={product.slug}
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-lg px-3 py-3 hover:bg-background"
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: product.accent }}
                          />
                          <span className="text-[15px] text-text-primary">{product.name}</span>
                        </span>
                        <ArrowUpRight size={14} className="text-text-muted" />
                      </a>
                    ))}
                  </div>

                  <a
                    href="mailto:contact@lehmora.com"
                    className="mt-auto rounded-md bg-lehmora px-4 py-3 text-center text-sm font-medium text-white"
                  >
                    Nous contacter
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
