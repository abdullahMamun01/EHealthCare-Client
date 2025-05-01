"use client";
import Image from "next/image";
import { Avatar, Button, Card, Table } from "antd";
import { ColumnType } from "antd/es/table";

import { IDoctor } from "@/types/doctor";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useDoctorsQuery } from "@/redux/api/doctorApi";

const defaultColumns = [
  {
    title: "Doctor Name",
    dataIndex: "name",
    key: "name",
    className: " text-md text-gray-600 font-medium",
    render: (text: string, record: IDoctor) => (
      <div className="flex items-center">
        <Avatar
          src={
            <Image
              src={
                record?.photo ||
                `https://avatar.iran.liara.run/username?username=${record.name.slice(
                  0,
                  1
                )}`
              }
              alt={record.name}
              width={40}
              height={40}
            />
          }
        />
        <span className="ml-3">{text}</span>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    className: "  text-sky-600 font-normal",
  },
  {
    title: "Speciality",
    dataIndex: "speciality",
    key: "speciality",
    className: " font-normal",
  },
];
interface PatientTableListProps {
  columns?: ColumnType<IDoctor>[];
}
export default function DoctorListTable({ columns }: PatientTableListProps) {
  const allColumns = [...defaultColumns, ...(columns || [])].reduce(
    (acc: ColumnType<IDoctor>[], col) => {
      if (col.key === "key") {
        return [col, ...acc]; // Place "Doctor ID" first
      }

      return [...acc, col]; // Keep other columns in order
    },
    []
  );
  const { data, isLoading, isError } = useDoctorsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const transformedData = data?.data?.map((doc, idx) => ({
    ...doc,
    key: idx + 1,
    speciality: doc?.doctorSpecielites[0]?.specialites?.name || "N/A",
    email: doc.email,
    phone: doc.contactNo,
  }));

  return (
    <Card
      title={
        <div className="flex justify-between items-center pt-5 pb-2">
          <h2 className="text-lg font-semibold pt-5 pb-2 rounded-lg">
            <span className="text-sky-600">Doctors</span> List
          </h2>
          <Link href="/dashboard/doctors/add">
            <Button
              className="bg-blue-500 text-gray-50"
              icon={<Plus className="w-4 h-4 " />}
            >
              {" "}
              Add Doctor
            </Button>
          </Link>
        </div>
      }
      className="rounded-none"
      bodyStyle={{ padding: 0 }}
    >
      <div className="overflow-x-auto px-5">
        <Table
          columns={allColumns}
          dataSource={transformedData?.slice(0, 6)}
          pagination={false}
        />
      </div>
    </Card>
  );
}
