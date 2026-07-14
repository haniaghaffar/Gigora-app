import React from "react";
import { User, Search, FileText } from "lucide-react";

function SolutionSection() {
  const features = [
    {
      icon: <User size={40} className="text-blue-700" />,
      title: "Profile Analyzer",
      description:
        "Analyze and improve your freelancer profile with AI-powered recommendations.",
    },
    {
      icon: <Search size={40} className="text-blue-700" />,
      title: "Gig SEO",
      description:
        "Optimize your gig title, description, and keywords to rank higher in search.",
    },
    {
      icon: <FileText size={40} className="text-blue-700" />,
      title: "Proposal Generator",
      description:
        "Create professional, personalized proposals in seconds with AI.",
    },
  ];

  return (
        <section id="features" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Our AI Solutions
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Gigora helps freelancers stand out with powerful AI tools designed to
          increase visibility and win more projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="mb-5">{feature.icon}</div>

              <h3 className="text-2xl font-semibold text-slate-800">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;