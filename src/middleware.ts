// Middleware removed for UI-only mode. Keep file present as a noop so Next.js
// doesn't error on missing middleware.

export default function middleware() {
    return;
}

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/(api|trpc)(.*)",
        "/dashboard(.*)",
        "/",
        "/auth/sign-in",
        "/auth/sign-up",
    ],
};