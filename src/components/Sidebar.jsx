import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";

import {
  LayoutDashboard,
  UserSearch,
  Search,
  FileText,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Profile Analyzer",
      path: "/dashboard/profile-analyzer",
      icon: UserSearch,
    },
    {
      name: "Gig SEO",
      path: "/dashboard/gig-seo",
      icon: Search,
    },
    {
      name: "Proposal Generator",
      path: "/dashboard/proposal-generator",
      icon: FileText,
    },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-darkNavy text-white p-6 flex flex-col justify-between shadow-xl">
      {/* Top */}
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center tracking-wider">
          Gigora
        </h2>

        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-200 transition-all duration-200 hover:bg-white/10 hover:text-white hover:translate-x-1"
              >
                <Icon size={20} strokeWidth={2} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-white/20 pt-5">
        <div className="mb-4">
          <p className="font-semibold">
            {user?.user_metadata?.name || "Freelancer"}
          </p>

          <p className="text-sm text-gray-300 truncate">
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white transition-all duration-200"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}