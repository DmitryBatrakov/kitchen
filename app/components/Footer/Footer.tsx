import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Container } from "../ui/Container";
import { buttonVariants } from "../ui/Button";
import { site, telHref, mailHref } from "../../lib/site";
import { cn } from "../../lib/utils";

export const Footer = () => {
  const t = useTranslations("footer");
  const tc = useTranslations("contact");

  return (
    <footer className="bg-primary text-bg">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {/* Бренд */}
        <div>
          <div className="text-2xl font-bold">
            נגר<span className="text-accent">.il</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-bg/70">{tc("languages")}</p>
        </div>

        {/* Контакты */}
        <div className="space-y-3 text-sm">
          <a href={telHref} className="flex items-center gap-3 hover:text-accent">
            <Phone size={18} />
            <span dir="ltr">{site.phoneDisplay}</span>
          </a>
          <a href={mailHref} className="flex items-center gap-3 hover:text-accent">
            <Mail size={18} />
            <span>{site.email}</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span>{site.address}</span>
          </div>
        </div>

        {/* Действия + соцсети */}
        <div className="flex flex-col items-start gap-5">
          <a
            href={telHref}
            className={cn(buttonVariants({ variant: "primary", size: "md" }))}
          >
            <Phone size={18} />
            {tc("callButton")}
          </a>
          <div>
            <div className="mb-2 text-sm text-bg/70">{t("followUs")}</div>
            <div className="flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-bg/30 p-2 hover:border-accent hover:text-accent"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-bg/30 p-2 hover:border-accent hover:text-accent"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-bg/15 py-5 text-center text-xs text-bg/60">
        © 2026 נגר.il — {t("rights")}
      </div>
    </footer>
  );
};
