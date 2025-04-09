"use client";
import DoctorListTable from "@/components/dashboard/doctor/DoctorListTable";
import { IDoctor } from "@/types/doctor";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { Trash2 } from "lucide-react";
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
    title: "Doctor  ID",
    dataIndex: "key",
    key: "key",
    className: " text-md text-gray-600 font-medium",
  },
  {
    title: "Degrees",
    dataIndex: "degrees",
    key: "degrees",
    className: " text-md text-gray-600 font-medium",
    render: (degrees: string) => <span>{degrees ? degrees : "N/A"}</span>,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    className: " text-md text-gray-600 font-medium",
    render: (phone: string) => <span>{phone ? phone : "N/A"}</span>,
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    className: " text-md text-gray-600 font-medium",
    render: (country: string) => <span>{country ? country : "N/A"}</span>,
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    className: " text-md text-gray-600 font-medium",
    render: (record: IDoctor) => (
      <Space size="middle">
        <a href="#" className="text-green-500">
          <EditOutlined />
        </a>
        <a href="#" className="text-blue-500">
          <EyeOutlined />
        </a>
        <a href="#" className="text-red-500">
          <Trash2 className="w-4 h-4" />
        </a>
      </Space>
    ),
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
