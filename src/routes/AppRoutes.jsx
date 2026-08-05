import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ProfileAnalyzer from "../pages/ProfileAnalyzer";
import GigSEO from "../pages/GigSEO";
import ProposalGenerator from "../pages/ProposalGenerator";
import History from "../pages/History";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";
import Billing from "../pages/Billing";
import Settings from "../pages/Settings";
        import Checkout from "../pages/Checkout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../layouts/DashboardLayout";

const AppRoutes = () => (
  <Routes>

    {/* Landing */}
    <Route path="/" element={<Landing />} />

    {/* New Pages */}
    <Route path="/features" element={<Features />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/checkout/success" element={<Success />} />
    <Route path="/checkout/cancel" element={<Cancel />} />

    {/* Login & Signup - only for guests */}
    <Route element={<PublicRoute />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>

    {/* Dashboard - only for logged in users */}
    <Route element={<ProtectedRoute />}>
      <Route element={<DashboardLayout />}>
      <Route path="/settings" element={<Settings />} />

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
        <Route path="/billing" element={<Billing />} />

        <Route
          path="/dashboard/history"
          element={<History />}
        />

<Route path="/checkout" element={<Checkout />} />

      </Route>
    </Route>

    {/* Unknown routes */}
    <Route path="*" element={<Navigate to="/" replace />} />

  </Routes>
);

export default AppRoutes;