"use client";
import PatientActionButtons from "@/components/dashboard/patient/PatientActionButtons";
import PatientTableList from "@/components/dashboard/patient/PatientTableList";

import { IPatient } from "@/types/patient";

import React from "react";

const patientColumn = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
    // className: " text-md text-gray-600 font-medium",
    render: (text:string) => <span className="text-sky-500 font-medium">{text}</span>
  },

  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    className: " text-md",
    render: (address: string) => <span>{address ? address : "N/A"}</span>,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    className: " text-md text-gray-600 font-medium",
    render: (phone: string) => <span>{phone ? phone : "N/A"}</span>,
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    className: " text-md text-gray-600 font-medium",
    render: (record: IPatient) => <PatientActionButtons patient={record} />,
  },
];
export default function PatientPage() {
  return (
    <div className="">
      <div className="px-5 mt-4">
        <PatientTableList columns={patientColumn} />
      </div>
    </div>
  );
}
