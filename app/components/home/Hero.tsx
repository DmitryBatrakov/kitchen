import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import { Container } from "../ui/Container";
import { buttonVariants } from "../ui/Button";
import { cn } from "../../lib/utils";

// TODO(assets): hero_bg.png — временный референс-снимок; заменить на
// собственную лицензированную фотографию кухни студии.
export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative -mt-18 flex h-svh min-h-150 w-full items-center justify-center overflow-hidden bg-ink lg:-mt-20">
      {/* Фон — фотография */}
      <Image
        src="/images/hero_bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Виньетка для читаемости и глубины */}
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/60" />

      {/* Контент */}
      <Container className="relative flex flex-col items-center text-center">
        <span className="eyebrow eyebrow--center">{t("eyebrow")}</span>

        <h1 className="mt-8 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-primary drop-shadow-lg sm:text-7xl lg:text-8xl">
          {t("headline")}
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-primary/80 sm:text-lg">
          {t("subtitle")}
        </p>

        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "light", size: "lg" }), "mt-12")}
        >
          {t("cta")}
        </Link>
      </Container>

      {/* Скролл-подсказка */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-primary/60">
        <span className="text-[0.65rem] font-medium uppercase tracking-wider2">
          {t("scroll")}
        </span>
        <span className="h-8 w-px animate-pulse bg-primary/40" aria-hidden />
      </div>
    </section>
  );
}
