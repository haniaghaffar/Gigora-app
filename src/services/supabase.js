import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.REACT_APP_SUPABASE_URL ||
  "https://alfooyaepwpffoqecheb.supabase.co";

const supabaseAnonKey =
  process.env.REACT_APP_SUPABASE_ANON_KEY ||
  "sb_publishable_v7LJ_ICGW_uqVLIuXdDnFQ_-TpkkQ5Q";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* ===========================
   History Functions
=========================== */

export async function saveGeneration(data) {
  const { data: result, error } = await supabase
    .from("generations")
    .insert([data])
    .select();

  if (error) throw error;

  return result;
}

export async function fetchHistory(userId) {
  const { data, error } = await supabase
    .from("generations")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) throw error;

  return data;
}

export async function deleteGeneration(id) {
  const { error } = await supabase
    .from("generations")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}

/* ===========================
   Daily Usage
=========================== */

export async function getUsage(userId) {
  const today = new Date().toISOString().split("T")[0];

  const { data, error } = await supabase
    .from("user_usage")
    .select("*")
    .eq("user_id", userId)
    .eq("date", today)
    .single();

  if (error && error.code !== "PGRST116") throw error;

  return (
    data || {
      daily_count: 0,
    }
  );
}

export async function incrementUsage(userId) {
  const today = new Date().toISOString().split("T")[0];

  const usage = await getUsage(userId);

  if (!usage.id) {
    const { error } = await supabase.from("user_usage").insert([
      {
        user_id: userId,
        date: today,
        daily_count: 1,
      },
    ]);

    if (error) throw error;

    return 1;
  }

  const count = usage.daily_count + 1;

  const { error } = await supabase
    .from("user_usage")
    .update({
      daily_count: count,
    })
    .eq("id", usage.id);

  if (error) throw error;

  return count;
}