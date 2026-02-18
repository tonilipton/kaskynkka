import { g as getSupabaseClient } from '../../chunks/supabaseClient_D-1yiB8H.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const sessionId = url.searchParams.get("sessionId");
  if (!sessionId) {
    return new Response(
      JSON.stringify({ error: "Session ID is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.from("orders").select("*").eq("stripe_session_id", sessionId).single();
    if (error || !data) {
      return new Response(
        JSON.stringify({ error: "Order not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    const { data: orderItems } = await supabase.from("order_items").select("*, menu_items(*)").eq("order_id", data.id);
    return new Response(
      JSON.stringify({
        order: data,
        items: orderItems || []
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
