"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

// Переиспользуемая карусель фото. Пока показывает плейсхолдеры-градиенты.
// TODO(assets): принимать массив реальных изображений и рендерить next/image.
export function PhotoCarousel({
  slides,
  className,
}: {
  slides: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl",
        className
      )}
    >
      {slides.map((grad, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-linear-to-br text-white/40 transition-opacity duration-700",
            grad,
            i === index ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-sm">photo {i + 1}</span>
        </div>
      ))}

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="previous"
        className="absolute start-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-primary shadow transition hover:bg-white"
      >
        <ChevronLeft className="rtl:rotate-180" size={22} />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="next"
        className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-primary shadow transition hover:bg-white"
      >
        <ChevronRight className="rtl:rotate-180" size={22} />
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`photo ${i + 1}`}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              i === index ? "bg-accent" : "bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
