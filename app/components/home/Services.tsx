import { useTranslations } from "next-intl";
import { RefreshCw, ChefHat, Armchair } from "lucide-react";
import { Section } from "../ui/Section";

const SERVICES = [
  { key: "frontReplacement", Icon: RefreshCw },
  { key: "newKitchen", Icon: ChefHat },
  { key: "customFurniture", Icon: Armchair },
] as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <Section className="bg-primary/5">
      <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
        {t("title")}
      </h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {SERVICES.map(({ key, Icon }) => (
          <div
            key={key}
            className="flex flex-col items-center gap-4 rounded-2xl bg-bg p-8 text-center shadow-sm transition hover:shadow-md"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Icon size={32} />
            </span>
            <h3 className="text-xl font-semibold text-primary">
              {t(`items.${key}`)}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
