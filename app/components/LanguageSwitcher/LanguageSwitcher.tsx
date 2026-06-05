"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "../../../i18n/navigation";
import { routing } from "../../../i18n/routing";
import { cn } from "../../lib/utils";

const labels: Record<string, string> = {
  he: "עב",
  ru: "RU",
};

// Компактный переключатель локали с сохранением текущего маршрута.
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function switchTo(next: string) {
    if (next === locale) return;
    router.replace(
      // @ts-expect-error — pathname типизируется по маршрутам, динамика безопасна
      { pathname, params },
      { locale: next }
    );
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          aria-current={loc === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 text-sm font-semibold transition-colors",
            loc === locale
              ? "bg-primary text-bg"
              : "text-primary/70 hover:text-primary"
          )}
        >
          {labels[loc] ?? loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
