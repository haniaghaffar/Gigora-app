import { useState } from "react";
import Button from "../components/Button";
import { supabase } from "../services/supabase";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();
const [toastType, setToastType] = useState("success");



  const handleSignup = async () => {
  if (!name || !email || !password) {
    setToastType("error");
    setToastMessage("Please fill all fields");
    return;
  }

  setLoading(true);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  setLoading(false);

  if (error) {
    setToastType("error");
    setToastMessage(error.message);
  } else {
    setToastType("success");
    setToastMessage("Signup successful! Please verify your email.");

    setName("");
    setEmail("");
    setPassword("");

    setTimeout(() => {
navigate("/login");    }, 2000);
  }
};

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center px-20 bg-gradient-to-br from-blue-700 to-blue-500 text-white">

        <h1 className="text-5xl font-bold leading-tight">
          Welcome to
          <br />
          Gigora
        </h1>

        <p className="mt-6 text-lg text-blue-100 leading-8">
          Join thousands of freelancers using AI to create
          winning proposals, optimize gigs and grow faster.
        </p>

        <div className="mt-14 space-y-5">

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <span>AI Proposal Generator</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <span>Gig SEO Optimizer</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <span>Profile Analyzer</span>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-gray-50 px-6 py-12">

        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center mb-8">

            <h2 className="text-4xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-3 text-gray-500">
              Start your freelancing journey with AI
            </p>

          </div>

          <div className="space-y-3">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
                        <Button
              onClick={handleSignup}
              disabled={loading}
              className="w-full h-12 rounded-xl text-lg"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>

            <div className="relative py-2">
              <div className="border-t border-gray-300"></div>

              <span className="absolute left-1/2 -translate-x-1/2 -top-1 bg-white px-3 text-gray-400 text-sm">
                OR
              </span>
            </div>

            <button
              type="button"
              className="w-full h-12 rounded-xl border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />

              Continue with Google
            </button>

            <p className="text-center text-gray-500 mt-6">
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
  onClose={() => setToastMessage("")}
/>
    </div>
  );
}

export default Signup;