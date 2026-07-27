import React from "react";
import { Outlet } from "react-router-dom";
// Dashboard layout – global Navbar provided by MainLayout

const DashboardLayout = () => {

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );

};


export default DashboardLayout;