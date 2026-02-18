import {createClient, type SupabaseClient} from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

function readSupabaseEnv(): {url: string; anonKey: string} {
  // Astro/Vite loads .env into import.meta.env. This is safe on the server.
  const url =
    import.meta.env.SUPABASE_URL ||
    import.meta.env.PUBLIC_SUPABASE_URL ||
    process.env.SUPABASE_URL ||
    ''

  const anonKey =
    import.meta.env.SUPABASE_ANON_KEY ||
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    ''

  if (!url) throw new Error('SUPABASE_URL is required (set it in .env)')
  if (!anonKey) throw new Error('SUPABASE_ANON_KEY is required (set it in .env)')

  return {url, anonKey}
}

/**
 * Get a cached Supabase client.
 * IMPORTANT: do not import this module from browser-only code unless you also provide PUBLIC_* env vars.
 */
export function getSupabaseClient(): SupabaseClient {
  if (_client) return _client
  const {url, anonKey} = readSupabaseEnv()
  _client = createClient(url, anonKey)
  return _client
}
