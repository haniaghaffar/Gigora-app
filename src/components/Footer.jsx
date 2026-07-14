import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Logo */}
          <a href="/#/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
            GIGORA
          </a>

          {/* Links */}
          <ul className="flex gap-6 mt-6 md:mt-0 text-gray-300">
            <li>
              <a href="#features" className="hover:text-white transition">
                Features
              </a>
            </li>

            <li>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>

            <li>
              <a href="/#/login" className="hover:text-white transition">
                Login
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>

        </div>

        <hr className="my-6 border-gray-600" />

        <p className="text-center text-gray-400">
          © 2026 Mufsa Developers. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;