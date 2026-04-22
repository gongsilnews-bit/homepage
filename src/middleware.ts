import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get('host') || '';

  const isLocalHost = hostname.includes('localhost');
  let tenant_id = '';

  if (isLocalHost) {
    if (hostname.startsWith('localhost')) {
      // For local development on localhost, default to a test tenant
      tenant_id = 'test-agent'; 
    } else {
      // e.g., agent1.localhost:3001
      tenant_id = hostname.split('.')[0];
    }
  } else if (hostname.includes('vercel.app')) {
    // Vercel Preview domain logic
    tenant_id = 'test-agent';
  } else {
    // Production domain logic
    tenant_id = hostname.replace('.gongsilnews.com', '');
    
    // Bypass for root domain or www
    if (tenant_id === hostname || tenant_id === 'www' || tenant_id === '') {
      return NextResponse.next();
    }
  }
  // Map template subdomains directly to their preview routes
  if (tenant_id === 'template01' || tenant_id === 'template02' || tenant_id === 'templete01' || tenant_id === 'templete02') {
    const targetTemplate = tenant_id.replace('templete', 'template');
    
    // If accessing root, rewrite to the template preview page
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = `/preview/templates/${targetTemplate}`;
    } else {
      url.pathname = `/preview/templates/${targetTemplate}${url.pathname}`;
    }
    return NextResponse.rewrite(url);
  }

  // Rewrite URL transparently to the /[tenant_id] dynamic route
  // For normal agencies:

  url.pathname = `/${tenant_id}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
