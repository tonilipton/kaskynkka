import { createClient } from '@supabase/supabase-js';

let _client = null;
function readSupabaseEnv() {
  const url = "http://127.0.0.1:54321";
  const anonKey = "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH";
  return { url, anonKey };
}
function getSupabaseClient() {
  if (_client) return _client;
  const { url, anonKey } = readSupabaseEnv();
  _client = createClient(url, anonKey);
  return _client;
}

export { getSupabaseClient as g };
