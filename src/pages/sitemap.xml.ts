import type { APIRoute } from "astro";
import { getSupabaseClient } from "../lib/supabaseClient";

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://kaskynkka.net";

export const GET: APIRoute = async () => {
  try {
    // Fetch menu items for dynamic URLs
    const supabase = getSupabaseClient();
    const { data: menuItems } = await supabase
      .from("menu_items")
      .select("id, updated_at");

    const today = new Date().toISOString().split("T")[0];

    // Static pages
    const staticPages = [
      { url: "/", priority: "1.0", changefreq: "weekly" },
      { url: "/menu", priority: "0.9", changefreq: "weekly" },
      { url: "/checkout", priority: "0.8", changefreq: "monthly" },
      { url: "/en", priority: "0.9", changefreq: "weekly" },
      { url: "/en/menu", priority: "0.9", changefreq: "weekly" },
      { url: "/en/checkout", priority: "0.8", changefreq: "monthly" },
    ];

    // Generate sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

    // Add static pages
    for (const page of staticPages) {
      const isEnglish = page.url.startsWith("/en");
      const finnishUrl = isEnglish
        ? page.url.replace("/en", "") || "/"
        : page.url;
      const englishUrl = isEnglish
        ? page.url
        : "/en" + (page.url === "/" ? "" : page.url);

      sitemap += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fi" href="${SITE_URL}${finnishUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${englishUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
  </url>
`;
    }

    sitemap += "</urlset>";

    return new Response(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(
      '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
      {
        status: 200,
        headers: {
          "Content-Type": "application/xml",
        },
      },
    );
  }
};
