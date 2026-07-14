import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
          Win Every Gig <span className="text-blue-700">with AI</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Optimize your freelancer profile, improve gig SEO, and generate
          winning proposals with powerful AI tools designed to help you
          succeed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link to="/dashboard">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Get Started Free
            </button>
          </Link>

          <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
            Watch Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;