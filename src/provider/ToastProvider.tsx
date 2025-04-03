"use client";

import React, { createContext, useContext } from "react";
import { message } from "antd";

interface ToastContextType {
  successToast: (msg: string) => void;
  errorToast: (msg: string) => void;
  warningToast: (msg: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const toast: ToastContextType = {
    successToast: (msg) => messageApi.success(msg),
    errorToast: (msg) => messageApi.error(msg),
    warningToast: (msg) => messageApi.warning(msg),
  };

  return (
    <ToastContext.Provider value={toast}>
      {contextHolder} 
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
