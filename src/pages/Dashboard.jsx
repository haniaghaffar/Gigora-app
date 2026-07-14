import Sidebar from "../components/Sidebar";

function Dashboard() {
  const features = [
    {
      title: "Profile Analyzer",
      description:
        "Analyze your freelancer profile and get suggestions to improve your chances.",
    },
    {
      title: "Gig SEO",
      description:
        "Optimize your gig title, keywords, and description for better ranking.",
    },
    {
      title: "Proposal Generator",
      description:
        "Generate professional proposals that help you win more projects.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome, Intern 👋
        </h1>

        <p className="mt-3 text-gray-600">
          Use AI-powered tools to improve your freelancing success.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {feature.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>

              <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Open
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;