import { createClient } from "@supabase/supabase-js";
import { anonSupabaseKey, anonSupabaseUrl } from "../config";

export const anonSupabaseClient = createClient(
  anonSupabaseUrl,
  anonSupabaseKey
);
