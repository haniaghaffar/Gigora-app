import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Button from "../components/Button";

function Dashboard() {
  const features = [
    {
      title: "Profile Analyzer",
      description: "Analyze your freelancer profile and get suggestions to improve your chances.",
      route: "/profile-analyzer",
    },
    {
      title: "Gig SEO",
      description: "Optimize your gig title, keywords, and description for better ranking.",
      route: "/gig-seo",
    },
    {
      title: "Proposal Generator",
      description: "Generate professional proposals that help you win more projects.",
      route: "/proposal-generator",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((feature) => (
            <Card key={feature.title} className="transform hover:-translate-y-1 transition-shadow duration-200 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800">{feature.title}</h2>
              <p className="mt-3 text-gray-600">{feature.description}</p>
              <Button className="mt-5" onClick={() => (window.location.href = feature.route)}>
                Open
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;