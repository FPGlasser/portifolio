import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { clerkMiddleware } from "@clerk/nextjs/server";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  // Executa o middleware de internacionalização primeiro
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  // Em seguida, executa o middleware do Clerk
  return clerkMiddleware({
    signInUrl: "/signin",
  });
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
