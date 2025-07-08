import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    console.log("Logging in with", formData);

    // Add login logic (API call) here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-sans px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Login to Moveex</h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-700 font-medium hover:underline">
            Sign up
          </a>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center cursor-pointer">
            f
          </div>
          <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center cursor-pointer">
            in
          </div>
          <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center cursor-pointer">
            🐦
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
