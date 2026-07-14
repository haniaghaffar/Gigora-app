import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/#/" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition">
          GIGORA
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-slate-800 font-medium">
          <li>
            <a href="#features" className="hover:text-blue-700 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#pricing" className="hover:text-blue-700 transition">
              Pricing
            </a>
          </li>

          <li>
            <a href="/#/login" className="hover:text-blue-700 transition">
              Login
            </a>
          </li>
        </ul>

        {/* Button */}
        <a href="/#/signup" className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition inline-block">
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;