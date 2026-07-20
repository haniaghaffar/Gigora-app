import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  LayoutDashboard,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../services/supabase";

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-primaryBlue"
        >
          GIGORA
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          <Menu size={28} />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-700 hover:text-primaryBlue transition"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-700 hover:text-primaryBlue transition"
          >
            Pricing
          </button>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-gray-700 hover:text-primaryBlue transition"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 text-gray-700 hover:text-primaryBlue transition"
              >
                <LogIn size={18} />
                Login
              </Link>

              <Link to="/signup">
                <Button className="flex items-center gap-2">
                  <UserPlus size={18} />
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <button
            onClick={() => scrollToSection("features")}
            className="block text-gray-700"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("pricing")}
            className="block text-gray-700"
          >
            Pricing
          </button>

          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-gray-700"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500"
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
                className="flex items-center gap-2 text-gray-700"
              >
                <LogIn size={18} />
                Login
              </Link>

              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <Button className="w-full flex items-center justify-center gap-2">
                  <UserPlus size={18} />
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