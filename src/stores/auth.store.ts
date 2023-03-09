import { ref, Ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { setAuthToken } from "@/helpers/authToken";
import { router } from "@/helpers/router";

import type AuthenticationCreditials from "@/types/authenticationCreditials.type";

export const useAuthStore = defineStore("auth", () => {
  const token: Ref<string | null | undefined> = ref(
    localStorage.getItem("token")
  );
  const user: Ref<string | null | undefined> = ref(
    JSON.parse(localStorage.getItem("user") ?? "")
  );

  const fetchUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const response = await axios.get("http://localhost:3000/auth");
      localStorage.setItem("user", JSON.stringify(response.data));
      user.value = response.data;
      router.push({ path: "/" });
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (credicials: AuthenticationCreditials) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth",
        credicials
      );
      localStorage.setItem("token", response.data?.token);
      token.value = response.data?.token;
      await fetchUser();
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return { token, user, fetchUser, login, logout };
});
