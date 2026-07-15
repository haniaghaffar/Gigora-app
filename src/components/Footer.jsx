import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-[#1E3A5F] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold hover:text-[#EFF6FF] transition"
          >
            GIGORA
          </Link>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 mt-6 md:mt-0">
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white hover:text-[#1A56DB] transition"
              >
                Features
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-white hover:text-[#1A56DB] transition"
              >
                Pricing
              </button>
            </li>

            <li>
              <Link
                to="/login"
                className="text-white hover:text-[#1A56DB] transition"
              >
                Login
              </Link>
            </li>

            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white hover:text-[#1A56DB] transition"
              >
                Back to Top
              </button>
            </li>
          </ul>
        </div>

        <hr className="border-gray-500 my-8" />

        <div className="text-center">
          <p className="text-[#6B7280]">
            © 2026 Gigora. All rights reserved.
          </p>

          <p className="text-[#6B7280] mt-2 text-sm">
            AI-powered tools to help freelancers optimize profiles,
            improve gig SEO, and generate winning proposals.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;