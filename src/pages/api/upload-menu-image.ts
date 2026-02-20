import type { APIRoute } from "astro";
import { getSupabaseClient } from "../../lib/supabaseClient";

import { isAdminFromCookie } from "../../lib/admin";
export const POST: APIRoute = async ({ request }) => {
  // Simple admin guard using cookie header
  const cookieHeader = request.headers.get("cookie") || "";
  if (!isAdminFromCookie(cookieHeader)) {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }
  const supabase = getSupabaseClient();
  const formData = await request.formData();
  const file = formData.get("imageFile");

  if (!file || !(file instanceof File)) {
    return new Response(JSON.stringify({ error: "No image file provided" }), {
      status: 400,
    });
  }

  const bucketName = "menu-images";
  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(`public/${fileName}`, file, {
      contentType: file.type,
    });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  const siteUrl = import.meta.env.PUBLIC_SITE_URL || "https://kaskynkka.net";
  const imageUrl = `${siteUrl}${data.path}`;

  return new Response(JSON.stringify({ url: imageUrl }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
