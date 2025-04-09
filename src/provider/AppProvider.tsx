"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AntProvider from "./AntProvider";
import { persistor, store } from "@/redux/stores/stores";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AntProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
    </AntProvider>
  );
}
