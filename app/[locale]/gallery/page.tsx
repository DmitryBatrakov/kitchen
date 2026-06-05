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
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">{t("title")}</h1>
        <p className="mt-3 text-lg text-primary/70">{t("subtitle")}</p>
      </div>
      <GalleryGrid />
    </Section>
  );
}
