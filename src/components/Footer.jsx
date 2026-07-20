import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Sparkles, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <footer className="bg-darkNavy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              GIGORA
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              AI-powered platform built for freelancers to optimize
              profiles, improve gig visibility, and generate
              high-converting proposals.
            </p>

            <div className="flex items-center gap-4 mt-6">

              <button className="p-2 rounded-lg bg-white/10 hover:bg-primaryBlue transition">
                <FaGithub size={20} />
              </button>

              <button className="p-2 rounded-lg bg-white/10 hover:bg-primaryBlue transition">
                <FaLinkedin size={20} />
              </button>

              <button className="p-2 rounded-lg bg-white/10 hover:bg-primaryBlue transition">
                <Mail size={20} />
              </button>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="hover:text-white transition"
                >
                  Features
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-white transition"
                >
                  Pricing
                </button>
              </li>

              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="hover:text-white transition"
                >
                  Get Started
                </Link>
              </li>

            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Ready to Win More Clients?
            </h3>

            <p className="text-gray-300 leading-7">
              Use AI to create better proposals, optimize your gigs,
              and grow your freelance business faster.
            </p>

            <Link
              to="/signup"
              className="inline-flex items-center gap-2 mt-6 bg-primaryBlue hover:bg-blue-700 px-5 py-3 rounded-xl font-medium transition"
            >
              <Sparkles size={18} />
              Get Started
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Gigora. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;