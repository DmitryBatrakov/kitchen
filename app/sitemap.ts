import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";
import { site } from "./lib/site";

const PATHS = ["", "/gallery", "/materials", "/contact"];

// Карта сайта: каждая страница × каждая локаль, с языковыми альтернативами.
export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${site.url}/${l}${path}`])
        ),
      },
    }))
  );
}
