import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/blogs/${id}`);
        setBlog(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Blog not found.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      navigate("/blogs");
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;
  if (!blog) return null;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        by {blog.author?.username || "Unknown Author"}
      </p>
      <p className="text-lg text-gray-800 mb-6">{blog.content}</p>

      {user?.userId === blog.author?._id && (
        <div className="flex gap-4">
          <Link
            to={`/blogs/edit/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
