import { g as getSupabaseClient } from '../../chunks/supabaseClient_D-1yiB8H.mjs';
import { c as csrfProtection, a as addSecurityHeaders } from '../../chunks/csrf_C_rd12dh.mjs';
export { renderers } from '../../renderers.mjs';

const updateOrderStatus = async (orderId, status, client = getSupabaseClient()) => {
  const { error } = await client.from("orders").update({ status }).eq("order_id", orderId).maybeSingle();
  if (error) throw error;
};

const POST = async (context) => {
  const csrfError = csrfProtection(context);
  if (csrfError) {
    return csrfError;
  }
  try {
    const { orderId, status, estimatedTime } = await context.request.json();
    if (!orderId || !status) {
      const headers2 = addSecurityHeaders(new Headers());
      headers2.set("Content-Type", "application/json");
      return new Response(
        JSON.stringify({ error: "Order ID and status are required" }),
        { status: 400, headers: headers2 }
      );
    }
    await updateOrderStatus(orderId, status);
    if (estimatedTime !== void 0) {
      const supabase = getSupabaseClient();
      const { error: updateError } = await supabase.from("orders").update({ estimated_time: estimatedTime }).eq("order_id", orderId);
      if (updateError) {
        throw updateError;
      }
    }
    const headers = addSecurityHeaders(new Headers());
    headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    const headers = addSecurityHeaders(new Headers());
    headers.set("Content-Type", "application/json");
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to update order status"
      }),
      { status: 500, headers }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
