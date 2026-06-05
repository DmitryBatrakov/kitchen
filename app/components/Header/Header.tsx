"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "../../../i18n/navigation";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Container } from "../ui/Container";
import { cn } from "../../lib/utils";

const navItems = [
  { key: "home", href: "/" },
  { key: "gallery", href: "/gallery" },
  { key: "materials", href: "/materials" },
  { key: "contact", href: "/contact" },
] as const;

export const Header = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        {/* Логотип (плейсхолдер) */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary lg:text-2xl"
          onClick={() => setIsMobileOpen(false)}
        >
          נגר<span className="text-accent">.il</span>
        </Link>

        {/* Десктоп-навигация */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-accent",
                  active ? "text-accent" : "text-primary"
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
        </div>

        {/* Бургер (мобайл) */}
        <button
          type="button"
          className="lg:hidden"
          aria-label="menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* Мобильное меню */}
      {isMobileOpen && (
        <div className="border-t border-primary/10 bg-bg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium text-primary hover:bg-primary/5"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="px-2 pt-3">
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
