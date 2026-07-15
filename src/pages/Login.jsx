import React from "react";
import Button from "../components/Button";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-6 text-primaryBlue">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 
          text-gray-800 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 
          text-gray-800 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
        />

        <Button className="w-full mb-4">
          Login
        </Button>

<Button
  variant="secondary"
  className="w-full flex items-center justify-center gap-3"
>
  <svg
    className="w-5 h-5 flex-shrink-0"
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#4285F4" d="M533.5 278.4c0-17.5-1.5-34.4-4.3-50.7H272v95.8h146.9c-6.3 33.8-25.4 62.4-54 81.4v67.8h87.1c51-47 80.5-116.4 80.5-194.3"/>
    <path fill="#34A853" d="M272 544.3c73 0 134.3-24.2 179-65.7l-87.1-67.8c-24.2 16.3-55 25.9-91.9 25.9-70.7 0-130.6-47.6-152-111.6h-89v70.2c44.9 89.2 136.9 149.9 241 149.9"/>
    <path fill="#FBBC05" d="M120 324.1c-10.5-31.5-10.5-65.6 0-97.1v-70.2h-89c-38.5 75.3-38.5 164.9 0 240.2l89-72.9"/>
    <path fill="#EA4335" d="M272 107.5c39.6-.6 77.8 14.5 106.6 42.4l79.8-79.8C410.9 22.9 342.7-1.1 272 0 168 0 76 60.7 31 149.9l89 70.2c21.4-64 81.3-111.6 152-111.6"/>
  </svg>

  <span>Continue with Google</span>
</Button>

        <p className="text-center mt-5 text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/#/signup"
            className="text-primaryBlue font-medium hover:underline"
          >
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;