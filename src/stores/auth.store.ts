import { defineStore } from "pinia";
import axios from "axios";

import { setAuthToken } from "@/helpers/authToken";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post("http://localhost:3000/auth", {
          email,
          password,
        });

        localStorage.setItem("token", response.data?.token);
        this.token = response.data?.token;

        await this.fetchUser();
      } catch (err) {
        console.log(err);
      }
    },

    logout() {
      this.token = null;
      localStorage.removeItem("token");
      this.user = null;
      localStorage.removeItem("user");
      // router.push('/login');
    },

    async fetchUser() {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      try {
        const response = await axios.get("http://localhost:3000/auth");
        localStorage.setItem("token", response.data);
        this.user = response.data;
        // router.push({ path: "/" }).catch(() => {});
      } catch (err) {
        console.log(err);
      }
      return;
    },
  },
});
