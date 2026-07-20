import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";



export default function Navbar() {
    const { user  } = useContext(AuthContext);
    
  const token = localStorage.getItem("token");


  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-bold">
          Blogify
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-black text-gray-600 transition">
            Home
          </Link>

          <Link
            to="/blogs"
            className="hover:text-black text-gray-600 transition"
          >
            Blogs
          </Link>

          <Link
            to="/categories"
            className="hover:text-black text-gray-600 transition"
          >
            Categories
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden lg:flex items-center border rounded-full px-4 py-2">
            <FiSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none bg-transparent w-40"
            />
          </div>

          {token ? (
            <>
              <button>Write</button>

              <span>{user?.userName}</span>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
