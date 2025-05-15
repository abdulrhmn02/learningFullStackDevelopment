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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  return (
    // w-full px-4 sm:px-6 md:px-8
    <div className="max-w-4xl mx-auto ">
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
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      /> */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        progressClassName="custom-progress-bar"
      />
    </div>
  );
}
// https://mui.com/material-ui/getting-started/templates/blog/