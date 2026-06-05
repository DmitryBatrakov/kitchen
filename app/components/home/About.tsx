import { useTranslations } from "next-intl";
import { Section } from "../ui/Section";
import { PhotoCarousel } from "../ui/PhotoCarousel";

const ABOUT_SLIDES = [
  "from-[#3e362e] to-[#6b5d4b]",
  "from-[#5a4a3a] to-[#2a241d]",
  "from-[#4a4038] to-[#7a6a55]",
];

export function About() {
  const t = useTranslations("about");

  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Текст */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary/80">
            {t("text")}
          </p>
        </div>

        {/* Карусель фото */}
        <PhotoCarousel slides={ABOUT_SLIDES} />
      </div>
    </Section>
  );
}
