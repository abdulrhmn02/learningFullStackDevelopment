// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
//       <h1 className="font-bold text-xl">MyBlog</h1>
//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/blogs">All Blogs</Link>
        
//       </div>
//     </nav>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">
        <Link to="/">MyBlogApp</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/blogs">All Blogs</Link>

        {!user && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blogs/create">Create Blog</Link>
            <button onClick={logout} className="text-red-400 hover:underline">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

