import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Lock } from 'lucide-react';
import UpgradeModal from '../components/UpgradeModal';
import { useAuth } from '../context/AuthContext';

const Features = () => {
  const { user } = useAuth();
  const isPro = user?.user_metadata?.plan?.toLowerCase() === 'pro';
  const [showUpgrade, setShowUpgrade] = useState(false);

  const handleFeatureClick = (e, requiresPro) => {
    if (requiresPro && !isPro) {
      e.preventDefault();
      setShowUpgrade(true);
    }
  };

  const featureList = [
    { title: 'AI Profile Analyzer', desc: 'Instantly evaluate and improve your freelancer profile.', icon: <Sparkles size={24} />, pro: false },
    { title: 'AI Gig SEO Optimizer', desc: 'Boost gig visibility with AI‑generated SEO.', icon: <Sparkles size={24} />, pro: false },
    { title: 'AI Proposal Generator', desc: 'Create winning proposals in seconds.', icon: <Sparkles size={24} />, pro: false },
    { title: 'Dashboard Analytics', desc: 'Track performance metrics at a glance.', icon: <Sparkles size={24} />, pro: true },
    { title: 'History Tracking', desc: 'Keep a record of all AI generated content.', icon: <Sparkles size={24} />, pro: false },
    { title: 'One‑click Copy', desc: 'Copy results instantly with a single click.', icon: <Sparkles size={24} />, pro: false },
    { title: 'Download Proposals', desc: 'Export proposals as PDF or DOCX.', icon: <Sparkles size={24} />, pro: true },
    { title: 'Fast AI Responses', desc: 'Low latency, high quality outputs.', icon: <Sparkles size={24} />, pro: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-extrabold text-primaryBlue mb-4">Gigora Features</h1>
        <p className="text-lg text-graySub mb-6">
          Empower your freelance workflow with AI‑driven tools, analytics, and seamless publishing.
        </p>
        <Link
          to="/pricing"
          className="inline-block px-8 py-3 bg-primaryBlue text-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Get Started
        </Link>
      </section>

      {/* Main Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mb-16">
        {featureList.map((item) => (
          <div
            key={item.title}
            className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow hover:-translate-y-1"
            onClick={(e) => handleFeatureClick(e, item.pro)}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 rounded-full mr-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600 mb-2">{item.desc}</p>
            {item.pro && !isPro && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-xl cursor-pointer" onClick={(e) => { e.stopPropagation(); setShowUpgrade(true); }}>
                <Lock size={48} className="text-green-600" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-primaryBlue text-center mb-8">How It Works</h2>
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
      <section className="bg-lightBlue py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primaryBlue text-center mb-8">Why Choose Gigora</h2>
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

      

      {/* Upgrade Modal */}
      <UpgradeModal isOpen={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </div>
  );
};

export default Features;
