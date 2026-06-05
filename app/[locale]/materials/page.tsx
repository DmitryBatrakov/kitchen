import { use } from "react";
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
    <div className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        {/* Заголовок + интро */}
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-primary/80">
          {t("intro")}
        </p>

        {/* Корпус */}
        <section className="mt-14">
          <h2 className="flex items-center gap-3 text-2xl font-semibold text-primary">
            <Layers className="text-accent" size={26} />
            {t("base.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary/80">
            {t("base.text")}
          </p>
          {/* TODO(assets): фото фанеры / корпуса */}
          <div className="mt-6 aspect-[16/9] rounded-2xl bg-linear-to-br from-[#5a4a3a] to-[#2a241d]" />
        </section>

        {/* Фасады */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-primary">
            {t("fronts.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary/80">
            {t("fronts.intro")}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/10 bg-bg p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Paintbrush className="text-accent" size={22} />
                {t("fronts.paint.title")}
              </h3>
              <p className="mt-3 leading-relaxed text-primary/80">
                {t("fronts.paint.text")}
              </p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-bg p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-primary">
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
          <h2 className="text-2xl font-semibold text-primary">
            {t("formica.title")}
          </h2>
          <div className="mt-6 space-y-4">
            {FORMICA_BRANDS.map((brand) => (
              <div
                key={brand}
                className="flex flex-col gap-3 rounded-2xl border border-primary/10 p-5 sm:flex-row sm:items-start sm:gap-5"
              >
                {/* Плейсхолдер логотипа */}
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-sm font-bold text-primary/60">
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
          <h2 className="flex items-center gap-3 text-2xl font-semibold text-primary">
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
                className="flex h-16 w-36 items-center justify-center rounded-lg bg-primary/5 text-lg font-bold text-primary/60"
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
