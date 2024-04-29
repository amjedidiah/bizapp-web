import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/agent/chat") {
    const url = request.nextUrl.clone();
    url.pathname = "/agent/chat/customers";
    return NextResponse.redirect(url);
  }

  if (pathname === "/agent/settings") {
    const url = request.nextUrl.clone();
    url.pathname = "/agent/settings/account";
    return NextResponse.redirect(url);
  }

  if (pathname === "/agent/settings/security") {
    const url = request.nextUrl.clone();
    url.pathname = "/agent/settings/security/email-preference";
    return NextResponse.redirect(url);
  }

  if (pathname === "/supervisor/messages") {
    const url = request.nextUrl.clone();
    url.pathname = "/supervisor/messages/customers";
    return NextResponse.redirect(url);
  }

  if (pathname === "/supervisor/settings") {
    const url = request.nextUrl.clone();
    url.pathname = "/supervisor/settings/account";
    return NextResponse.redirect(url);
  }

  if (pathname === "/supervisor/settings/security") {
    const url = request.nextUrl.clone();
    url.pathname = "/supervisor/settings/security/email-preference";
    return NextResponse.redirect(url);
  }
}
