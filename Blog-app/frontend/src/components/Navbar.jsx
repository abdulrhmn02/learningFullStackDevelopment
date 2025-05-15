import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Menu, X } from "lucide-react"; // or HeroIcons if you prefer

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = (path) =>
    `block py-2 px-4 hover:text-blue-400 transition ${
      location.pathname === path ? "text-blue-400 font-semibold" : ""
    }`;

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="w-full px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">
          MyBlogApp
        </Link>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className={navLinkClass("/")}>Home</Link>
          <Link to="/blogs" className={navLinkClass("/blogs")}>All Blogs</Link>
          {!user ? (
            <>
              <Link to="/register" className={navLinkClass("/register")}>Register</Link>
              <Link to="/login" className={navLinkClass("/login")}>Login</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className={navLinkClass("/dashboard")}>Dashboard</Link>
              <Link to="/blogs/create" className={navLinkClass("/blogs/create")}>Create Blog</Link>
              <button onClick={logout} className="text-red-400 hover:underline">Logout</button>
            </>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col items-start p-4 gap-2">
            <Link to="/" className={navLinkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/blogs" className={navLinkClass("/blogs")} onClick={() => setMenuOpen(false)}>All Blogs</Link>
            {!user ? (
              <>
                <Link to="/register" className={navLinkClass("/register")} onClick={() => setMenuOpen(false)}>Register</Link>
                <Link to="/login" className={navLinkClass("/login")} onClick={() => setMenuOpen(false)}>Login</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className={navLinkClass("/dashboard")} onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <Link to="/blogs/create" className={navLinkClass("/blogs/create")} onClick={() => setMenuOpen(false)}>Create Blog</Link>
                <button onClick={() => { logout(); setMenuOpen(false); }} className="text-red-400 hover:underline">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
