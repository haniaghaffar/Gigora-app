function Sidebar() {
  const menuItems = [
    {
      name: "Profile Analyzer",
      path: "/#/dashboard/profile-analyzer",
    },
    {
      name: "Gig SEO",
      path: "/#/dashboard/gig-seo",
    },
    {
      name: "Proposal Generator",
      path: "/#/dashboard/proposal-generator",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-8">
        Gigora
      </h2>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="block px-4 py-3 rounded-lg transition text-gray-600 hover:bg-gray-100"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;