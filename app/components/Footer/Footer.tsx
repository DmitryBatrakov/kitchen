import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "../../../i18n/navigation";
import { site, telHref, mailHref } from "../../lib/site";
import { KitchenScene } from "./KitchenScene";

const navItems = [
    { key: "home", href: "/" },
    { key: "gallery", href: "/gallery" },
    { key: "materials", href: "/materials" },
    { key: "contact", href: "/contact" },
] as const;

const barLink =
    "relative inline-block ps-4 text-sm text-primary transition-colors hover:text-accent " +
    "before:absolute before:inset-y-[3px] before:start-0 before:w-[2px] before:bg-accent before:content-['']";

export const Footer = () => {
    const t = useTranslations("footer");
    const tn = useTranslations("nav");

    return (
        <footer className="relative overflow-hidden bg-bg">
            <KitchenScene />

            <div className="relative -mt-[clamp(64px,13vw,150px)] px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14">
                <h2 className="mb-10 max-w-[15ch] font-serif text-4xl font-medium leading-[1.05] text-primary text-balance sm:text-5xl lg:mb-16 lg:text-6xl">
                    {t("headline")}
                </h2>

                <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-8">
                    <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
                        {navItems.map((item) => (
                            <Link key={item.key} href={item.href} className={barLink}>
                                {tn(item.key)}
                            </Link>
                        ))}
                        <a href={telHref} className={barLink}>
                            <span dir="ltr">{site.phoneDisplay}</span>
                        </a>
                        <a href={mailHref} className={barLink}>
                            {site.email}
                        </a>
                    </nav>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-(--color-accent-hover)"
                    >
                        {tn("contact")}
                        <ArrowRight size={15} className="rtl:-scale-x-100" />
                    </Link>
                </div>

                <div className="mt-10 lg:mt-14">
                    <div className="flex items-center gap-3">
                        <svg
                            viewBox="0 0 32 32"
                            className="h-7 w-7"
                            fill="none"
                            stroke="var(--color-accent)"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                        >
                            <path d="M16 29V13" />
                            <path d="M16 17c0-5 3-9 8-10-1 5-3 9-8 10Z" />
                            <path d="M16 21c0-5-3-8-8-9 1 5 3 8 8 9Z" />
                        </svg>
                        <span
                            dir="ltr"
                            className="font-serif text-2xl font-medium tracking-wide text-primary"
                        >
                            נגר<span className="text-accent">.il</span>
                        </span>
                    </div>
                    <div className="mt-3 text-sm text-muted">
                        © 2026 נגר.il — {t("rights")}
                    </div>
                    <div className="text-sm text-muted/70">{t("slogan")}</div>
                </div>

                <div className="mt-8 h-px bg-line lg:mt-11" />

                <div className="mt-5 flex justify-end">
                    <div className="flex gap-5 text-muted">
                        <a
                            href={site.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="transition-colors hover:text-accent"
                        >
                            <FaInstagram size={19} />
                        </a>
                        <a
                            href={site.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="transition-colors hover:text-accent"
                        >
                            <FaFacebookF size={19} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
