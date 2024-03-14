import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const lang = request.cookies.get("lang");
    if(!lang) {
        response.cookies.set("lang", "en");
    }

    return response;
}