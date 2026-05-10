import { defineStore } from "pinia";
import { ref } from "vue";

interface userData {
  name: string;
  email: string;
  password: string;
  id?: string;
}

export const useAuthStore = defineStore("auth", () => {
  const savedUser = localStorage.getItem("current_user");
  const user = ref(savedUser ? JSON.parse(savedUser) : null);
  const isAuthenticated = ref(!!savedUser);

  function login(email: string, password: string) {
    const users: userData[] = JSON.parse(
      localStorage.getItem("simulated_users") || "[]",
    );

    // Find user by credentials
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      user.value = foundUser;
      isAuthenticated.value = true;
      // Save the logged-in session
      localStorage.setItem("current_user", JSON.stringify(foundUser));
      return true;
    }

    return false; // Login failed
  }

  function register(userData: userData) {
    const users: userData[] = JSON.parse(
      localStorage.getItem("simulated_users") || "[]",
    );

    if (users.find((u) => u.email === userData.email)) {
      throw new Error("Email já cadastrado!");
    }

    const newUser = {
      ...userData,
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    };

    users.push(newUser);
    localStorage.setItem("simulated_users", JSON.stringify(users));

    user.value = newUser;
    isAuthenticated.value = true;
    localStorage.setItem("current_user", JSON.stringify(newUser));
  }

  function logout() {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem("current_user");
  }

  return { user, isAuthenticated, login, register, logout };
});

