import { g as getSupabaseClient } from '../../chunks/supabaseClient_D-1yiB8H.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const orderId = url.searchParams.get("orderId");
  if (!orderId) {
    return new Response(
      JSON.stringify({ success: false, error: "Order ID is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    const supabase = getSupabaseClient();
    let { data, error } = await supabase.from("orders").select("status, estimated_time").eq("order_id", orderId).single();
    if (error || !data) {
      const result = await supabase.from("orders").select("status, estimated_time").eq("stripe_session_id", orderId).single();
      data = result.data;
      error = result.error;
    }
    if (error || !data) {
      return new Response(
        JSON.stringify({ success: false, error: "Order not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        status: data.status,
        estimated_time: data.estimated_time
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
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
