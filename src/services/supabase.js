import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const DEMO_USER_KEY = "gigora-demo-user";

const createDemoAuth = () => {
  const getStoredUser = () => {
    try {
      const raw = localStorage.getItem(DEMO_USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };

  const setStoredUser = (user) => {
    localStorage.setItem(DEMO_USER_KEY, JSON.stringify(user));
  };


  return {
    getUser: async () => ({ data: { user: getStoredUser() } }),
    getSession: async () => ({ data: { session: getStoredUser() ? { user: getStoredUser() } : null } }),
    signInWithPassword: async ({ email }) => {
      const normalizedEmail = email.trim().toLowerCase();
      const demoUser = {
        id: "demo-user",
        email: normalizedEmail,
        user_metadata: {
          name: normalizedEmail.split("@")[0] || "Demo User",
          bio: "AI freelancer building standout gigs and proposals.",
          skills: "React, JavaScript, UI/UX",
          notifications: true,
        },
      };
      setStoredUser(demoUser);
      return { data: { user: demoUser }, error: null };
    },
    signUp: async ({ email, options }) => {
      const normalizedEmail = email.trim().toLowerCase();
      const demoUser = {
        id: "demo-user",
        email: normalizedEmail,
        user_metadata: {
          name: options?.data?.name || normalizedEmail.split("@")[0] || "Demo User",
          bio: "AI freelancer building standout gigs and proposals.",
          skills: "React, JavaScript, UI/UX",
          notifications: true,
        },
      };
      setStoredUser(demoUser);
      return { data: { user: demoUser }, error: null };
    },
    updateUser: async ({ data }) => {
      const current = getStoredUser();
      if (!current) {
        return { data: null, error: { message: "No user signed in." } };
      }
      const updated = {
        ...current,
        user_metadata: {
          ...current.user_metadata,
          ...data,
        },
      };
      setStoredUser(updated);
      return { data: { user: updated }, error: null };
    },
    signOut: async () => {
      localStorage.removeItem(DEMO_USER_KEY);
      return { error: null };
    },
    onAuthStateChange: (_callback) => ({ data: { subscription: { unsubscribe: () => {} } } }),
  };
};

const createMockTable = () => {
  const chain = {
    select: () => chain,
    delete: () => chain,
    insert: () => chain,
    update: () => chain,
    eq: () => chain,
    order: () => chain,
    single: () => chain,
    then: (resolve) => resolve({ data: [], error: null }),
    catch: () => chain,
  };
  return () => chain;
};

const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
let supabase;

if (isSupabaseConfigured) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    "Supabase configuration missing. Running in frontend demo mode without remote auth or storage."
  );
  supabase = {
    auth: createDemoAuth(),
    from: createMockTable(),
  };
}

export { supabase };

/* ===========================
   History / Storage Helpers
=========================== */

export async function saveGeneration(data) {
  if (!isSupabaseConfigured) {
    return [data];
  }

  const { data: result, error } = await supabase
    .from("generations")
    .insert([data])
    .select();

  if (error) throw error;

  return result;
}

export async function fetchHistory(userId) {
  if (!isSupabaseConfigured) {
    return [];
  }

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
  if (!isSupabaseConfigured) {
    return true;
  }

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
  if (!isSupabaseConfigured) {
    return { daily_count: 0 };
  }

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
  if (!isSupabaseConfigured) {
    return 1;
  }

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
