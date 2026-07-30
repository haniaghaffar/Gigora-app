import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  UserCircle2,
  Crown,
  CreditCard,
  Settings,
  LogOut,
  ArrowUpCircle,
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
      ? "text-primaryBlue font-semibold border-b-2 border-primaryBlue pb-1 transition"
      : "text-gray-600 hover:text-primaryBlue font-medium transition";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setMenuOpen(false);
    setAccountOpen(false);
  };

  const isPro =
    user?.user_metadata?.plan?.toLowerCase() === "pro";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-primaryBlue"
        >
          <Sparkles className="text-yellow-400" size={28} />
          Gigora
        </Link>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-8">

          <Link to="/" className={navClass("/")}>
            Home
          </Link>

          <Link to="/features" className={navClass("/features")}>
            Features
          </Link>

          <Link to="/pricing" className={navClass("/pricing")}>
            Pricing
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className={
                  location.pathname === "/dashboard"
                    ? "px-5 py-2 rounded-full bg-primaryBlue text-white font-semibold"
                    : "px-5 py-2 rounded-full bg-blue-50 text-primaryBlue font-semibold hover:bg-primaryBlue hover:text-white transition"
                }
              >
                Dashboard
              </Link>

              {/* Account */}

              <div className="relative">

                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="flex items-center gap-3"
                >
                  <UserCircle2
                    size={38}
                    className="text-primaryBlue"
                  />

                  <div className="flex flex-col items-start">

                    <span className="font-semibold text-primaryBlue">
                      {user?.user_metadata?.name || "Freelancer"}
                    </span>

                    {isPro && (
                      <span className="inline-flex items-center gap-1 mt-1 rounded-full bg-amber-100 border border-amber-300 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                        <Crown size={12} />
                        PRO
                      </span>
                    )}

                  </div>

                </button>

                {accountOpen && (

                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden">

                    

                    <Link
                      to="/billing"
                      onClick={() => setAccountOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                    >
                      <CreditCard size={18} />
                      Billing
                    </Link>

                    <Link
                      to="/settings"
                      onClick={() => setAccountOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
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
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left text-primaryBlue font-medium"
                      >
                        <ArrowUpCircle size={18} />
                        Upgrade to Pro
                      </button>
                    )}

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </div>

                )}

              </div>

            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-primaryBlue font-medium"
              >
                Login
              </Link>

              <Link to="/signup">
                <Button className="rounded-full px-6">
                  Get Started
                </Button>
              </Link>
            </>
          )}

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
            {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-5 shadow-lg">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navClass("/")}
          >
            Home
          </Link>

          <Link
            to="/features"
            onClick={() => setMenuOpen(false)}
            className={navClass("/features")}
          >
            Features
          </Link>

          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className={navClass("/pricing")}
          >
            Pricing
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="block font-semibold text-primaryBlue"
              >
                Dashboard
              </Link>

              

              <Link
                to="/billing"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700"
              >
                <CreditCard size={18} />
                Billing
              </Link>

              <Link
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700"
              >
                <Settings size={18} />
                Settings
              </Link>

              {!isPro && (
                <button
                  onClick={() => {
                    navigate("/pricing");
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-primaryBlue font-medium"
                >
                  <ArrowUpCircle size={18} />
                  Upgrade to Pro
                </button>
              )}

              <div className="border-t pt-4 flex items-center gap-3">
                <UserCircle2
                  size={42}
                  className="text-primaryBlue"
                />

                <div>
                  <p className="font-semibold">
                    {user?.user_metadata?.name || "Freelancer"}
                  </p>

                  {isPro && (
                    <span className="inline-flex items-center gap-1 mt-1 rounded-full bg-amber-100 border border-amber-300 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                      <Crown size={12} />
                      PRO
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-600 font-medium pt-3"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
              >
                <Button className="w-full rounded-full">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;