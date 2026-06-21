import { defineStore } from "pinia";
import { ref } from "vue";
import { get, post } from "../api/api";

interface UserData {
  name: string;
  email: string;
  password?: string;
  id?: string;
}

interface LoginResponse {
  access_token: string;
  user_info: UserData;
}

export const useAuthStore = defineStore("auth", () => {
  const token = localStorage.getItem("token");
  const isAuthenticated = ref(!!token);

  const user = ref<UserData | null>(null);

  async function login(email: string, password: string) {
    try {
      const response = await post<LoginResponse>("/auth/login", {
        email,
        password,
      });
      const { access_token, user_info } = response;

      isAuthenticated.value = true;
      user.value = user_info;
      localStorage.setItem("token", access_token);

      return true;
    } catch {
      return false; // Login failed
    }
  }

  async function register(userData: UserData) {
    const response = await post<UserData>("/auth/register", userData);
  }

  async function fetchUser() {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) return;

    try {
      const response = await get<UserData>("/auth/profile");

      user.value = response;
      isAuthenticated.value = true;
    } catch {
      // logout();
    }
  }

  function logout() {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem("token");
  }

  return { user, isAuthenticated, login, register, logout, fetchUser };
});
