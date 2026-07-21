import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (

    <div className="flex h-screen overflow-hidden">


      {/* Mobile Menu Button */}

      <button

        onClick={() => setSidebarOpen(true)}

        className="
        md:hidden
        fixed
        top-4
        left-4
        z-50
        bg-primaryBlue
        text-white
        p-2
        rounded-lg
        shadow-lg
        "

      >

        <Menu size={24}/>

      </button>





      {/* Sidebar */}

      <Sidebar

        open={sidebarOpen}

        setOpen={setSidebarOpen}

      />





      {/* Content */}

      <div className="flex-1 flex flex-col overflow-hidden">


        <main
          className="
          flex-1
          overflow-y-auto
          p-4
          sm:p-6
          "
        >

          <Outlet />

        </main>


      </div>


    </div>

  );

};


export default DashboardLayout;