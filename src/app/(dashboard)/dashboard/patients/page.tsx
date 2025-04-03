"use client";
import PatientTableList from "@/components/dashboard/patient/PatientTableList";
import { Avatar, Image } from "antd";
import React from "react";

export interface Patient {
  key: string;
  name: string;
  age: number;
  email: string;
  phone?: string;
  image: string;
}
const patientColumn = [
  {
    title: "Patient ID",
    dataIndex: "key",
    key: "key",
    className: " text-md text-gray-600 font-medium",
  },

  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    className: " text-md text-gray-600 font-medium",
    render: (address: string) => <span>{address ? address : "N/A"}</span>,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    className: " text-md text-gray-600 font-medium",
    render: (phone: string) => <span>{phone ? phone : "N/A"}</span>,
  }
];
export default function Patient() {
  return (
    <div>
     <div className="px-5 mt-4">
     <PatientTableList columns={patientColumn} />
     </div>
    </div>
  );
}
