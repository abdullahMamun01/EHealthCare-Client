"use client";
import { Table, Avatar, Tag, Button, Card } from "antd";
import Image from "next/image";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Appointment {
  key: string;
  doctorName: string;
  doctorImage: string;
  speciality: string;
  patientName: string;
  appointmentTime: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}

const appointmentData: Appointment[] = [
  {
    key: "1",
    doctorName: "Dr. Ruby Perrin",
    doctorImage: "/placeholder.svg",
    speciality: "Dental",
    patientName: "Charlene Reed",
    appointmentTime: "9 Nov 2023, 11:00 AM",
    status: "Confirmed",
  },
  {
    key: "2",
    doctorName: "Dr. Darren Elder",
    doctorImage: "/placeholder.svg",
    speciality: "Dental",
    patientName: "Travis Trimble",
    appointmentTime: "5 Nov 2023, 1:00 PM",
    status: "Pending",
  },
];

const appointmentColumns = [
  {
    title: "Doctor Name",
    dataIndex: "doctorName",
    key: "doctorName",
    className: " text-md text-gray-600 font-medium",

    render: (_: unknown, record: Appointment) => (
      <div className="flex items-center">
        <Avatar
          src={
            <Image
              src={record.doctorImage}
              alt={record.doctorName}
              width={40}
              height={40}
            />
          }
        />
        <span className="ml-3">{record.doctorName}</span>
      </div>
    ),
  },
  {
    title: "Speciality",
    dataIndex: "speciality",
    key: "speciality",
    className: " text-md text-gray-600 font-medium",
  },
  {
    title: "Patient Name",
    dataIndex: "patientName",
    key: "patientName",
    className: " text-md text-gray-600 font-medium",
  },
  {
    title: "Appointment Time",
    dataIndex: "appointmentTime",
    key: "appointmentTime",
    className: " text-md text-gray-600 font-medium",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    className: " text-md text-gray-600 font-medium",

    render: (status: string) => {
      const color =
        status === "Confirmed"
          ? "green"
          : status === "Pending"
          ? "gold"
          : "red";
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <div className="flex space-x-2">
        <Button type="text" icon={<EyeOutlined />} />
        <Button type="text" icon={<EditOutlined />} />
        <Button type="text" danger icon={<DeleteOutlined />} />
      </div>
    ),
  },
];

const AppointmentTableList = () => {
  return (
    <Card
      title={<h2 className="text-lg font-semibold">Appointment List</h2>}
      className="rounded-none"
      bodyStyle={{ padding: 0 }}
    >
      <div className="overflow-x-auto">
        <Table columns={appointmentColumns} dataSource={appointmentData} />;
      </div>
    </Card>
  );
};

export default AppointmentTableList;
