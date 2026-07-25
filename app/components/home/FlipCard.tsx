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
          "relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Лицо: заголовок */}
        <div className="absolute inset-0 flex items-center justify-center border border-line bg-bg p-6 text-center [backface-visibility:hidden]">
          <span className="font-serif text-2xl font-medium text-primary">
            {title}
          </span>
        </div>

        {/* Оборот: описание */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-base leading-relaxed text-bg/85">{text}</span>
        </div>
      </div>
    </button>
  );
}
