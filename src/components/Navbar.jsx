import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  UserCircle2,
} from "lucide-react";

import Button from "../components/Button";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

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
  };

  const isPro = user?.user_metadata?.plan?.toLowerCase() === "pro";

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-primaryBlue"
        >
          <Sparkles size={27} className="text-yellow-400" />
          Gigora
        </Link>
        

        {/* DESKTOP MENU */}
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
      ? "px-5 py-2 rounded-full bg-primaryBlue text-white font-semibold transition"
      : "px-5 py-2 rounded-full bg-blue-50 text-primaryBlue font-semibold hover:bg-primaryBlue hover:text-white transition"
  }
>
  Dashboard
</Link>
              {/* User avatar with dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <UserCircle2 size={36} className="text-primaryBlue" />
                <span className="text-sm font-semibold text-primaryBlue">
                  {user?.user_metadata?.name || "Freelancer"}
                </span>
                {isPro && (
                  <span className="ml-1 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">
                    PRO
                  </span>
                )}
              </button>
              {accountOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-md shadow-lg border border-gray-200 z-20">
                  <ul className="py-1">
                    <li>
                      <Link to="/profile" onClick={() => setAccountOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Profile
                      </Link>
                    </li>
                    <li>
                       <button onClick={() => { toast.success('Upgrade to Pro (demo) – now you are a Pro user!'); setAccountOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                         Upgrade to Pro
                       </button>
                    </li>
                    <li>
                      <button onClick={() => { handleLogout(); setAccountOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        Logout
                      </button>
                    </li>
                  </ul>
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
                <Button className="rounded-full px-6">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-5">
          <Link
  to="/"
  onClick={() => setMenuOpen(false)}
  className="block text-gray-700 font-medium"
>
  Home
</Link>

<Link
  to="/features"
  onClick={() => setMenuOpen(false)}
  className="block text-gray-700 font-medium"
>
  Features
</Link>

<Link
  to="/pricing"
  onClick={() => setMenuOpen(false)}
  className="block text-gray-700 font-medium"
>
  Pricing
</Link>
          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="block text-primaryBlue font-semibold"
              >
                Dashboard
              </Link>
              <div className="flex items-center gap-3">
                <UserCircle2 size={35} className="text-primaryBlue" />
                <div>
                  <p className="font-semibold">{user?.user_metadata?.name || "Freelancer"}</p>
                  {isPro && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 rounded-full font-semibold">
                      PRO
                    </span>
                  )}
                </div>
              </div>
              <button onClick={handleLogout} className="text-red-500 font-semibold">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-primaryBlue font-medium">
                Login
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <Button className="w-full rounded-full">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;