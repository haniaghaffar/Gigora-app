import React from "react";
import { Link } from "react-router-dom";

// Sidebar with dark gradient and glassmorphism styling
export default function Sidebar() {
  const menuItems = [
    { name: "Profile Analyzer", path: "/dashboard/profile-analyzer" },
    { name: "Gig SEO", path: "/dashboard/gig-seo" },
    { name: "Proposal Generator", path: "/dashboard/proposal-generator" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-darkNavy text-white p-6 backdrop-blur-md shadow-xl rounded-r-lg">
      <h2 className="text-2xl font-bold mb-10 text-center tracking-wider">Gigora</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white hover:bg-opacity-10 hover:shadow-md"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}