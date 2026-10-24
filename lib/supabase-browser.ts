import { createClient } from '@supabase/supabase-js';
export function createBrowserSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Supabase browser environment variables are missing.');
  return createClient(url, key);
}
