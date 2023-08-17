import { ref, Ref } from "vue";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

import type { ToastPayload, ToastStatus, Toast } from "@/types/toast.type";

const DEFAULT_TIMEOUT = 4000;

const createToast = (text: string, status: ToastStatus): Toast => ({
  id: uuidv4(),
  text,
  status,
});

export const useToastStore = defineStore("toast", () => {
  const toasts: Ref<Toast[]> = ref([]);

  const updateState = (payload: ToastPayload, status: ToastStatus) => {
    const { text, timeout } = payload;
    const toast = createToast(text, status);

    toasts.value.push(toast);

    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== toast.id);
    }, timeout ?? DEFAULT_TIMEOUT);
  };

  const clearToast = (toastId: string) => {
    toasts.value = toasts.value.filter((t) => t.id !== toastId);
  };

  const info = (payload: ToastPayload) => {
    updateState(payload, "info");
  };

  const success = (payload: ToastPayload) => {
    updateState(payload, "success");
  };

  const warning = (payload: ToastPayload) => {
    updateState(payload, "warning");
  };

  const error = (payload: ToastPayload) => {
    updateState(payload, "error");
  };

  return { toasts, info, success, warning, error, clearToast };
});
