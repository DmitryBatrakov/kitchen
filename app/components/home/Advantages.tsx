import { useTranslations } from "next-intl";
import {
  Users,
  Hammer,
  ShieldCheck,
  Heart,
  Ruler,
  HandCoins,
  Truck,
} from "lucide-react";
import { Section } from "../ui/Section";

const ITEMS = [
  { key: "clients", Icon: Users },
  { key: "custom", Icon: Hammer },
  { key: "materials", Icon: ShieldCheck },
  { key: "personal", Icon: Heart },
  { key: "precision", Icon: Ruler },
  { key: "price", Icon: HandCoins },
  { key: "delivery", Icon: Truck },
] as const;

export function Advantages() {
  const t = useTranslations("advantages");

  return (
    <Section className="border-b border-line/60">
      <div className="mb-14 text-center">
        <span className="eyebrow eyebrow--center">{t("eyebrow")}</span>
        <h2 className="mt-5 font-serif text-3xl font-medium text-primary sm:text-4xl lg:text-[2.75rem]">
          {t("title")}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
        {ITEMS.map(({ key, Icon }) => (
          <div
            key={key}
            className="group flex flex-col items-center gap-4 bg-bg p-8 text-center transition-colors duration-300 hover:bg-surface"
          >
            <span className="text-accent">
              <Icon size={34} strokeWidth={1.3} />
            </span>
            <span className="text-sm leading-snug text-primary/85 sm:text-base">
              {t(`items.${key}`)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
