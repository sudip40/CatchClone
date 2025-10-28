// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // If user is trying to access `/`
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/everyday", req.url));
  }
  
  return NextResponse.next();
}

// Apply middleware only to the paths you want
export const config = {
  matcher: ["/"], // runs only for the homepage
};
