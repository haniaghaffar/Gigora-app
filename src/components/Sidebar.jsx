import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";

import FreePlanBadge from "./FreePlanBadge";
import UpgradeModal from "./UpgradeModal";

import {
  LayoutDashboard,
  UserRoundSearch,
  SearchCheck,
  FilePenLine,
  LogOut,
  Sparkles,
  UserCircle2,
  ArrowLeft,
  X,
} from "lucide-react";


export default function Sidebar({ open = true, setOpen = () => {} }) {


  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();

  const [showUpgrade,setShowUpgrade] = useState(false);



  const menuItems = [

    {
      name:"Dashboard",
      path:"/dashboard",
      icon:LayoutDashboard,
    },

    {
      name:"Profile Analyzer",
      path:"/dashboard/profile-analyzer",
      icon:UserRoundSearch,
    },

    {
      name:"Gig SEO",
      path:"/dashboard/gig-seo",
      icon:SearchCheck,
    },

    {
      name:"Proposal Generator",
      path:"/dashboard/proposal-generator",
      icon:FilePenLine,
    },

  ];




  const handleLogout = async()=>{

    await supabase.auth.signOut();

    navigate("/login");

  };



  return (

    <>


    {/* Overlay Mobile */}

    {
      open &&

      <div
        onClick={()=>setOpen(false)}
        className="
        fixed
        inset-0
        bg-black/40
        z-40
        md:hidden
        "
      />

    }




    <aside

      className={`

      fixed
      md:static

      top-0
      left-0

      z-50

      w-64
      lg:w-72

      h-screen

      bg-darkNavy

      text-white

      p-6

      flex
      flex-col

      justify-between

      shadow-2xl

      transition-transform
      duration-300

      overflow-y-auto


      ${
        open
        ?
        "translate-x-0"
        :
        "-translate-x-full md:translate-x-0"
      }


      `}

    >




      {/* Close Mobile */}

      <button

        onClick={()=>setOpen(false)}

        className="
        md:hidden
        absolute
        right-5
        top-5
        "
      >

        <X size={24}/>

      </button>





      <div>


        {/* Back Home */}

        <Link

          to="/"

          className="
          flex
          items-center
          gap-2
          text-gray-300
          hover:text-white
          mb-8
          "

        >

          <ArrowLeft size={18}/>

          Back Home

        </Link>





        {/* Logo */}


        <div
          className="
          flex
          items-center
          justify-center
          gap-3
          mb-10
          "
        >

          <Sparkles
            className="text-yellow-400"
            size={28}
          />


          <h2 className="text-3xl font-bold">
            Gigora
          </h2>


        </div>





        {/* Menu */}


        <nav className="space-y-3">


          {
            menuItems.map((item)=>{


              const Icon=item.icon;


              const active =
              location.pathname === item.path;



              return (

                <Link

                  key={item.name}

                  to={item.path}

                  onClick={()=>setOpen(false)}


                  className={`
                  flex
                  items-center
                  gap-3

                  px-4
                  py-3

                  rounded-xl

                  transition


                  ${
                    active

                    ?

                    "bg-primaryBlue text-white shadow-lg"

                    :

                    "text-gray-300 hover:bg-white/10"
                  }

                  `}

                >


                  <Icon size={20}/>


                  <span className="font-medium">

                    {item.name}

                  </span>


                </Link>


              );


            })

          }


        </nav>



      </div>







      {/* Bottom Section */}


      <div
        className="
        border-t
        border-white/10
        pt-5
        space-y-4
        "
      >



        <div className="flex items-center gap-3">


          <div
            className="
            w-11
            h-11
            rounded-full
            bg-primaryBlue
            flex
            items-center
            justify-center
            "
          >

            <UserCircle2 size={28}/>

          </div>




          <div>

            <p className="font-semibold">

              {
                user?.user_metadata?.name
                ||
                "Freelancer"
              }

            </p>


            <p className="text-xs text-gray-400">

              AI Freelancer

            </p>


          </div>


        </div>





        <FreePlanBadge />



        <button

          onClick={()=>setShowUpgrade(true)}

          className="
          w-full
          py-3
          rounded-xl
          bg-primaryBlue
          font-semibold
          hover:opacity-90
          "

        >

          Upgrade to Pro 🚀

        </button>





        <button

          onClick={handleLogout}

          className="
          w-full
          flex
          items-center
          justify-center
          gap-2
          py-3
          rounded-xl
          bg-red-500/20
          text-red-300
          hover:bg-red-500
          hover:text-white
          "

        >

          <LogOut size={18}/>

          Logout


        </button>



      </div>





    </aside>





    <UpgradeModal

      isOpen={showUpgrade}

      onClose={()=>setShowUpgrade(false)}

    />


    </>

  );

}