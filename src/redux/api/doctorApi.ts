
import { IResponse } from "@/types";
import { baseApi } from ".";
import { IDoctor } from "@/types/doctor";


const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation<IDoctor, FormData>({
      query: (credentials) => ({
        url: "/admins/create-doctor",
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: credentials,
      }),
    }),
    getDoctors: build.query<IResponse<IDoctor[]>, void>({
      query: () => ({
        url: "/doctors",
        method: "GET",
      }),

    }),
  }),
});

export const { useCreateDoctorMutation ,useGetDoctorsQuery} = doctorApi;
