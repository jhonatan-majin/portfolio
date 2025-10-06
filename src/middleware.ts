import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // Or 'jsonwebtoken'

const protectedRoutes = ['/admin/:path*', '/admin/api/:path*'];

const JWT_SECRET = new TextEncoder().encode(process.env.TOKEN_SECRET);

export async function middleware(request) {
 const token = request.cookies.get('auth_token'); // Assuming JWT is stored in a cookie named 'session-token'
 const { pathname } = request.nextUrl;

 // Define public paths that don't require authentication
 const publicPaths = ['/auth/login', '/auth/register'];

 if (publicPaths.includes(request.nextUrl.pathname)) {
  // If it's a public path, allow access
  return NextResponse.next();
 }

 if (!token) {
  // If no token and not a public path, redirect to login
  return NextResponse.redirect(new URL('/auth/login', request.url));
 }

 // try {
 // Verify the JWT
 if (token && protectedRoutes.includes(pathname)) {
  try {
   await jwtVerify(token, JWT_SECRET);
   return NextResponse.next();
  } catch (error) {
   // If token is invalid or expired, redirect to login
   const response = NextResponse.redirect(new URL('/auth/login', request.url));
   // response.cookies.delete('auth_token'); // Clear invalid token
   return response;
  }
 }

 return NextResponse.next();
}

// Define the routes the middleware should apply to
// export const config = {
//  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Apply to all routes except API routes, static assets, etc.
// };

export const config = {
 matcher: ['/admin/:path*', '/api/admin/:path*'], // Apply middleware to specific routes
};