import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import axios from "axios";
export default function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
      );
      toast.success("Registration successful!");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }

    console.log(formData);

    // TODO:
    // Connect your backend API here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}

      <header className="border-b">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          <Link to="/" className="text-3xl font-serif font-bold tracking-tight">
            Blogify
          </Link>

          <Link to="/login" className="text-sm font-medium hover:underline">
            Sign In
          </Link>
        </div>
      </header>

      {/* Main */}

      <main className="flex-1 flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-serif text-center">
            Create your account.
          </h1>

          <p className="text-center text-gray-500 mt-4 mb-10">
            Join Blogify and start sharing your stories.
          </p>

          {/* Google */}

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
            {/* Full Name */}

            <div>
              <label className="text-sm font-medium">user name</label>

              <input
                type="text"
                name="userName"
                placeholder="John Doe"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

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
              <label className="text-sm font-medium">Password</label>

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

            {/* Confirm Password */}

            <div>
              <label className="text-sm font-medium">Confirm Password</label>

              <div className="relative mt-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-black"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-neutral-800 transition duration-200"
            >
              Create Account
            </button>
          </form>

          {/* Bottom */}

          <p className="text-center text-gray-600 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-black hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
