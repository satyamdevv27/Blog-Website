/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
export default function Login() {
  const { user , setUser  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // Connect your login API here
   try {
  const response = await axios.post(
    "http://localhost:5000/api/auth/login",
    formData
  );

  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data.user));

  // Update the context immediately
  setUser(response.data.user);

  toast.success("Login successful");
  navigate("/");
} catch (error) {
  console.log(error);
  toast.error(error.response.data.message);
}
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}

      <header className="border-b">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          <Link to="/" className="text-3xl font-serif font-bold tracking-tight">
            Blogify
          </Link>

          <Link to="/register" className="text-sm font-medium hover:underline">
            Create Account
          </Link>
        </div>
      </header>

      {/* Main */}

      <main className="flex-1 flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-serif text-center">Welcome back.</h1>

          <p className="text-center text-gray-500 mt-4 mb-10">
            Sign in to continue your writing journey.
          </p>

          {/* Google Login */}

          <button className="w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Divider */}

          <div className="relative my-8">
            <div className="border-t"></div>

            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-400">
              OR
            </span>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}

            <div>
              <label className="text-sm font-medium">Email</label>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}

            <div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Password</label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-500 hover:text-black hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-black"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-neutral-800 transition duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Bottom */}

          <p className="text-center text-gray-600 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-black hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
