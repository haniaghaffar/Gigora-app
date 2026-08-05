import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-darkNavy text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">


          {/* Brand */}

          <div>

            <Link
              to="/"
              className="flex items-center gap-2"
            >

              <Sparkles
                size={26}
                className="text-yellow-400"
              />

              <h2 className="text-2xl font-bold">
                Gigora
              </h2>

            </Link>


            <p className="text-gray-300 mt-4 text-sm leading-6">
              AI-powered tools for freelancers to optimize gigs,
              profiles, and proposals.
            </p>


            <div className="flex gap-3 mt-5">


              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-primaryBlue transition"
              >
                <FaGithub size={18}/>
              </a>


              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-primaryBlue transition"
              >
                <FaLinkedin size={18}/>
              </a>


              <a
                href="mailto:support@gigora.com"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-primaryBlue transition"
              >
                <Mail size={18}/>
              </a>


            </div>


          </div>





          {/* AI Tools */}

          <div>

            <h3 className="font-semibold mb-4">
              AI Tools
            </h3>


            <ul className="space-y-3 text-gray-300 text-sm">

              <li>
                <Link to="/dashboard/profile-analyzer">
                  Profile Analyzer
                </Link>
              </li>

              <li>
                <Link to="/dashboard/gig-seo">
                  Gig SEO
                </Link>
              </li>

              <li>
                <Link to="/dashboard/proposal-generator">
                  Proposal Generator
                </Link>
              </li>

            </ul>

          </div>





          {/* Platform */}

          <div>

            <h3 className="font-semibold mb-4">
              Platform
            </h3>


            <ul className="space-y-3 text-gray-300 text-sm">

              <li>AI Workflow</li>
              <li>Secure Auth</li>
              <li>Smart Dashboard</li>

            </ul>

          </div>


        </div>




        <div className="border-t border-white/10 mt-8 pt-5 text-center text-gray-400 text-sm">

          © 2026 Gigora. All rights reserved.

        </div>


      </div>

    </footer>

  );
}

export default Footer;