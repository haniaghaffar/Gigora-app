import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://alfooyaepwpffoqecheb.supabase.co";
const supabaseAnonKey = "sb_publishable_v7LJ_ICGW_uqVLIuXdDnFQ_-TpkkQ5Q";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);