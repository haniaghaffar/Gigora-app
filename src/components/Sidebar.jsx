import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft } from "lucide-react";

import {
  LayoutDashboard,
  UserRoundSearch,
  SearchCheck,
  FilePenLine,
  LogOut,
  Sparkles,
  UserCircle2,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
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
      icon: UserRoundSearch,
    },
    {
      name: "Gig SEO",
      path: "/dashboard/gig-seo",
      icon: SearchCheck,
    },
    {
      name: "Proposal Generator",
      path: "/dashboard/proposal-generator",
      icon: FilePenLine,
    },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-darkNavy text-white p-6 flex flex-col justify-between shadow-2xl">
        <Link
      
        to="/"
        className="flex items-center gap-1 px-4 py-3 mb-6 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
      >
        <ArrowLeft size={14} />
        {/* <span className="font-small">Back</span> */}
      </Link>
      {/* Logo */}
      <div>
        <div className="flex items-center justify-center gap-2 mb-10">
          <Sparkles className="text-yellow-400" size={28} />
          <h2 className="text-3xl font-extrabold tracking-wide">
            Gigora
          </h2>
        </div>
        {/* Navigation */}
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                  ? "bg-primaryBlue text-white shadow-lg"
                  : "text-gray-300 hover:bg-white/10 hover:text-white hover:translate-x-1"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Section */}
      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full bg-primaryBlue flex items-center justify-center">
            <UserCircle2 size={30} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              {user?.user_metadata?.name || "Freelancer"}
            </h3>

            <p className="text-xs text-gray-400">
              AI Freelancer
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}