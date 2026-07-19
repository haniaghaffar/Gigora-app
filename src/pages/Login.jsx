import { useState } from "react";
import Button from "../components/Button";
import { supabase } from "../services/supabase";
import Toast from "../components/Toast";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setToastType("error");
      setToastMessage("Please enter email and password");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setToastType("error");
      setToastMessage(error.message);
    } else {
      setToastType("success");
      setToastMessage("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center px-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">

        <h1 className="text-5xl font-bold mb-6">
          Welcome Back to Gigora
        </h1>

        <p className="text-lg text-blue-100 leading-8">
          AI-powered tools to optimize gigs, generate proposals,
          and help freelancers win more projects.
        </p>

        <div className="mt-12 space-y-4">
          {[
            "AI Proposal Generator",
            "Gig SEO Optimizer",
            "Profile Analyzer",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full" />
              <p>{item}</p>
            </div>
          ))}
        </div>

      </div>


      {/* Right Side */}
      <div className="flex items-center justify-center px-6 py-12 bg-gray-50">

        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Sign In
            </h2>

            <p className="text-gray-500 mt-2">
              Continue your freelancer journey
            </p>
          </div>


          <div className="space-y-5">

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />


            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />


            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full h-12 rounded-xl"
            >
              {loading ? "Signing In..." : "Login"}
            </Button>


            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-semibold"
              >
                Sign up
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

export default Login;