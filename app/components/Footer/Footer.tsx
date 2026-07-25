import { useTranslations } from "next-intl";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Container } from "../ui/Container";
import { site, telHref, mailHref } from "../../lib/site";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-line bg-ink">
      <Container className="flex flex-col items-center gap-8 py-16 text-center">
        {/* Бренд */}
        <div className="font-serif text-3xl font-medium tracking-wide text-primary">
          נגר<span className="text-accent">.il</span>
        </div>

        {/* Контакты в строку */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted">
          <a href={telHref} className="transition-colors hover:text-accent">
            <span dir="ltr">{site.phoneDisplay}</span>
          </a>
          <span className="h-3 w-px bg-line" aria-hidden />
          <a href={mailHref} className="transition-colors hover:text-accent">
            {site.email}
          </a>
          <span className="h-3 w-px bg-line" aria-hidden />
          <span>{site.address}</span>
        </div>

        {/* Соцсети */}
        <div className="flex gap-3">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="border border-line p-2.5 text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="border border-line p-2.5 text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <FaFacebookF size={18} />
          </a>
        </div>

        <div className="text-xs tracking-wider text-muted/70">
          © 2026 נגר.il — {t("rights")}
        </div>
      </Container>
    </footer>
  );
};
