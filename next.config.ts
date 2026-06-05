import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Плагин подключает i18n/request.ts к серверным компонентам.
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
