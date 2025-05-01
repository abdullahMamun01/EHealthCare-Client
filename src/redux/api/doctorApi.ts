import { IResponse } from "@/types";
import { baseApi } from ".";
import { IDoctor } from "@/types/doctor";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation<IDoctor, FormData>({
      query: (credentials) => ({
        url: "/admins/create-doctor",
        method: "POST",
        body: credentials,
      }),
    }),
    doctors: build.query<IResponse<IDoctor[]>, void>({
      query: () => ({
        url: "/doctors",
        method: "GET",
      }),
      providesTags: ["doctors"],
    }),
    doctor: build.query<IResponse<IDoctor>, string>({
      query: (id) => ({
        url: `/doctors/${id}`,
        method: "GET",
      }),
    }),
    updateDoctor: build.mutation<IResponse<IDoctor>, FormData>({
      query: (credentials) => ({
        url: "/doctors",
        method: "PATCH",
        body: credentials,
      }),
      invalidatesTags: ["doctors"],
    }),
    deleteDoctor: build.mutation<IResponse<IDoctor>, string>({
      query: (id) => ({
        url: `/doctors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["doctors"],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useDoctorsQuery,
  useDeleteDoctorMutation,
  useDoctorQuery,
  useUpdateDoctorMutation
} = doctorApi;
