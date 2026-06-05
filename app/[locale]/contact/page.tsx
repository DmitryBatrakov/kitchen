import { use } from "react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MapPin, Languages, Navigation } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Container } from "../../components/ui/Container";
import { buttonVariants } from "../../components/ui/Button";
import { site, telHref, mailHref } from "../../lib/site";
import { cn } from "../../lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("subtitle") };
}

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("contact");

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-primary/70">{t("subtitle")}</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Фото в арке + контактные данные */}
          <div className="flex flex-col items-center">
            {/* TODO(assets): фото мастерской/команды в арке */}
            <div className="aspect-[3/4] w-full max-w-sm rounded-t-full rounded-b-3xl bg-linear-to-b from-[#6b5d4b] to-[#2a241d]" />

            <ul className="mt-8 w-full max-w-sm space-y-4 text-primary">
              <li className="flex items-center gap-3">
                <MapPin className="text-accent" size={20} />
                <span>{site.address}</span>
              </li>
              <li>
                <a href={telHref} className="flex items-center gap-3 hover:text-accent">
                  <Phone className="text-accent" size={20} />
                  <span dir="ltr">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={mailHref} className="flex items-center gap-3 hover:text-accent">
                  <Mail className="text-accent" size={20} />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Languages className="text-accent" size={20} />
                <span>{t("languages")}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-primary/20 p-3 text-primary hover:border-accent hover:text-accent"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-primary/20 p-3 text-primary hover:border-accent hover:text-accent"
              >
                <FaFacebookF size={22} />
              </a>
            </div>
          </div>

          {/* Карта + действия */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-primary/10">
              <iframe
                title="map"
                src={site.mapEmbed}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.waze}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "flex-1"
                )}
              >
                <Navigation size={20} />
                {t("wazeButton")}
              </a>
              <a
                href={telHref}
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "flex-1"
                )}
              >
                <Phone size={20} />
                {t("callButton")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
