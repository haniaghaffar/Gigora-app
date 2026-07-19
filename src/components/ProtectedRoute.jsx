import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // Optionally render a spinner or null while auth state loads
    return null;
  }

  return user ? <>{children}</> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;