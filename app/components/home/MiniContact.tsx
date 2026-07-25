"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Section } from "../ui/Section";
import { buttonVariants } from "../ui/Button";
import { site, mailHref } from "../../lib/site";
import { cn } from "../../lib/utils";

// Секция «индивидуальный заказ»: слева форма, справа заголовок + контакты
// (как секция «הזמנה אישית» в примере).
export function MiniContact() {
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
    <Section id="contact-mini">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Заголовок + контакты */}
        <div>
          <span className="eyebrow">{t("cta")}</span>
          <h2 className="mt-5 font-serif text-3xl font-medium text-primary sm:text-4xl lg:text-5xl">
            {t("commissionTitle")}
          </h2>
          <p className="mt-5 max-w-md text-muted">{t("commissionSubtitle")}</p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 text-primary hover:text-accent"
              >
                <Phone size={16} className="text-accent" />
                <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={mailHref}
                className="flex items-center gap-3 text-primary hover:text-accent"
              >
                <Mail size={16} className="text-accent" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-primary">
              <MapPin size={16} className="text-accent" />
              {site.address}
            </li>
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="border border-line p-3 text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="border border-line p-3 text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Форма */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
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
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-2 self-start")}
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
    </Section>
  );
}
