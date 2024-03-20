import axios, { InternalAxiosRequestConfig, AxiosRequestHeaders } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }

    const headers = config.headers as Record<string, string>;

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
