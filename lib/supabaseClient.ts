import { createClient } from "@supabase/supabase-js";
// import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_KEY");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
