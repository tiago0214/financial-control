import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export async function post<T>(route: string, body: Record<string, any>) {
  const response = await api.post<T>(route, body);

  return response.data;
}

export async function get<T>(route: string) {
  const response = await api.get<T>(route);

  return response.data;
}
