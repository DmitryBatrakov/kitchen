"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// TODO(assets): временные референс-снимки; заменить на фото проектов студии.
const PHOTOS = [
  "/images/kitchen_calacatta.png",
  "/images/kitchen_emerald.png",
  "/images/kitchen_nero.png",
  "/images/kitchen_patagonia.png",
  "/images/kitchen_blue_roma.png",
  "/images/calacatta.png",
  "/images/carrara.png",
  "/images/nero_marquina.png",
  "/images/craftsman.png",
];

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (dir: number) =>
      setActive((i) =>
        i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length
      ),
    []
  );

  // Управление с клавиатуры в лайтбоксе.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, move]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {PHOTOS.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-square overflow-hidden border border-line"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/30" />
          </button>
        ))}
      </div>

      {/* Лайтбокс */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <button
            type="button"
            aria-label="close"
            onClick={close}
            className="absolute end-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X size={26} />
          </button>
          <button
            type="button"
            aria-label="previous"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            className="absolute start-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronLeft className="rtl:rotate-180" size={30} />
          </button>
          <div
            className="relative aspect-square w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[active]}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="next"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            className="absolute end-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronRight className="rtl:rotate-180" size={30} />
          </button>
        </div>
      )}
    </>
  );
}
