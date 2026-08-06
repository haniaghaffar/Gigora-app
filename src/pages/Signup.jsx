import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, RefreshCw } from "lucide-react";

import Button from "../components/Button";
import Toast from "../components/Toast";
import { supabase } from "../services/supabase";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");


  // Generate Strong Password
  const generatePassword = () => {
    const newPassword =
      "Gigora@" +
      Math.floor(Math.random() * 9000 + 1000) +
      "A";

    setPassword(newPassword);
    setConfirmPassword(newPassword);
  };


  // Password Validation
  const validatePassword = () => {

    if (password.length < 8) {
      return "Password must be at least 8 characters.";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain uppercase letter.";
    }

    if (!/[a-z]/.test(password)) {
      return "Password must contain lowercase letter.";
    }

    if (!/[0-9]/.test(password)) {
      return "Password must contain a number.";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain special character.";
    }

    return null;
  };


  // Signup Function
  const handleSignup = async () => {

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {

      setToastType("error");
      setToastMessage("Please fill all fields.");
      return;

    }


    if (password !== confirmPassword) {

      setToastType("error");
      setToastMessage("Passwords do not match.");
      return;

    }


    const validationError = validatePassword();


    if (validationError) {

      setToastType("error");
      setToastMessage(validationError);
      return;

    }


    try {

      setLoading(true);


      const { error } = await supabase.auth.signUp({

        email: email.trim(),

        password,

        options: {
          data: {
            name: name.trim(),
          },
        },

      });


      if (error) throw error;


      setToastType("success");
      setToastMessage(
        "Account created successfully. Please verify your email."
      );


      setTimeout(() => {

        navigate("/login", { replace: true });

      }, 2000);



    } catch (err) {

      setToastType("error");
      setToastMessage(err.message);


    } finally {

      setLoading(false);

    }

  };
    return (
    <div className="min-h-screen grid lg:grid-cols-2">


      {/* Left Side */}

      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white px-20">


        <h1 className="text-5xl font-bold mb-6">
          Create Account
        </h1>


        <p className="text-blue-100 text-lg leading-8">
          Join Gigora AI and improve your freelance workflow with smart tools.
        </p>


        <div className="mt-12 space-y-5">

          {[
            "AI Proposal Generator",
            "Gig SEO Optimizer",
            "Profile Analyzer",
          ].map((item) => (

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



      {/* Right Side */}

      <div className="flex items-center justify-center bg-gray-50 px-6">


        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">


          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold">
              Sign Up
            </h2>

            <p className="text-gray-500 mt-2">
              Create your Gigora account
            </p>

          </div>



          <div className="space-y-5">


            {/* Name */}

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />



            {/* Email */}

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />



            {/* Password */}

            <div>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full h-12 px-4 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />


                <button
                  type="button"
                  onClick={()=>setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-500"
                >

                  {showPassword 
                    ? <EyeOff size={20}/> 
                    : <Eye size={20}/>
                  }

                </button>

              </div>


              <div className="flex justify-between items-center mt-2">

                <p className="text-xs text-gray-500">
                  8+ chars, uppercase, number & symbol
                </p>


                <button
                  type="button"
                  onClick={generatePassword}
                  className="text-sm text-blue-600 font-semibold flex items-center gap-1 hover:underline"
                >

                  <RefreshCw size={14}/>

                  Suggest

                </button>


              </div>


            </div>



            {/* Confirm Password */}

            <div className="relative">


              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                className="w-full h-12 px-4 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />


              <button
                type="button"
                onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-3 text-gray-500"
              >

                {showConfirmPassword 
                  ? <EyeOff size={20}/> 
                  : <Eye size={20}/>
                }

              </button>


            </div>



            {/* Button */}

            <Button
              onClick={handleSignup}
              disabled={loading}
              className="w-full h-12 rounded-xl"
            >

              {loading ? "Creating Account..." : "Create Account"}

            </Button>



            <p className="text-center text-gray-500">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>

            </p>


          </div>


        </div>


      </div>



      <Toast
        message={toastMessage}
        type={toastType}
        onClose={()=>setToastMessage("")}
      />


    </div>
  );
}


export default Signup;