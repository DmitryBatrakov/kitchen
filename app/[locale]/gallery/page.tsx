import { use } from "react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "../../components/ui/Section";
import { GalleryGrid } from "../../components/gallery/GalleryGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery" });
  return { title: t("title"), description: t("subtitle") };
}

export default function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("gallery");

  return (
    <Section>
      <div className="mb-14 text-center">
        <span className="eyebrow">{t("eyebrow")}</span>
        <h1 className="mt-5 font-serif text-4xl font-medium text-primary sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-primary/65">{t("subtitle")}</p>
      </div>
      <GalleryGrid />
    </Section>
  );
}
