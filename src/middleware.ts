import { NextRequest, NextResponse } from "next/server"
import { LocaleMiddleware } from "./i18n/LocaleMiddleware"

// middleware.ts
export function middleware(request: NextRequest) {
    const newRequest = LocaleMiddleware(request)
    if (newRequest instanceof NextResponse) {
        return newRequest
    }
    
    //..... Любая ваша логика

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/',
        '/((?!api|_next/static|_next/image|favicon.ico|.+[.](?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};