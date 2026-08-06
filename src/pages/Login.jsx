import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import Button from "../components/Button";
import Toast from "../components/Toast";
import { supabase } from "../services/supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");


  const handleLogin = async () => {

    if (!email.trim() || !password) {

      setToastType("error");
      setToastMessage("Please enter email and password.");
      return;

    }


    try {

      setLoading(true);


      const { error } = await supabase.auth.signInWithPassword({

        email: email.trim(),
        password,

      });


      if (error) throw error;


      setToastType("success");
      setToastMessage("Login successful!");


      setTimeout(() => {

        navigate("/dashboard", {
          replace: true,
        });

      }, 1000);



    } catch (err) {

      setToastType("error");
      setToastMessage(
        err.message || "Login failed. Please try again."
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="min-h-screen grid lg:grid-cols-2">


      {/* Left */}

      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white px-20">


        <h1 className="text-5xl font-bold mb-6">
          Welcome Back
        </h1>


        <p className="text-blue-100 text-lg leading-8">
          Login to continue using Gigora AI tools and manage your freelancer workflow.
        </p>



        <div className="mt-12 space-y-5">

          {[
            "AI Proposal Generator",
            "Gig SEO Optimizer",
            "Profile Analyzer",
          ].map((item)=>(

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <div className="w-3 h-3 rounded-full bg-white"></div>

              <span>{item}</span>

            </div>

          ))}

        </div>


      </div>




      {/* Right */}

      <div className="flex items-center justify-center bg-gray-50 px-6">


        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">


          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold">
              Sign In
            </h2>


            <p className="text-gray-500 mt-2">
              Continue your freelancer journey
            </p>

          </div>



          <div className="space-y-5">


            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              onKeyDown={(e)=>e.key==="Enter" && handleLogin()}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />



            <div className="relative">


              <input
                type={showPassword ? "text":"password"}
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                onKeyDown={(e)=>e.key==="Enter" && handleLogin()}
                className="w-full h-12 px-4 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />



              <button
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500"
              >

                {
                  showPassword
                  ? <EyeOff size={20}/>
                  : <Eye size={20}/>
                }

              </button>


            </div>



            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full h-12 rounded-xl"
            >

              {
                loading
                ? "Signing In..."
                : "Login"
              }

            </Button>




            <p className="text-center text-gray-500">

              Don't have an account?{" "}


              <Link
                to="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>


            </p>


          </div>


        </div>


      </div>



      {
        toastMessage && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={()=>setToastMessage("")}
          />
        )
      }


    </div>

  );

}


export default Login;