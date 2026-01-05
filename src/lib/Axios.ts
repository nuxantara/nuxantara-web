// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (opsional)
axiosInstance.interceptors.request.use(
  (config) => {
    // Bisa tambahin token auth di sini
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (opsional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error secara global
    if (error.response?.status === 401) {
      // Redirect ke login atau refresh token
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
