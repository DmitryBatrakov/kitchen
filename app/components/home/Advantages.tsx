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
    <Section>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {ITEMS.map(({ key, Icon }) => (
          <div
            key={key}
            className="flex flex-col items-center gap-3 rounded-2xl border border-primary/10 p-6 text-center"
          >
            <span className="text-accent">
              <Icon size={36} strokeWidth={1.5} />
            </span>
            <span className="text-sm font-medium text-primary sm:text-base">
              {t(`items.${key}`)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
