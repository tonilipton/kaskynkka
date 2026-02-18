const ALLOWED_ORIGINS = [
  "http://localhost:4321",
  "http://localhost:3000",
  "https://kaskynkka.net",
  "https://www.kaskynkka.net"
];
function validateOrigin(context) {
  const origin = context.request.headers.get("origin");
  const referer = context.request.headers.get("referer");
  if (!origin && !referer) {
    return true;
  }
  if (origin) {
    const url = new URL(origin);
    const isAllowed = ALLOWED_ORIGINS.some((allowed) => {
      try {
        const allowedUrl = new URL(allowed);
        return url.hostname === allowedUrl.hostname;
      } catch {
        return false;
      }
    });
    if (isAllowed) return true;
  }
  if (referer) {
    const url = new URL(referer);
    const isAllowed = ALLOWED_ORIGINS.some((allowed) => {
      try {
        const allowedUrl = new URL(allowed);
        return url.hostname === allowedUrl.hostname;
      } catch {
        return false;
      }
    });
    if (isAllowed) return true;
  }
  return false;
}
function csrfProtection(context) {
  if (context.request.method === "GET") {
    return null;
  }
  if (!validateOrigin(context)) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Invalid origin. Request rejected for security reasons."
      }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json",
          "X-Content-Type-Options": "nosniff"
        }
      }
    );
  }
  return null;
}
function addSecurityHeaders(headers) {
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return headers;
}

export { addSecurityHeaders as a, csrfProtection as c };
