import React, { useEffect, useState } from "react";
import axios from "../api/axios"; // make sure baseURL is set
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const res = await axios.get("/blogs/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user's blogs:", err);
        setError("Failed to load your blogs.");
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, [token]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete blog.");
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Your Blogs</h2>
      {blogs.length === 0 ? (
        <p>You have not created any blogs yet.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="border-b pb-4 mb-4">
            <Link
              to={`/blogs/${blog._id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {blog.title}
            </Link>
            <p className="text-gray-600 text-sm">
              by {blog.author?.username || "Unknown Author"}
            </p>
            <p className="mt-2 text-gray-800">
              {blog.content.length > 150
                ? blog.content.slice(0, 150) + "..."
                : blog.content}
            </p>
            <div className="mt-2 flex gap-4">
              <button
                onClick={() => navigate(`/blogs/${blog._id}/edit`)}
                className="text-sm text-yellow-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
