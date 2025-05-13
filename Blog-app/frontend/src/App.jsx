import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BlogList from "./pages/Blogs/BlogList";
import CreateBlog from "./pages/Blogs/CreateBlog";
import BlogDetails from "./pages/Blogs/BlogDetails";
import EditBlog from "./pages/Blogs/EditBlog";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/:id/edit" element={<EditBlog />} />
      </Routes>
    </div>
  );
}
