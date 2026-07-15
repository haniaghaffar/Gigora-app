import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Button from "../components/Button";

function Dashboard() {

  const features = [
    {
      title: "Profile Analyzer",
      description:
        "Analyze your freelancer profile and receive AI-powered suggestions to improve your profile.",
      route: "/profile-analyzer",
    },
    {
      title: "Gig SEO Optimizer",
      description:
        "Optimize your gig title, keywords, and description to improve search visibility.",
      route: "/gig-seo",
    },
    {
      title: "Proposal Generator",
      description:
        "Generate professional proposals that help you win more freelance projects.",
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
          Dashboard
        </h1>

        <p className="mt-3 text-gray-600 max-w-2xl">
          Access AI-powered tools to optimize your freelancer profile,
          improve gig SEO, and create winning proposals—all from one
          dashboard.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {feature.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>

              <Button className="mt-5">
  Launch Tool
</Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;