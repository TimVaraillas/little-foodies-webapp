import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "@/stores/auth.store";
import { useToastStore } from "@/stores/toast.store";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers["x-auth-token"] = localStorage.token ? localStorage.token : "";
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response);
    const toastStore = useToastStore();
    const authStore = useAuthStore();
    if (error.response?.status === 401) {
      toastStore.error({ text: "Vous n'êtes pas connecté à l'application" });
      return authStore.logout();
    }
    if (error.response?.status >= 400) {
      return toastStore.error({ text: "Une erreur est survenue" });
    }
    return;
  }
);

export default apiClient;
