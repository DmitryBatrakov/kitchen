"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Section } from "../ui/Section";

const POINTS = ["challenges", "cnc", "quality"] as const;

// Процесс работы — нумерованный список шагов + изображение сбоку
// (как секция «ייצור אישי» в примере).
export function VideoSection() {
  const t = useTranslations("video");

  return (
    <Section className="border-b border-line/60">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Текст + шаги */}
        <div>
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-primary sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <ul className="mt-10 divide-y divide-line">
            {POINTS.map((key, i) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-5 py-6 first:pt-0"
              >
                <span className="font-serif text-lg leading-none text-accent">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-muted">
                  {t(`points.${key}`)}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Медиа. TODO(assets): craftsman.png — референс; заменить на своё фото/видео. */}
        <div className="group relative order-first flex min-h-80 items-center justify-center overflow-hidden lg:order-none">
          <Image
            src="/images/craftsman.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-ink/40" />
          <span className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
          <button
            type="button"
            aria-label="play"
            className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/60 text-accent backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-ink"
          >
            <Play size={26} className="ms-1" fill="currentColor" />
          </button>
        </div>
      </div>
    </Section>
  );
}
