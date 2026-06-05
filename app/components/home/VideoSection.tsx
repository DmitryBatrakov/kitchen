"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Play, Sparkles, Cpu, Heart } from "lucide-react";
import { Section } from "../ui/Section";

const POINTS = [
  { key: "challenges", Icon: Sparkles },
  { key: "cnc", Icon: Cpu },
  { key: "quality", Icon: Heart },
] as const;

export function VideoSection() {
  const t = useTranslations("video");

  return (
    <Section className="bg-primary text-bg">
      <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
        {t("title")}
      </h2>

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Видео-плейсхолдер. TODO(assets): вставить реальное видео/постер. */}
        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#5a4a3a] to-[#2a241d]">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-lg">
            <Play size={32} className="ms-1" fill="currentColor" />
          </span>
        </div>

        {/* Пункты, всплывающие по очереди при скролле */}
        <ul className="space-y-8">
          {POINTS.map(({ key, Icon }, i) => (
            <motion.li
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex gap-4"
            >
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Icon size={20} />
              </span>
              <p className="text-lg leading-relaxed text-bg/90">{t(`points.${key}`)}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
