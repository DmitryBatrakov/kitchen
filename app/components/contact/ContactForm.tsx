"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { buttonVariants } from "../ui/Button";
import { mailHref } from "../../lib/site";
import { cn } from "../../lib/utils";

// Форма заявки «индивидуальный заказ». Раньше жила в секции MiniContact
// внизу главной — теперь единственная форма сайта, на странице /contact.
export function ContactForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `${t("form.name")}: ${data.get("name") ?? ""}`,
      `${t("form.phone")}: ${data.get("phone") ?? ""}`,
      `${t("form.email")}: ${data.get("email") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    // Открываем почтовый клиент с заполненной заявкой.
    window.location.href = `${mailHref}?subject=${encodeURIComponent(
      t("commissionTitle")
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const fieldCls =
    "w-full border-b border-line bg-transparent py-3 text-primary placeholder:text-muted/70 focus:border-accent focus:outline-none transition-colors";

  return (
    <div>
      <span className="eyebrow">{t("cta")}</span>
      <h2 className="mt-5 font-serif text-3xl font-medium text-primary sm:text-4xl">
        {t("commissionTitle")}
      </h2>
      <p className="mt-4 max-w-md text-muted">{t("commissionSubtitle")}</p>

      <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-6">
        <input
          name="name"
          required
          placeholder={t("form.name")}
          className={fieldCls}
        />
        <input
          name="phone"
          type="tel"
          dir="ltr"
          placeholder={t("form.phone")}
          className={cn(fieldCls, "text-start")}
        />
        <input
          name="email"
          type="email"
          dir="ltr"
          placeholder={t("form.email")}
          className={cn(fieldCls, "text-start")}
        />
        <textarea
          name="message"
          rows={4}
          placeholder={t("form.message")}
          className={cn(fieldCls, "resize-none")}
        />
        <button
          type="submit"
          className={cn(
            buttonVariants({ variant: "primary", size: "lg" }),
            "mt-2 self-start"
          )}
        >
          {t("form.send")}
        </button>
        {sent && (
          <p className="text-sm text-accent" role="status">
            ✓ {t("subtitle")}
          </p>
        )}
      </form>
    </div>
  );
}
