import { IResponse } from "@/types";
import { baseApi } from ".";
import { IPatient } from "@/types/patient";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    patients: build.query<IResponse<IPatient[]>, void>({
      query: () => ({
        url: "/patients",
        method: "GET",
      }),
      providesTags: ["patients"],
    }),
    deletePatient: build.mutation<IResponse<IPatient>, string>({
      query: (id) => ({
        url: `/patients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["patients"],
    })
  }),
});

export const { usePatientsQuery, useDeletePatientMutation } = doctorApi;
