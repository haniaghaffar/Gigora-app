import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ProfileAnalyzer from "../pages/ProfileAnalyzer";
import GigSEO from "../pages/GigSEO";
import ProposalGenerator from "../pages/ProposalGenerator";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../layouts/DashboardLayout";

const AppRoutes = () => (
  <Routes>

    {/* Landing */}
    <Route path="/" element={<Landing />} />


    {/* Login & Signup - only for guests */}
    <Route element={<PublicRoute />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>


    {/* Dashboard - only for logged in users */}
    <Route element={<ProtectedRoute />}>
      <Route element={<DashboardLayout />}>

        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route
          path="/dashboard/profile-analyzer"
          element={<ProfileAnalyzer />}
        />

        <Route
          path="/dashboard/gig-seo"
          element={<GigSEO />}
        />

        <Route
          path="/dashboard/proposal-generator"
          element={<ProposalGenerator />}
        />

      </Route>
    </Route>


    {/* Unknown routes */}
    <Route path="*" element={<Navigate to="/" replace />} />

  </Routes>
);

export default AppRoutes;