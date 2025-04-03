
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducers from "@/redux/slices/authSlice";
const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducers);
export const rootReducer = {
  auth: persistedAuthReducer,
};
