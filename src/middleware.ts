import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const privatePages = new Set(['/favorite']);
const authPages    = new Set(['/login', '/register']) // => if i have auth pages but iam not  
 
export default async function middleware(req : NextRequest){
const token = await getToken({req})

 if(privatePages.has(req.nextUrl.pathname)) {
    if(token) return NextResponse.next();

    const redirectUrl = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl)
 }  

 if(authPages.has(req.nextUrl.pathname)){
    if(token) {
        const redirectUrl = new URL('/', req.nextUrl.origin);
        return NextResponse.redirect(redirectUrl)
    }
    else{
        NextResponse.next();
    }
 }

 return NextResponse.next();
}


export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, sitemap.xml, robots.txt (metadata files)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
  }