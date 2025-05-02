import { IResponse } from "@/types";
import { baseApi } from ".";

import { ISpecialty } from "@/types/speciality";

const specialityApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation<ISpecialty, FormData>({
      query: (credentials) => ({
        url: "/specialties",
        method: "POST",
        body: credentials,
      }),
    }),
    specialites: build.query<IResponse<ISpecialty[]>, void>({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: ["specialties"],
    }),
    speciality: build.query<IResponse<ISpecialty>, string>({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "GET",
      }),
    }),
    updateSpeciality: build.mutation<IResponse<ISpecialty>, FormData>({
      query: (credentials) => ({
        url: "/specialties",
        method: "PATCH",
        body: credentials,
      }),
      invalidatesTags: ["specialties"],
    }),
    deleteSpeciality: build.mutation<IResponse<ISpecialty>, string>({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["specialties"],
    }),
  }),
});

export const {
 useSpecialitesQuery,
 useCreateSpecialityMutation,
 useUpdateSpecialityMutation,
 useDeleteSpecialityMutation
} = specialityApi;
