import React from "react";
import { Sparkles, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-darkNavy border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={24} className="text-yellow-400" />
              <h2 className="text-3xl font-bold">Gigora</h2>
            </div>

            <p className="mt-5 text-gray-300 leading-7">
              AI-powered platform built for freelancers to optimize
              profiles, improve gig visibility, and generate
              high-converting proposals with ease.
            </p>

            <div className="flex items-center gap-4 mt-8">

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-primaryBlue transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-primaryBlue transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:contact@mufasadevelopers.com"
                className="p-3 rounded-xl bg-white/10 hover:bg-primaryBlue transition-all duration-300"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              AI Tools
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>AI Profile Analyzer</li>
              <li>SEO Optimizer</li>
              <li>Proposal Generator</li>
              <li>History Dashboard</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Platform
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>Modern Dashboard</li>
              <li>AI-Powered Workflow</li>
              <li>Secure Authentication</li>
              <li>Powered by Supabase</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Gigora. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Built with React • Tailwind CSS • Supabase
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;