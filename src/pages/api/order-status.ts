import type { APIRoute } from "astro";
import { getSupabaseClient } from "../../lib/supabaseClient";

export const GET: APIRoute = async ({ url }) => {
  const orderId = url.searchParams.get("orderId");

  if (!orderId) {
    return new Response(
      JSON.stringify({ success: false, error: "Order ID is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    const supabase = getSupabaseClient();
    // Try to find by order_id first
    let { data, error } = await supabase
      .from("orders")
      .select("status, estimated_time")
      .eq("order_id", orderId)
      .single();

    // If not found, try by stripe_session_id
    if (error || !data) {
      const result = await supabase
        .from("orders")
        .select("status, estimated_time")
        .eq("stripe_session_id", orderId)
        .single();

      data = result.data;
      error = result.error;
    }

    if (error || !data) {
      return new Response(
        JSON.stringify({ success: false, error: "Order not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        status: data.status,
        estimated_time: data.estimated_time,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
