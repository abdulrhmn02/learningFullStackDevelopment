import React, { useEffect, useState } from "react";
import axios from "../../api/axios"; // assuming your axios base URL is set
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/blogs"); // since baseURL is /api
        setBlogs(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
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
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
