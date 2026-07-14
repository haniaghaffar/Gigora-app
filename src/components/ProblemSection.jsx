import React from "react";

function ProblemSection() {
  const problems = [
    {
      title: "No Clients",
      description:
        "Struggling to attract clients and grow your freelancing career.",
    },
    {
      title: "Gig Not Ranking",
      description:
        "Your gigs are not appearing in search results, reducing visibility.",
    },
    {
      title: "Proposals Rejected",
      description:
        "Sending proposals without getting replies or winning projects.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Common Problems Freelancers Face
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Many freelancers struggle to find clients, rank their gigs, and write
          proposals that convert.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">❌</div>

              <h3 className="text-2xl font-semibold text-slate-800">
                {problem.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;