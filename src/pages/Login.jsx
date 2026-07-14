function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFF6FF]">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-center mb-6 text-[#1E3A5F]">
          Intern Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded mb-4 placeholder-[#6B7280]"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded mb-4 placeholder-[#6B7280]"
        />

        <button className="w-full bg-[#1A56DB] text-white p-3 rounded">
          Login
        </button>

        <button className="w-full border border-[#1A56DB] text-[#1A56DB] p-3 rounded mt-4">
          Continue with Google
        </button>

        <p className="text-center mt-5 text-sm text-[#6B7280]">
          Don't have an account?{" "}
          <a
            href="/#/signup"
            className="text-[#1A56DB] font-medium hover:text-[#1E3A5F]"
          >
            Signup
          </a>
        </p>

      </div>

    </div>
  );
}

export default Login;