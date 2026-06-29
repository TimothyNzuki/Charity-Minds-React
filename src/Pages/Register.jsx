import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const res = await fetch(
        "https://charity-minds-backend.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (res.ok) {
        alert("Registration successful!");
        navigate("/login");
        console.log("Response status:", res.status);
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Registration failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="bg-gray-400 flex-col min-h-screen">
      {/* Hamburger Menu */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6L12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-amber-700 text-white p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Form */}
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl text-center text-black mb-6 font-bold">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                onChange={handleChange}
                value={formData.firstName}
                className="w-full border rounded-lg p-2"
                required
              ></input>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                onChange={handleChange}
                value={formData.lastName}
                className="w-full border rounded-lg p-2"
                required
              ></input>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                User Name
              </label>
              <input
                id="username"
                type="text"
                onChange={handleChange}
                value={formData.username}
                className="w-full border rounded-lg p-2"
                required
              ></input>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full border rounded-lg p-2"
                required
              ></input>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                onChange={handleChange}
                value={formData.phone}
                className="w-full border rounded-lg p-2"
                required
              ></input>
            </div>

            <div>
              <label
                htmlFor="dob"
                className="block text-gray-700 font-semibold mb-2"
              >
                Date Of Birth
              </label>
              <input
                id="dob"
                type="date"
                onChange={handleChange}
                value={formData.dob}
                className="w-full border rounded-lg p-2"
                required
              ></input>
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-gray-700 font-semibold mb-2"
              >
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="">--Select Gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                onChange={handleChange}
                value={formData.password}
                className="w-full border rounded-lg p-2"
                required
              ></input>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                onChange={handleChange}
                value={formData.confirmPassword}
                className="w-full border rounded-lg p-2"
                required
              ></input>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-800 rounded-lg py-3 px-6 text-white font-semibold shadow"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
