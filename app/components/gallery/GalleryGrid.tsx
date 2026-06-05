"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

// TODO(assets): заменить градиенты на реальные фото проектов (next/image).
const GRADIENTS = [
  "from-[#3e362e] to-[#6b5d4b]",
  "from-[#5a4a3a] to-[#2a241d]",
  "from-[#4a4038] to-[#7a6a55]",
  "from-[#2d2722] to-[#574b3c]",
  "from-[#6b5d4b] to-[#3e362e]",
  "from-[#7a6a55] to-[#4a4038]",
  "from-[#2a241d] to-[#5a4a3a]",
  "from-[#574b3c] to-[#2d2722]",
  "from-[#4a4038] to-[#6b5d4b]",
];

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (dir: number) =>
      setActive((i) =>
        i === null ? i : (i + dir + GRADIENTS.length) % GRADIENTS.length
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
        {GRADIENTS.map((grad, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "group relative aspect-square overflow-hidden rounded-xl bg-linear-to-br",
              grad
            )}
          >
            <span className="absolute inset-0 flex items-center justify-center text-sm text-white/40 transition-opacity group-hover:opacity-0">
              photo {i + 1}
            </span>
            <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
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
            className={cn(
              "flex aspect-[4/3] w-full max-w-4xl items-center justify-center rounded-2xl bg-linear-to-br text-white/50",
              GRADIENTS[active]
            )}
            onClick={(e) => e.stopPropagation()}
          >
            photo {active + 1}
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
