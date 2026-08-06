import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  Crown,
  CreditCard,
  Settings,
  LogOut,
  ArrowUpCircle,
  Home,
  LayoutDashboard,
  Star,
} from "lucide-react";

import Button from "../components/Button";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const navClass = (path) =>
    location.pathname === path
      ? "px-4 py-2 rounded-xl bg-blue-50 text-primaryBlue font-semibold transition-all duration-300"
      : "px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-primaryBlue font-medium transition-all duration-300";

  const handleLogout = async () => {
    await supabase.auth.signOut();

    localStorage.removeItem("subscription");
    localStorage.removeItem("paymentMethod");

    navigate("/");

    setMenuOpen(false);
    setAccountOpen(false);
  };

  const isPro =
    localStorage.getItem("subscription") === "pro";

  return (
    <>
      {/* Overlay */}
      {(menuOpen || accountOpen) && (
        <div
          onClick={() => {
            setMenuOpen(false);
            setAccountOpen(false);
          }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        />
      )}

      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="h-11 w-11 rounded-xl bg-primaryBlue flex items-center justify-center shadow-md group-hover:scale-105 transition duration-300">
              <Sparkles className="text-white" size={20} />
            </div>

            <h1 className="text-2xl font-black tracking-tight text-gray-900">
              Gig<span className="text-primaryBlue">ora</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/"
              className={navClass("/")}
            >
              Home
            </Link>

            <Link
              to="/features"
              className={navClass("/features")}
            >
              Features
            </Link>

            <Link
              to="/pricing"
              className={navClass("/pricing")}
            >
              Pricing
            </Link>
                        {user ? (
              <>
                {/* Dashboard Button */}
                <Link
                  to="/dashboard"
                  className={
                    location.pathname === "/dashboard"
                      ? "ml-3 flex items-center gap-2 rounded-xl bg-primaryBlue px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all"
                      : "ml-3 flex items-center gap-2 rounded-xl bg-blue-50 px-5 py-2.5 text-sm font-semibold text-primaryBlue hover:bg-primaryBlue hover:text-white hover:shadow-lg transition-all duration-300"
                  }
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>

                {/* Account */}
                <div className="relative ml-3">
                  <button
                    onClick={() => setAccountOpen(!accountOpen)}
                    className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white">
                      {user?.user_metadata?.name?.charAt(0)?.toUpperCase() ||
                        "F"}
                    </div>

                    <div className="hidden xl:block text-left">
                      <p className="font-semibold text-gray-900">
                        {user?.user_metadata?.name || "Freelancer"}
                      </p>

                      <p className="text-xs text-gray-500">
                        {user?.email}
                      </p>
                    </div>

                    {isPro && (
                      <span className="hidden lg:flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-[11px] font-semibold text-amber-700">
                        <Crown size={12} />
                        PRO
                      </span>
                    )}
                  </button>

                  {accountOpen && (
                    <div className="absolute right-0 mt-4 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">

                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold">
                            {user?.user_metadata?.name
                              ?.charAt(0)
                              ?.toUpperCase() || "F"}
                          </div>

                          <div>
                            <p className="font-semibold">
                              {user?.user_metadata?.name || "Freelancer"}
                            </p>

                            <p className="text-xs text-blue-100">
                              {user?.email}
                            </p>
                          </div>
                        </div>

                        {isPro && (
                          <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                            <Crown size={14} />
                            Pro Member
                          </div>
                        )}
                      </div>

                      {/* Menu */}
                      <div className="p-2">

                        <Link
                          to="/billing"
                          onClick={() => setAccountOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-50"
                        >
                          <CreditCard size={18} />
                          Billing
                        </Link>

                        <Link
                          to="/settings"
                          onClick={() => setAccountOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-50"
                        >
                          <Settings size={18} />
                          Settings
                        </Link>

                        {!isPro && (
                          <button
                            onClick={() => {
                              navigate("/pricing");
                              setAccountOpen(false);
                            }}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium text-primaryBlue transition hover:bg-blue-50"
                          >
                            <ArrowUpCircle size={18} />
                            Upgrade to Pro
                          </button>
                        )}

                        <div className="my-2 border-t" />

                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-600 transition hover:bg-red-50"
                        >
                          <LogOut size={18} />
                          Logout
                        </button>

                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-xl px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Login
                </Link>

                <Link to="/signup">
                  <Button className="rounded-xl px-6 py-2.5 shadow-md hover:shadow-xl transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
                    {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex items-center justify-center h-11 w-11 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primaryBlue flex items-center justify-center">
              <Sparkles className="text-white" size={18} />
            </div>

            <div>
              <h2 className="font-bold text-lg">Gigora</h2>
              <p className="text-xs text-gray-500">
                AI Freelancer Toolkit
              </p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* User Card */}
        {user && (
          <div className="m-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-xl font-bold">
                {user?.user_metadata?.name?.charAt(0)?.toUpperCase() || "F"}
              </div>

              <div>
                <h3 className="font-semibold">
                  {user?.user_metadata?.name || "Freelancer"}
                </h3>

                <p className="text-xs text-blue-100 break-all">
                  {user?.email}
                </p>

                {isPro && (
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs font-semibold">
                    <Crown size={12} />
                    PRO Member
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="px-5 space-y-2">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 transition"
          >
            <Home size={20} />
            Home
          </Link>

          <Link
            to="/features"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 transition"
          >
            <Star size={20} />
            Features
          </Link>

          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 transition"
          >
            <CreditCard size={20} />
            Pricing
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 transition"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>

              <Link
                to="/billing"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 transition"
              >
                <CreditCard size={20} />
                Billing
              </Link>

              <Link
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 transition"
              >
                <Settings size={20} />
                Settings
              </Link>

              {!isPro && (
                <button
                  onClick={() => {
                    navigate("/pricing");
                    setMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium text-primaryBlue hover:bg-blue-50 transition"
                >
                  <ArrowUpCircle size={20} />
                  Upgrade to Pro
                </button>
              )}

              <div className="border-t my-3" />

              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 font-medium text-red-600 hover:bg-red-100 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="pt-4 space-y-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full rounded-xl"
                  >
                    Login
                  </Button>
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                >
                  <Button className="w-full rounded-xl">
                    Get Started
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;