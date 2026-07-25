import { use } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Layers, Paintbrush, Grid3x3, Cog } from "lucide-react";
import { Container } from "../../components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "materials" });
  return { title: t("title"), description: t("intro") };
}

const FORMICA_BRANDS = [
  "mattplus",
  "makor",
  "domicile",
  "birman",
  "formex",
  "blum",
] as const;

// Бренды фурнитуры для строки логотипов. TODO(assets): реальные логотипы.
const HARDWARE_BRANDS = ["Blum", "Hettich", "Domicile"];

export default function MaterialsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("materials");

  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-4xl">
        {/* Заголовок + интро */}
        <span className="eyebrow">{t("eyebrow")}</span>
        <h1 className="mt-5 font-serif text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <div className="mt-6 h-px w-16 bg-accent" />
        <p className="mt-6 text-lg leading-relaxed text-primary/75">
          {t("intro")}
        </p>

        {/* Корпус */}
        <section className="mt-14">
          <h2 className="flex items-center gap-3 font-serif text-2xl font-medium text-primary sm:text-3xl">
            <Layers className="text-accent" size={26} />
            {t("base.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary/80">
            {t("base.text")}
          </p>
          {/* TODO(assets): референс-снимок; заменить на фото корпуса/фанеры */}
          <div className="relative mt-8 aspect-video overflow-hidden border border-line">
            <Image
              src="/images/kitchen_nero.png"
              alt=""
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Фасады */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-medium text-primary sm:text-3xl">
            {t("fronts.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary/80">
            {t("fronts.intro")}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="border border-line bg-surface p-8">
              <h3 className="flex items-center gap-2 font-serif text-xl font-medium text-primary">
                <Paintbrush className="text-accent" size={22} />
                {t("fronts.paint.title")}
              </h3>
              <p className="mt-3 leading-relaxed text-primary/80">
                {t("fronts.paint.text")}
              </p>
            </div>
            <div className="border border-line bg-surface p-8">
              <h3 className="flex items-center gap-2 font-serif text-xl font-medium text-primary">
                <Grid3x3 className="text-accent" size={22} />
                {t("fronts.formica.title")}
              </h3>
              <p className="mt-3 leading-relaxed text-primary/80">
                {t("fronts.formica.text")}
              </p>
            </div>
          </div>
        </section>

        {/* Бренды формики */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-medium text-primary sm:text-3xl">
            {t("formica.title")}
          </h2>
          <div className="mt-6 space-y-4">
            {FORMICA_BRANDS.map((brand) => (
              <div
                key={brand}
                className="flex flex-col gap-4 border border-line p-6 sm:flex-row sm:items-start sm:gap-6"
              >
                {/* Плейсхолдер логотипа */}
                <div className="flex h-16 w-32 shrink-0 items-center justify-center border border-line bg-surface text-sm font-semibold text-primary/60">
                  {t(`formica.brands.${brand}.name`)}
                </div>
                <p className="leading-relaxed text-primary/80">
                  {t(`formica.brands.${brand}.text`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Фурнитура */}
        <section className="mt-14">
          <h2 className="flex items-center gap-3 font-serif text-2xl font-medium text-primary sm:text-3xl">
            <Cog className="text-accent" size={26} />
            {t("hardware.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary/80">
            {t("hardware.text")}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {HARDWARE_BRANDS.map((name) => (
              <div
                key={name}
                className="flex h-16 w-36 items-center justify-center border border-line bg-surface text-lg font-semibold text-primary/60"
              >
                {name}
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
