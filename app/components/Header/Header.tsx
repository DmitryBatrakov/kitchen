"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "../../../i18n/navigation";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Container } from "../ui/Container";
import { cn } from "../../lib/utils";

// Ссылки, обрамляющие бренд по центру (без «צור קשר» — он вынесен в CTA-пилюлю).
const startNav = [
  { key: "home", href: "/" },
  { key: "gallery", href: "/gallery" },
] as const;
const endNav = [{ key: "materials", href: "/materials" }] as const;

const linkCls = (active: boolean) =>
  cn(
    "group relative text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-accent",
    active ? "text-accent" : "text-primary/85"
  );

export const Header = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || isMobileOpen
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="relative flex h-18 items-center justify-between lg:h-20">
        {/* Бренд — по центру */}
        <Link
          href="/"
          onClick={() => setIsMobileOpen(false)}
          dir="ltr"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-2xl font-medium tracking-[0.15em] text-primary lg:text-3xl"
        >
          נגר<span className="text-accent">.il</span>
        </Link>

        {/* Начальный кластер: язык + ссылки */}
        <div className="hidden items-center gap-8 lg:flex">
          <LanguageSwitcher />
          <span className="h-4 w-px bg-line" aria-hidden />
          {startNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.key} href={item.href} className={linkCls(active)}>
                {t(item.key)}
                <span
                  className={cn(
                    "absolute -bottom-1.5 start-0 h-px bg-accent transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Конечный кластер: ссылки + CTA-пилюля */}
        <div className="hidden items-center gap-8 lg:flex">
          {endNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.key} href={item.href} className={linkCls(active)}>
                {t(item.key)}
                <span
                  className={cn(
                    "absolute -bottom-1.5 start-0 h-px bg-accent transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full border border-primary/30 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-primary transition-colors hover:border-accent hover:text-accent"
          >
            {t("contact")}
          </Link>
        </div>

        {/* Бургер (мобайл) */}
        <button
          type="button"
          className="ms-auto text-primary lg:hidden"
          aria-label="menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* Мобильное меню */}
      {isMobileOpen && (
        <div className="border-t border-line bg-bg lg:hidden">
          <Container className="flex flex-col py-4">
            {[...startNav, ...endNav, { key: "contact", href: "/contact" }].map(
              (item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="border-b border-line/60 px-1 py-4 text-sm font-medium uppercase tracking-[0.16em] text-primary/90 last:border-0 hover:text-accent"
                >
                  {t(item.key)}
                </Link>
              )
            )}
            <div className="px-1 pt-5">
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
