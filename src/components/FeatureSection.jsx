import React from "react";

function FeatureSection() {
  const features = [
    {
      title: "AI Profile Analyzer",
      description:
        "Get AI-powered insights to improve your freelancer profile.",
      icon: "🧭",
    },
    {
      title: "Gig SEO Optimizer",
      description:
        "Boost your gig visibility with AI-powered keyword and title optimization.",
      icon: "🔍",
    },
    {
      title: "Proposal Generator",
      description:
        "Generate professional proposals that help you win more freelance projects.",
      icon: "✍️",
    },
    {
      title: "Smart Dashboard",
      description:
        "Manage all your AI tools from one clean and organized dashboard.",
      icon: "📊",
    },
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F]">
            What We Offer
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[#6B7280] text-lg">
            Powerful AI tools designed to help freelancers optimize their
            profiles, improve gig SEO, and generate winning proposals.
          </p>
        </div>

        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#EFF6FF] rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#1A56DB] flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E3A5F] text-center">
                {feature.title}
              </h3>

              <p className="mt-4 text-center text-[#6B7280] leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeatureSection;