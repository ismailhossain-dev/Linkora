import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

//proxy main work is
//1.after the user login user don't go login register page
//2.role based admin dashboard & handle public route and Protected route
//3.we are define only public route because we are use regular expression 
const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/news", "/login", "/register"];
export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  //step-1 for take token
  //   const cokkieStore = await cookies()
  //   const accessToken = cokkieStore.get("accessToken")?.value;

  //step-2 for take token
  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = accessToken
    ? (jwt.decode(accessToken) as JwtPayload)
    : null;
  //console.log("decoded", decodedToken)

  let userRole = null;

  if (decodedToken) {
    userRole = decodedToken.role;
  }

  //user is logged in and trying to access login or register page , redirect to dashboard or root home page

  //includes mane holo public er sathe sem to sem match korte hobe
  if (accessToken && AUTH_ROUTES.includes(pathName)) {
    if (userRole === "USER") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    } else if (userRole === "AUTHOR") {
      return NextResponse.redirect(new URL("/author-dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  //check user jei route e jete chaitese seta ki public route naki
  const isPublic = PUBLIC_ROUTES.some(
    (route) => pathName === route || pathName.startsWith(route + "/"),
  );

  //user jodi public route chara Protected route e jete chai tahole take login page patai divo
  if (!accessToken && !isPublic) {
   return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher:[
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
