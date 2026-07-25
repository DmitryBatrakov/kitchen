import Image from "next/image";
import { useTranslations } from "next-intl";
import { RefreshCw, ChefHat, Armchair } from "lucide-react";
import { Section } from "../ui/Section";

// TODO(assets): временные референс-снимки; заменить на фото проектов студии.
const SERVICES = [
  { key: "frontReplacement", Icon: RefreshCw, img: "/images/kitchen_nero.png" },
  { key: "newKitchen", Icon: ChefHat, img: "/images/kitchen_calacatta.png" },
  { key: "customFurniture", Icon: Armchair, img: "/images/kitchen_emerald.png" },
] as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <Section className="border-b border-line/60">
      <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="mt-5 font-serif text-3xl font-medium text-primary sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {SERVICES.map(({ key, Icon, img }, i) => (
          <article
            key={key}
            className="group flex flex-col overflow-hidden border border-line bg-surface transition-colors duration-500 hover:border-accent/50"
          >
            {/* Изображение */}
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src={img}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent" />
              <Icon
                className="absolute bottom-5 end-5 text-primary/70 transition-colors group-hover:text-accent"
                size={28}
                strokeWidth={1.3}
              />
            </div>
            {/* Панель с названием */}
            <div className="flex items-baseline gap-4 p-6">
              <span className="font-serif text-lg text-accent">0{i + 1}</span>
              <h3 className="font-serif text-xl font-medium text-primary sm:text-2xl">
                {t(`items.${key}`)}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
