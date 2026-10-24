import { createClient } from '@supabase/supabase-js';
export function createAdminSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase server environment variables are missing.');
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}
export function allowedAdmin(email?: string | null) {
  if (!email) return false;
  const allowed = (process.env.ADMIN_EMAILS || '').split(',').map(x => x.trim().toLowerCase()).filter(Boolean);
  return allowed.includes(email.toLowerCase());
}
