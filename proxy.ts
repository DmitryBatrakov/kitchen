import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// В Next.js 16 middleware называется proxy. next-intl всё ещё отдаёт
// обработчик через createMiddleware — он отвечает за определение локали,
// редирект с "/" на локаль по умолчанию и проставление префикса.
export default createMiddleware(routing);

export const config = {
  // Прогоняем proxy по всем путям, кроме статики, api и внутренних файлов Next.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
