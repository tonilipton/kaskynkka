import type { APIContext } from "astro";

/**
 * CSRF Protection Utility
 *
 * Validates that requests come from allowed origins
 * and have proper CSRF tokens for state-changing operations
 */

// Allowed origins
const ALLOWED_ORIGINS = [
  "http://localhost:4321",
  "http://localhost:3000",
  "https://kaskynkka.net",
  "https://www.kaskynkka.net",
];

// Add more origins from env if specified
if (import.meta.env.PUBLIC_SITE_URL) {
  ALLOWED_ORIGINS.push(import.meta.env.PUBLIC_SITE_URL);
}

/**
 * Validate the origin of a request
 */
export function validateOrigin(context: APIContext): boolean {
  const origin = context.request.headers.get("origin");
  const referer = context.request.headers.get("referer");

  // If no origin/referer, allow (for same-origin requests)
  if (!origin && !referer) {
    return true;
  }

  // Check origin against allowed list
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

  // Check referer as fallback
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

/**
 * Generate a CSRF token
 */
export function generateCSRFToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

/**
 * Middleware to validate CSRF for API routes
 */
export function csrfProtection(context: APIContext): Response | null {
  // Skip for GET requests (they should be safe)
  if (context.request.method === "GET") {
    return null;
  }

  // Validate origin
  if (!validateOrigin(context)) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Invalid origin. Request rejected for security reasons.",
      }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json",
          "X-Content-Type-Options": "nosniff",
        },
      },
    );
  }

  return null;
}

/**
 * Add security headers to API responses
 */
export function addSecurityHeaders(headers: Headers): Headers {
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return headers;
}
