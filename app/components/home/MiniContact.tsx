import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Section } from "../ui/Section";
import { buttonVariants } from "../ui/Button";
import { site, telHref, mailHref } from "../../lib/site";
import { cn } from "../../lib/utils";

// Компактный блок контактов в конце главной страницы.
export function MiniContact() {
  const t = useTranslations("contact");

  return (
    <Section id="contact-mini" className="bg-bg">
      <div className="rounded-3xl bg-primary px-6 py-12 text-bg sm:px-12">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">{t("title")}</h2>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-8">
          <a
            href={telHref}
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            <Phone size={20} />
            <span dir="ltr">{site.phoneDisplay}</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a href={mailHref} className="flex items-center gap-2 hover:text-accent">
              <Mail size={18} />
              {site.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {site.address}
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-bg/30 p-3 hover:border-accent hover:text-accent"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-bg/30 p-3 hover:border-accent hover:text-accent"
            >
              <FaFacebookF size={22} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
