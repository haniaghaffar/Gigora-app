import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
/* If you have a Navbar component, uncomment the line below */
// import Navbar from "../components/Navbar";

const DashboardLayout = () => (
  <div className="flex h-screen">
    {/* Persistent sidebar */}
    <Sidebar />
    <div className="flex-1 flex flex-col">
      {/* Uncomment if a top navbar is needed */}
      {/* <Navbar /> */}
      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
    </div>
  </div>
);

export default DashboardLayout;
