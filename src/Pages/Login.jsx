import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch(
        "https://charity-minds-backend.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token for authenticated requests
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message || "Invalid credentials!");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Server error! Please try again later.");
    }
  };

  return (
    <div className="bg-gray-500 h-screen">
      {/* Hamburger Menu */}
      <button
        className="md:hidden focus:outline-none p-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-amber-700 text-white p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Login Form */}
      <div className="w-full max-w-md mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl text-gray-700 text-center font-bold mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm block font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm block font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password..."
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full text-white bg-amber-700 rounded-lg py-2 transition hover:bg-amber-800"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <Link
              to="/register"
              className="text-blue-600 hover:underline text-sm"
            >
              Don't have an account? Register.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
