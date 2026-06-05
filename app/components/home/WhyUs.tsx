import { useTranslations } from "next-intl";
import { Section } from "../ui/Section";
import { FlipCard } from "./FlipCard";

const CARDS = [
  "tailoring",
  "solutions",
  "precision",
  "quality",
  "timing",
  "service",
] as const;

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <Section className="bg-primary/5">
      <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
        {t("title")}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((key) => (
          <FlipCard
            key={key}
            title={t(`cards.${key}.title`)}
            text={t(`cards.${key}.text`)}
          />
        ))}
      </div>
    </Section>
  );
}
