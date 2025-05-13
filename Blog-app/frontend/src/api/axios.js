// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:4000/api", // adjust if your backend is running on a different port
// });

// // Attach token to all requests if available
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default instance;
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api", // or whatever your backend base URL is
});

// Attach token to every request if exists
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
