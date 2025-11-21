import { createClient } from '@supabase/supabase-js'

// Server-side client for public reads (uses anon key)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Product fetching may not work correctly.')
}

export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  },
  db: {
    schema: 'public',
  },
  global: {
    headers: {
      'x-client-info': 'meetreats-web',
    },
  },
  // Performance optimizations
  realtime: {
    params: {
      eventsPerSecond: 2,
    },
  },
})


