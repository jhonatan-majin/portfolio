import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.TOKEN_SECRET);

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // 1. Obtener el valor del token de forma segura
  const tokenObj = request.cookies.get('auth_token');
  const token = tokenObj?.value;

  // 2. Lógica para rutas de administración
  if (pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    try {
      // Verificación del JWT
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (error) {
      console.error("JWT Verification failed:", error);
      // Si el token es inválido, redirigir y limpiar la cookie
      const response = NextResponse.redirect(new URL('/auth/login', request.url));
      response.cookies.delete('auth_token');
      return response;
    }
  }

  // 3. Para cualquier otra ruta (incluyendo las públicas), permitir el paso
  return NextResponse.next();
}

// Configuración del Matcher: Solo ejecutamos el middleware en el panel admin
export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
