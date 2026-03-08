import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,        // 15s hoặc bạn có thể remove để vô hạn
  withCredentials: true, // gửi cookie / JWT nếu cần
});

// Request interceptor: tự động gắn Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: xử lý lỗi chung
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      console.error(`[API] Error ${status}:`, data);
      if (status === 401) {
        // Ví dụ: redirect về login
        // window.location.href = "/login";
      }
    } else {
      console.error("[API] No response received:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
