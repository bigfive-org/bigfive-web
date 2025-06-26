import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { applyExperimentsToRequest } from '@/lib/experiments/utils'
import { localePrefix } from './navigation'
import { locales } from './config/site'

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en'
})

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request)
  return applyExperimentsToRequest(request, response)
}

export const config = {
  matcher: [
    '/',
    '/(en|ar|de|es|fr|id|it|no|pt|sv|uk|da|fi|hi|is|ja|pl|ru|th|zh|vi)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
}
