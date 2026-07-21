import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  LogOut,
  LogIn,
  UserPlus,
  Sparkles,
  UserCircle2,
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
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setMenuOpen(false);
  };

  const isPro = user?.user_metadata?.plan?.toLowerCase() === "pro";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-primaryBlue"
        >
          <Sparkles className="text-yellow-400" size={26} />
          Gigora
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">

          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-600 hover:text-primaryBlue font-medium"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-600 hover:text-primaryBlue font-medium"
          >
            Pricing
          </button>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-full bg-blue-50 text-primaryBlue font-semibold hover:bg-primaryBlue hover:text-white transition"
              >
                Dashboard
              </Link>

              <div className="flex items-center gap-2">
                <UserCircle2 className="text-primaryBlue" size={34} />

                <div className="leading-tight">
                  <p className="font-semibold text-sm">
                    {user.user_metadata?.name || "Freelancer"}
                  </p>

                  {isPro && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                      PRO
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-medium text-gray-600 hover:text-primaryBlue"
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

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t p-6 space-y-4">

          <button
            onClick={() => scrollToSection("features")}
            className="block"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("pricing")}
            className="block"
          >
            Pricing
          </button>

          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
              >
                <Button className="w-full">
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