"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";

// Переворачивающаяся карточка: при наведении (десктоп) и по тапу (мобайл)
// лицевая сторона с заголовком сменяется описанием.
export function FlipCard({ title, text }: { title: string; text: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      className="group h-56 w-full [perspective:1200px]"
    >
      <div
        className={cn(
          "relative h-full w-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Лицо: заголовок */}
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-primary p-6 text-center [backface-visibility:hidden]">
          <span className="text-2xl font-bold text-bg">{title}</span>
        </div>

        {/* Оборот: описание */}
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-accent p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-base font-medium leading-relaxed text-white">
            {text}
          </span>
        </div>
      </div>
    </button>
  );
}
