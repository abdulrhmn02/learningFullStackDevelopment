// import React from "react";
// import { Link } from "react-router-dom";

// const BlogCard = ({ blog }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
//       <div className="p-4">
//         <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
//         <p className="text-gray-700 text-sm mb-2">{blog.description.slice(0, 100)}...</p>
//         <p className="text-gray-500 text-xs">By {blog.author}</p>
//         <Link
//           to={`/blogs/${blog._id}`}
//           className="inline-block mt-3 text-blue-600 hover:underline"
//         >
//           Read More →
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;


// import React from "react";
// import { Link } from "react-router-dom";

// const BlogCard = ({ blog }) => {
//   return (
//     <div className=" card bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-300 p-4">
//       <h3 className="text-xl font-semibold text-blue-600 hover:underline">
//         <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
//       </h3>
//       <p className="text-sm text-gray-500 mt-1">
//         by {blog.author?.username || "Unknown Author"}
//       </p>
//       <p className="text-gray-700 mt-2 text-sm">
//         {blog.content.length > 150
//           ? blog.content.slice(0, 150) + "..."
//           : blog.content}
//       </p>
//       <Link
//         to={`/blogs/${blog._id}`}
//         className="inline-block mt-3 text-sm text-blue-500 hover:underline"
//       >
//         Read More →
//       </Link>
//     </div>
//   );
// };

// export default BlogCard;


import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-[#1E1E1E] text-gray-200 rounded-lg p-5 shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-semibold text-white hover:text-purple-400 transition">
        <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        by {blog.author?.username || "Unknown Author"}
      </p>
      <p className="text-sm text-gray-300 mt-3">
        {blog.content.length > 150
          ? blog.content.slice(0, 150) + "..."
          : blog.content}
      </p>
      <Link
        to={`/blogs/${blog._id}`}
        className="inline-block mt-4 text-sm text-purple-400 hover:underline transition"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;


// import React from "react";
// import { Link } from "react-router-dom";

// const BlogCard = ({ blog }) => {
//   return (
//     <div className="bg-[#1E1E1E] shadow-lg rounded-md overflow-hidden hover:shadow-xl transition duration-300 p-6">
//       <h3 className="text-xl font-semibold text-blue-600 hover:underline">
//         <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
//       </h3>
//       <p className="text-sm text-gray-500 mt-1">
//         by {blog.author?.username || "Unknown Author"}
//       </p>
//       <p className="text-gray-300 mt-2 text-sm">
//         {blog.content.length > 150
//           ? blog.content.slice(0, 150) + "..."
//           : blog.content}
//       </p>
//       <Link
//         to={`/blogs/${blog._id}`}
//         className="inline-block mt-3 text-sm text-blue-500 hover:underline"
//       >
//         Read More →
//       </Link>
//     </div>
//   );
// };

// export default BlogCard;
