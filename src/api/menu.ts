import { getSupabaseClient } from "../lib/supabaseClient";

// Fetch menu items from Supabase
export const getMenu = async () => {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.from("menu_items").select("*");
  if (error) throw error;
  return data;
};
