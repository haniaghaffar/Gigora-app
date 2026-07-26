import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Gigora Features
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Empower your freelance workflow with AI‑driven tools, analytics, and seamless publishing.
        </p>
        <Link
          to="/pricing"
          className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Get Started
        </Link>
      </section>

      {/* Main Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mb-16">
        {[
          { title: 'AI Profile Analyzer', desc: 'Instantly evaluate and improve your freelancer profile.', icon: <Sparkles size={24} /> },
          { title: 'AI Gig SEO Optimizer', desc: 'Boost gig visibility with AI‑generated SEO.', icon: <Sparkles size={24} /> },
          { title: 'AI Proposal Generator', desc: 'Create winning proposals in seconds.', icon: <Sparkles size={24} /> },
          { title: 'Dashboard Analytics', desc: 'Track performance metrics at a glance.', icon: <Sparkles size={24} /> },
          { title: 'History Tracking', desc: 'Keep a record of all AI generated content.', icon: <Sparkles size={24} /> },
          { title: 'One‑click Copy', desc: 'Copy results instantly with a single click.', icon: <Sparkles size={24} /> },
          { title: 'Download Proposals', desc: 'Export proposals as PDF or DOCX.', icon: <Sparkles size={24} /> },
          { title: 'Fast AI Responses', desc: 'Low latency, high quality outputs.', icon: <Sparkles size={24} /> },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 rounded-full mr-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Upload / Paste Information', desc: 'Provide your gig description, profile data or any text.' },
            { step: '2', title: 'AI Generates Results', desc: 'Our models instantly produce SEO, proposals, and analytics.' },
            { step: '3', title: 'Improve & Download', desc: 'Fine‑tune, copy or download the output for immediate use.' },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primaryBlue mb-2">{s.step}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Gigora */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Gigora</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Save Time', desc: 'Automate repetitive tasks and focus on clients.' },
              { title: 'Better Freelance Profile', desc: 'Optimize your profile to attract more buyers.' },
              { title: 'Higher Conversion', desc: 'AI‑crafted proposals increase win rates.' },
              { title: 'Professional Proposals', desc: 'Polished, ready‑to‑send documents.' },
              { title: 'SEO Optimization', desc: 'Rank higher in search results instantly.' },
              { title: 'Modern AI Workflow', desc: 'Stay ahead with cutting‑edge technology.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Supercharge Your Freelance Business?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link
            to="/pricing"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
          <Link
            to="/pricing"
            className="px-8 py-3 bg-white text-primaryBlue border border-primaryBlue rounded-full shadow hover:bg-primaryBlue hover:text-white transition"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
