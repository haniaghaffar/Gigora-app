import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000/api",
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
  const response = await fetch(
    "http://localhost:8000/api/history"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch history");
  }

  return response.json();
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
export default API;