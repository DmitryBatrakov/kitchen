import { use } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MapPin, Languages, Navigation } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Container } from "../../components/ui/Container";
import { buttonVariants } from "../../components/ui/Button";
import { ContactForm } from "../../components/contact/ContactForm";
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
    <div className="py-16 sm:py-24">
      <Container>
        <div className="mb-16 text-center">
          <span className="eyebrow">{t("cta")}</span>
          <h1 className="mt-5 font-serif text-4xl font-medium text-primary sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-primary/65">{t("subtitle")}</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Форма заявки */}
          <ContactForm />

          {/* Фото в арке + контактные данные */}
          <div className="flex flex-col items-center">
            {/* TODO(assets): референс-снимок; заменить на фото мастерской/команды */}
            <div className="relative aspect-3/4 w-full max-w-sm overflow-hidden rounded-t-full border border-line">
              <Image
                src="/images/craftsman.png"
                alt=""
                fill
                sizes="384px"
                className="object-cover"
              />
            </div>

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
                className="border border-line p-3 text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="border border-line p-3 text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <FaFacebookF size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Карта + действия */}
        <div className="mt-12 flex flex-col gap-6 lg:mt-20">
          <div className="overflow-hidden border border-line">
            <iframe
              title="map"
              src={site.mapEmbed}
              className="h-80 w-full lg:h-96"
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
      </Container>
    </div>
  );
}
