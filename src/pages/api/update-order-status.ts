import type { APIRoute } from "astro";
import { updateOrderStatus } from "../../api/orderStatus";
import { getSupabaseClient } from "../../lib/supabaseClient";
import { csrfProtection, addSecurityHeaders } from "../../lib/csrf";

export const POST: APIRoute = async (context) => {
  // Apply CSRF protection
  const csrfError = csrfProtection(context);
  if (csrfError) {
    return csrfError;
  }

  try {
    const { orderId, status, estimatedTime } = await context.request.json();

    if (!orderId || !status) {
      const headers = addSecurityHeaders(new Headers());
      headers.set("Content-Type", "application/json");
      return new Response(
        JSON.stringify({ error: "Order ID and status are required" }),
        { status: 400, headers },
      );
    }

    // Update order status
    await updateOrderStatus(orderId, status);

    // Update estimated_time if provided
    if (estimatedTime !== undefined) {
      const supabase = getSupabaseClient();
      const { error: updateError } = await supabase
        .from("orders")
        .update({ estimated_time: estimatedTime })
        .eq("order_id", orderId);

      if (updateError) {
        throw updateError;
      }
    }

    const headers = addSecurityHeaders(new Headers());
    headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  } catch (error: any) {
    console.error("Error updating order status:", error);
    const headers = addSecurityHeaders(new Headers());
    headers.set("Content-Type", "application/json");
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to update order status",
      }),
      { status: 500, headers },
    );
  }
};
