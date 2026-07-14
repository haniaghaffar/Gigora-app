import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white text-darkNavy shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-darkNavy">
          GIGORA
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-darkNavy"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#features" className="text-darkText hover:text-primaryBlue transition duration-200">Features</a></li>
          <li><a href="#pricing" className="text-darkText hover:text-primaryBlue transition duration-200">Pricing</a></li>
          <li><Link to="/login" className="text-darkText hover:text-primaryBlue transition duration-200">Login</Link></li>
        </ul>

        {/* CTA */}
        <Link to="/signup">
          <Button className="hidden md:inline-block">Get Started</Button>
        </Link>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white text-darkNavy py-4 space-y-2">
          <li><a href="#features" className="block px-4 hover:bg-lightBlue transition">Features</a></li>
          <li><a href="#pricing" className="block px-4 hover:bg-lightBlue transition">Pricing</a></li>
          <li><Link to="/login" className="block px-4 hover:bg-lightBlue transition">Login</Link></li>
          <li><Link to="/signup" className="block w-full text-center bg-primaryBlue text-white py-2 rounded-lg mt-2">Get Started</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;