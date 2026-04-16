import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase URL and Anon Key
// You can find these in your Supabase Dashboard > Project Settings > API
const supabaseUrl = 'https://hpwwojprqyrfzruuvwhk.supabase.co' 
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY_HERE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)