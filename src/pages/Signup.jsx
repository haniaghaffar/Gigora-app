import { useState } from "react";
import Button from "../components/Button";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg border border-gray-200">

        <h1 className="text-3xl font-bold text-center mb-6 text-primaryBlue">
          Signup
        </h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
          w-full border border-gray-300 p-3 rounded-lg mb-4
          text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primaryBlue
          "
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
          w-full border border-gray-300 p-3 rounded-lg mb-4
          text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primaryBlue
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
          w-full border border-gray-300 p-3 rounded-lg mb-4
          text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primaryBlue
          "
        />

        <Button
          onClick={() => {
            console.log({ name, email, password });
          }}
          className="w-full mb-4"
        >
          Signup
        </Button>

        <p className="text-center mt-5 text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/#/login"
            className="text-primaryBlue font-medium hover:underline"
          >
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default Signup;