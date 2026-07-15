import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-primaryBlue rounded"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-primaryBlue transition duration-200"
            >
              Features
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-primaryBlue transition duration-200"
            >
              Pricing
            </button>
          </li>

          <li>
            <Link
              to="/login"
              className="text-gray-700 hover:text-primaryBlue transition duration-200"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link to="/signup">
          <Button className="hidden md:inline-block">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white border-t border-gray-100 py-4 space-y-2">
          <li>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-primaryBlue"
            >
              Features
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-primaryBlue"
            >
              Pricing
            </button>
          </li>

          <li>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-primaryBlue"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="block mx-6 text-center bg-primaryBlue text-white py-2 rounded-lg hover:opacity-90"
            >
              Get Started
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;