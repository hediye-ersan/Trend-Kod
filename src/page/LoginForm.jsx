// LoginForm.js

import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const LoginForm = () => {
  const { state } = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Eğer yönlendirme ile gelen email ve password varsa, onları alıyoruz
  const [email, setEmail] = useState(state?.email || "");
  const [password, setPassword] = useState(state?.password || "");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      if (response.data?.token) {

        console.log("Login successful. Token:", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/");
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleLogin} className="login-form space-y-4 p-6 bg-gray-50 rounded-lg shadow-lg">
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Email</label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Password</label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
