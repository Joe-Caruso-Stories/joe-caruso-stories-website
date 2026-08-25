import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (host?.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice("www.".length);
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
