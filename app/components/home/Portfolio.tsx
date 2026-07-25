"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "../../../i18n/navigation";
import { Section } from "../ui/Section";
import { buttonVariants } from "../ui/Button";
import { cn } from "../../lib/utils";

// TODO(assets): временные референс-снимки; заменить на фото проектов студии.
const SLIDES = [
  { key: "one", img: "/images/kitchen_calacatta.png" },
  { key: "two", img: "/images/kitchen_patagonia.png" },
  { key: "three", img: "/images/kitchen_blue_roma.png" },
  { key: "four", img: "/images/kitchen_emerald.png" },
] as const;

// Карусель портфолио — большое изображение с подписью и круглыми стрелками
// (как секция «יצירות מופת למטבח» в примере).
export function Portfolio() {
  const t = useTranslations("portfolio");
  const [index, setIndex] = useState(0);
  const go = (dir: number) =>
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);

  return (
    <Section className="border-b border-line/60 text-center">
      <span className="eyebrow eyebrow--center">{t("eyebrow")}</span>
      <h2 className="mx-auto mt-5 font-serif text-3xl font-medium text-primary sm:text-4xl lg:text-5xl">
        {t("title")}
      </h2>

      {/* Изображение с подписью */}
      <div className="relative mt-12 aspect-video w-full overflow-hidden">
        {SLIDES.map((s, i) => (
          <Image
            key={s.key}
            src={s.img}
            alt=""
            fill
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-1000",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-start sm:p-10">
          <span className="font-serif text-xl text-primary sm:text-2xl">
            {t(`items.${SLIDES[index].key}`)}
          </span>
        </div>
      </div>

      {/* Стрелки */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="next"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-primary transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowRight className="rtl:rotate-180" size={20} />
        </button>
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="previous"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-primary transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowLeft className="rtl:rotate-180" size={20} />
        </button>
      </div>

      <Link
        href="/gallery"
        className={cn(buttonVariants({ variant: "light", size: "md" }), "mt-10")}
      >
        {t("cta")}
      </Link>
    </Section>
  );
}
