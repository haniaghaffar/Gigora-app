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
    <section id="problems" className="bg-[#EFF6FF] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F]">
            Common Problems Freelancers Face
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B7280]">
            Many freelancers struggle to find clients, rank their gigs, and
            write proposals that convert. Gigora helps solve these challenges
            with AI-powered tools.
          </p>
        </div>

        <div className="grid gap-8 mt-14 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center text-3xl mb-6">
                ❌
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] text-center">
                {problem.title}
              </h3>

              <p className="mt-4 text-center text-[#6B7280] leading-7">
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