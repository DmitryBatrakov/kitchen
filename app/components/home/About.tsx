import { useTranslations } from "next-intl";
import { Section } from "../ui/Section";

// Философия студии — двухколоночный текстовый блок (как секция
// «אלגנטיות נצחית של אבן» в примере): заголовок + абзац на тёмном фоне.
export function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" className="border-b border-line/60">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="mt-6 font-serif text-3xl font-medium leading-[1.15] text-primary sm:text-4xl lg:text-[3rem]">
            {t("title")}
          </h2>
        </div>

        <div className="reveal flex items-end">
          <div>
            <div className="mb-6 h-px w-16 bg-accent" />
            <p className="text-lg leading-relaxed text-muted">{t("text")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
