import { useState } from "react";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFF6FF]">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-center mb-6 text-[#1E3A5F]">
          Intern Signup
        </h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded mb-4 placeholder-[#6B7280]"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded mb-4 placeholder-[#6B7280]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded mb-4 placeholder-[#6B7280]"
        />

        <button
          onClick={() => {
            console.log({
              name,
              email,
              password
            });
          }}
          className="w-full bg-[#1A56DB] text-white p-3 rounded"
        >
          Signup
        </button>

        <p className="text-center mt-5 text-sm text-[#6B7280]">
          Already have an account?{" "}
          <a
            href="/#/login"
            className="text-[#1A56DB] font-medium hover:text-[#1E3A5F]"
          >
            Login
          </a>
        </p>

      </div>

    </div>
  );
}

export default Signup;