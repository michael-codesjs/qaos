import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionCookie =
    request.cookies.get('better-auth.session_token') ||
    request.cookies.get('__better_auth_session_token');

  // If session exists, and we are not already going to the dashboard
  if (sessionCookie) {
    const dashboardUrl = process.env.NEXT_PUBLIC_APP_CLIENT_URL || 'http://localhost:6447';
    return NextResponse.redirect(new URL('/dashboard', dashboardUrl));
  }

  return NextResponse.next();
}

// Only run on specific paths (like home, login, signup, etc.)
export const config = {
  matcher: ['/', '/login', '/signup', '/forgot-password', '/reset-password', '/verify-email'],
};
