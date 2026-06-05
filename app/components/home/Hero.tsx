"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "../../../i18n/navigation";
import { Container } from "../ui/Container";
import { buttonVariants } from "../ui/Button";
import { cn } from "../../lib/utils";

// TODO(assets): заменить градиенты-плейсхолдеры на реальные фото кухонь.
const SLIDES = [
  "from-[#3e362e] to-[#6b5d4b]",
  "from-[#5a4a3a] to-[#2a241d]",
  "from-[#4a4038] to-[#7a6a55]",
  "from-[#2d2722] to-[#574b3c]",
];

const AUTOPLAY_MS = 5000;

export function Hero() {
  const t = useTranslations("hero");
  const [index, setIndex] = useState(0);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    // Уважаем системную настройку «уменьшить движение» — не автопрокручиваем.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      {/* Слайды */}
      {SLIDES.map((grad, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 bg-linear-to-br transition-opacity duration-1000",
            grad,
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {/* Затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Контент */}
      <Container className="relative flex h-full flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
          {t("headline")}
        </h1>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "primary", size: "lg" }), "text-xl")}
        >
          {t("cta")}
        </Link>
      </Container>

      {/* Стрелки */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="previous slide"
        className="absolute start-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
      >
        <ChevronLeft className="rtl:rotate-180" size={28} />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="next slide"
        className="absolute end-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
      >
        <ChevronRight className="rtl:rotate-180" size={28} />
      </button>

      {/* Точки */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`slide ${i + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "w-8 bg-accent" : "w-2.5 bg-white/60 hover:bg-white"
            )}
          />
        ))}
      </div>
    </section>
  );
}
