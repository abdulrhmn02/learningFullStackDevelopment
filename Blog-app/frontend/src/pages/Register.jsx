import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const res = await axios.post("/auth/register", form);
  //     login(res.data.user, res.data.token); // save user and token
  //     toast.success("Registered successfully! 🎉", {
  //       position: "top-center",
  //       autoClose: 3000,
  //     });
  //     navigate("/login");
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Something went wrong");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const res = await axios.post("/auth/register", form);
  
      // ✅ Optional: log the response to check what you receive
      console.log(res.data); 
  
      // ✅ Show toast notification
      toast.success("Registered successfully! Please login ✨", {
        position: "top-center",
        autoClose: 3000,
      });
  
      // ✅ Redirect to login page
      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      setError(msg);
      toast.error(msg, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
