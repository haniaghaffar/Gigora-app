import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing REACT_APP_SUPABASE_URL or REACT_APP_SUPABASE_ANON_KEY"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* ===========================
   History Helpers
=========================== */

export async function saveGeneration({
  user_id,
  type,
  content,
  status = "completed",
}) {
  const { data, error } = await supabase
    .from("history")
    .insert([
      {
        user_id,
        type,
        content,
        status,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function fetchHistory(userId) {
  const { data, error } = await supabase
    .from("history")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function deleteGeneration(id) {
  const { error } = await supabase
    .from("history")
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

  if (error && error.code !== "PGRST116") {
    throw error;
  }

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
    const { error } = await supabase
      .from("user_usage")
      .insert([
        {
          user_id: userId,
          date: today,
          daily_count: 1,
        },
      ]);

    if (error) throw error;

    return 1;
  }

  const newCount = usage.daily_count + 1;

  const { error } = await supabase
    .from("user_usage")
    .update({
      daily_count: newCount,
    })
    .eq("id", usage.id);

  if (error) throw error;

  return newCount;
}