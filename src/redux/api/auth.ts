import { IResponse } from "@/types";
import { baseApi } from ".";
import { IUser } from "@/types/userType";

type TLoginBody = {
  email: string;
  password: string;
};

type TRegisterBody = {
  name: string;
  email: string;
  country: string;
  password: string;
};

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ user: IUser; token: string }, TLoginBody>({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: IResponse<IUser>) => ({
        user: response.data,
        token: response.accessToken ?? "", // Ensure token is always a string
      }),
    }),
    

    register: build.mutation<IUser, TRegisterBody>({
      query: (credentials) => {
        return {
          url: "/signup",
          method: "POST",
          body: credentials,
        };
      },
      transformResponse: (response: IResponse<IUser>) =>
        response.data,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
