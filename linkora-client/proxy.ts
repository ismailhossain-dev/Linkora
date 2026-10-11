import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken"
const AUTH_ROUTES = ["/login", "/register"];

//proxy main kaj holo 
//1.user jodi login korar por login page e jete chai tahole jete parbe na
//2.user jei role sei role dashboard e jaite parbe 
export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  //step-1 for take token
  //   const cokkieStore = await cookies()
  //   const accessToken = cokkieStore.get("accessToken")?.value;

  //step-2 for take token
  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = accessToken ? jwt.decode(accessToken) as JwtPayload : null;
  //console.log("decoded", decodedToken)

  let userRole = null;

  if(decodedToken){
    userRole = decodedToken.role
  }

  //user is logged in and trying to access login or register page , redirect to dashboard or root home page

  if(accessToken && AUTH_ROUTES.includes(pathName)){
    if(userRole=== "USER"){
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }else if (userRole==="ADMIN"){
      return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }else if (userRole==="AUTHOR"){
        return NextResponse.redirect(new URL("/author-dashboard", request.url))
    }else{
        return NextResponse.redirect(new URL("/", request.url))
    }
  }


 return NextResponse.next()
}

export const config = {
  // matcher: [
  //   // '/dashboard/:path*',
  //   // '/admin-dashboard/:path*'
  //   "/((?!api|_next/static/favicon.icon]_next/image/.*\\.png$).*)",
  // ],
};
