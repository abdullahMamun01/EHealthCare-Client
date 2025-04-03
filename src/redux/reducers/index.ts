import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducers from "@/redux/slices/authSlice";
import { baseApi } from "../api";
import { combineReducers } from "@reduxjs/toolkit";
const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducers);
export const rootReducer = combineReducers({
  auth: persistedAuthReducer, // Other reducers
  [baseApi.reducerPath]: baseApi.reducer, // Ensure this is included
});
