export type ToastStatus = "info" | "success" | "warning" | "error";

export type ToastPayload = {
  timeout?: number;
  text: string;
};

export interface Toast {
  id: string;
  text: string;
  status: ToastStatus;
}
