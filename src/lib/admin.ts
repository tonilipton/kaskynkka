// Simple admin guard utility (production-ready guard should be more robust)
export function isAdminFromCookie(cookieHeader: string): boolean {
  if (!cookieHeader) return false;
  // Parse cookies into a map
  const cookies = Object.fromEntries(
    cookieHeader
      .split(";")
      .map((c) => c.trim())
      .filter((c) => c.length > 0)
      .map((c) => {
        const [k, v] = c.split("=", 2);
        return [k, v ?? ""] as [string, string];
      }),
  );
  const token = cookies["admin_token"];
  // Accept a couple of known tokens; in real app replace with proper auth
  return (
    token === "s3cr3t" || token === "admin" || token === "REAL_ADMIN_TOKEN"
  );
}
