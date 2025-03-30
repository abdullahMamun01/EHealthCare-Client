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
    title: "Patient Name",
    dataIndex: "name",
    key: "name",
    className: " text-md text-gray-600 font-medium",
    render: (_: unknown, record: Patient) => (
      <div className="flex items-center">
        <Avatar
          src={
            <Image
              src={record.image}
              alt={record.name}
              width={40}
              height={40}
            />
          }
        />
        <span className="ml-3">{record.name}</span>
      </div>
    ),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    className: " text-md p-0 text-gray-600 font-medium",
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
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    className: " text-md text-gray-600 font-medium",
  },
];
export default function Patient() {
  return (
    <div>
      <PatientTableList columns={patientColumn} />
    </div>
  );
}
