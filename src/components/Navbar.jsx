import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Menu,
  X,
  Sparkles,
  UserCircle2,
} from "lucide-react";

import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../services/supabase";


function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false);

  const { user } = useAuth();

  const navigate = useNavigate();



  const scrollToSection = (id)=>{

    const section =
    document.getElementById(id);

    if(section){

      section.scrollIntoView({
        behavior:"smooth"
      });

    }

    setMenuOpen(false);

  };




  const handleLogout = async()=>{

    await supabase.auth.signOut();

    navigate("/");

    setMenuOpen(false);

  };




  const isPro =
  user?.user_metadata?.plan?.toLowerCase()
  === "pro";





  return (

    <nav
      className="
      sticky
      top-0
      z-50

      bg-white/90
      backdrop-blur-lg

      border-b
      border-gray-200

      "
    >



      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-8

        h-20

        flex
        items-center
        justify-between
        "
      >




        {/* LOGO */}


        <Link

          to="/"

          className="
          flex
          items-center
          gap-2

          text-2xl
          font-extrabold

          text-primaryBlue
          "

        >

          <Sparkles
            size={27}
            className="text-yellow-400"
          />

          Gigora


        </Link>







        {/* DESKTOP MENU */}


        <div
          className="
          hidden
          md:flex

          items-center

          gap-8
          "
        >



          <button

            onClick={() =>
              scrollToSection("features")
            }

            className="
            text-gray-600
            hover:text-primaryBlue
            font-medium
            transition
            "
          >

            Features

          </button>




          <button

            onClick={() =>
              scrollToSection("pricing")
            }

            className="
            text-gray-600
            hover:text-primaryBlue
            font-medium
            transition
            "
          >

            Pricing

          </button>





          {
            user ? (

              <>


              <Link

                to="/dashboard"

                className="
                px-5
                py-2

                rounded-full

                bg-blue-50

                text-primaryBlue

                font-semibold

                hover:bg-primaryBlue

                hover:text-white

                transition
                "

              >

                Dashboard

              </Link>






              <div
                className="
                flex
                items-center
                gap-2
                "
              >


                <UserCircle2

                  size={36}

                  className="
                  text-primaryBlue
                  "

                />



                <div>


                  <p
                    className="
                    text-sm
                    font-semibold
                    "
                  >

                    {
                      user?.user_metadata?.name
                      ||
                      "Freelancer"
                    }


                  </p>




                  {
                    isPro && (

                      <span
                        className="
                        text-xs

                        bg-yellow-100

                        text-yellow-700

                        px-2

                        py-0.5

                        rounded-full

                        font-semibold
                        "
                      >

                        PRO

                      </span>

                    )
                  }



                </div>


              </div>





              <button

                onClick={handleLogout}

                className="
                px-5
                py-2

                rounded-full

                border

                border-red-500

                text-red-500

                hover:bg-red-500

                hover:text-white

                transition
                "

              >

                Logout

              </button>



              </>


            ) : (


              <>


              <Link

                to="/login"

                className="
                text-gray-600
                hover:text-primaryBlue
                font-medium
                "
              >

                Login

              </Link>




              <Link to="/signup">

                <Button
                  className="
                  rounded-full
                  px-6
                  "
                >

                  Get Started

                </Button>

              </Link>



              </>


            )
          }




        </div>






        {/* MOBILE BUTTON */}


        <button

          className="
          md:hidden

          text-gray-700
          "

          onClick={()=>setMenuOpen(!menuOpen)}

        >

          {
            menuOpen

            ?

            <X size={28}/>

            :

            <Menu size={28}/>
          }


        </button>




      </div>








      {/* MOBILE MENU */}



      {
        menuOpen && (


          <div

            className="
            md:hidden

            bg-white

            border-t

            px-6

            py-6

            space-y-5

            "

          >




            <button

              onClick={() =>
                scrollToSection("features")
              }

              className="
              block
              text-gray-700
              font-medium
              "
            >

              Features

            </button>





            <button

              onClick={() =>
                scrollToSection("pricing")
              }

              className="
              block
              text-gray-700
              font-medium
              "
            >

              Pricing

            </button>






            {
              user ? (

                <>


                <Link

                  to="/dashboard"

                  onClick={() =>
                    setMenuOpen(false)
                  }

                  className="
                  block
                  text-primaryBlue
                  font-semibold
                  "

                >

                  Dashboard

                </Link>





                <div
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >

                  <UserCircle2
                    size={35}
                    className="text-primaryBlue"
                  />

                  <div>

                    <p className="font-semibold">

                      {
                        user?.user_metadata?.name
                        ||
                        "Freelancer"
                      }

                    </p>


                    {
                      isPro &&
                      <span className="
                      text-xs
                      bg-yellow-100
                      text-yellow-700
                      px-2
                      rounded-full
                      ">
                        PRO
                      </span>
                    }


                  </div>


                </div>





                <button

                  onClick={handleLogout}

                  className="
                  text-red-500
                  font-semibold
                  "

                >

                  Logout

                </button>


                </>


              ) : (


                <>


                <Link

                  to="/login"

                  onClick={() =>
                    setMenuOpen(false)
                  }

                >

                  Login

                </Link>





                <Link

                  to="/signup"

                  onClick={() =>
                    setMenuOpen(false)
                  }

                >

                  <Button
                    className="
                    w-full
                    rounded-full
                    "
                  >

                    Get Started

                  </Button>


                </Link>


                </>


              )
            }



          </div>


        )
      }




    </nav>

  );

}


export default Navbar;