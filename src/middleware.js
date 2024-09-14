import { NextResponse } from "next/server";
import { PUBLIC_ROUTES, ROOT } from "./utils/midRoute";
export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const { nextUrl } = request;
  const accessToken = request?.cookies.get("accessToken")?.value || "";

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;
  if (!accessToken && !isPublicRoute) {
    return Response.redirect(new URL(LOGIN, nextUrl));
  }

  // Continue processing if it's a public path or if the user has a valid accessToken
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
