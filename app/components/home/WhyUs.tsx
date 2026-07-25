import { useTranslations } from "next-intl";
import { Scissors, Puzzle, Ruler, Gem, Clock, Heart } from "lucide-react";
import { Section } from "../ui/Section";

const CARDS = [
  { key: "tailoring", Icon: Scissors },
  { key: "solutions", Icon: Puzzle },
  { key: "precision", Icon: Ruler },
  { key: "quality", Icon: Gem },
  { key: "timing", Icon: Clock },
  { key: "service", Icon: Heart },
] as const;

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <Section className="border-b border-line/60 text-center">
      <span className="eyebrow eyebrow--center">{t("eyebrow")}</span>
      <h2 className="mx-auto mt-5 font-serif text-3xl font-medium text-primary sm:text-4xl lg:text-5xl">
        {t("title")}
      </h2>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ key, Icon }) => (
          <div
            key={key}
            className="group flex flex-col items-center gap-4 border border-line bg-surface p-10 text-center transition-colors duration-500 hover:border-accent/50"
          >
            <span className="text-accent">
              <Icon size={30} strokeWidth={1.3} />
            </span>
            <h3 className="font-serif text-xl font-medium text-primary sm:text-2xl">
              {t(`cards.${key}.title`)}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {t(`cards.${key}.text`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
