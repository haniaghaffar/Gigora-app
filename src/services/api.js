import axios from "axios";
import { supabase } from "./supabase";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || process.env.VITE_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT token (if available)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ===========================
   Gig SEO
   =========================== */

export const optimizeSEO = async (payload) => {
  const { data } = await API.post("/ai/seo", payload);
  return data;
};

/* ===========================
   Proposal Generator
   =========================== */

export const generateProposal = async (payload) => {
  const { data } = await API.post("/ai/proposal", payload);
  return data;
};

/* ===========================
   History
   =========================== */

export const getHistory = async () => {
  try {
    const { data } = await API.get("/history");
    return data;
  } catch (err) {
    const message = err?.response?.data?.detail || err.message || "Failed to fetch history";
    throw new Error(message);
  }
};

export const deleteHistory = async (id) => {
  const { data } = await API.delete(`/history/${id}`);
  return data;
};

/* ===========================
   Daily Usage
   =========================== */

export const getUsage = async () => {
  const { data } = await API.get("/usage");
  return data;
};

/* ===========================
   Authentication
   =========================== */

export const login = async (credentials) => {
  const { data } = await API.post("/auth/login", credentials);
  return data;
};

export const signup = async (user) => {
  const { data } = await API.post("/auth/register", user);
  return data;
};

export const analyzeProfile = async (payload) => {
  const { data } = await API.post("/ai/profile", payload);
  return data;
};

// Save AI usage history (profile, proposal, seo)
export const saveHistory = async (payload) => {
  // Get current user ID via Supabase auth
  const { data: { user } } = await supabase.auth.getUser();
  const enrichedPayload = { ...payload, user_id: user?.id };
  const { data } = await API.post("/history", enrichedPayload);
  return data;
};

// Subscription APIs
export const getSubscriptions = async () => {
  const { data } = await API.get("/subscriptions");
  return data;
};

export const subscribePlan = async (planId) => {
  const { data } = await API.post("/subscriptions", { planId });
  return data;
};

export const cancelSubscription = async (subscriptionId) => {
  const { data } = await API.delete(`/subscriptions/${subscriptionId}`);
  return data;
};

export default API;