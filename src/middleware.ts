import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login", "/register", "/forgot-password"];
const publicRoutes = [...authRoutes];

export default async function middleware(request: NextRequest) {
  return NextResponse.next();

  const token = await getToken({ req: request });

  if (!publicRoutes.includes(request.nextUrl.pathname)) {
    if (token) return NextResponse.next();

    const redirectUrl = new URL("/login", request.nextUrl.origin);

    redirectUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    console.log("got you");

    return NextResponse.redirect(redirectUrl);
  }

  if (!authRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!token) return NextResponse.next();

  return NextResponse.redirect(new URL("/dashboard", request.nextUrl.origin));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
