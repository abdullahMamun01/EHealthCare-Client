"use client";
import DoctorActionButtons from "@/components/dashboard/doctor/DoctorActionButtons";
import DoctorListTable from "@/components/dashboard/doctor/DoctorListTable";
import { IDoctor } from "@/types/doctor";
import React from "react";

export interface Patient {
  id: string;
  name: string;
  age: number;
  email: string;
  phone?: string;
  image: string;
}
const doctorsColumn = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
    className: "font-medium text-sky-600",
  },
  {
    title: "Degrees",
    dataIndex: "degrees",
    key: "degrees",
    className: "  font-normal",
    render: (degrees: string) => <span>{degrees ? degrees : "N/A"}</span>,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    className: "font-normal",
    render: (phone: string) => <span>{phone ? phone : "N/A"}</span>,
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    className: " font-normal",
    render: (country: string) => <span>{country ? country : "N/A"}</span>,
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    className: " text-md text-gray-600 font-normal",
    render: (record: IDoctor) => <DoctorActionButtons doctor={record} />,
  },
];
export default function DoctorsPage() {
  return (
    <div className="bg-[#F1F5F6]">
      <div className="px-6 py-4 h-screen">
        <DoctorListTable columns={doctorsColumn} />
      </div>
    </div>
  );
}
