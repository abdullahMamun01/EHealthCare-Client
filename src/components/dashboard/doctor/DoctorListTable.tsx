"use client";
import Image from "next/image";
import { Avatar, Card, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { useGetDoctorsQuery } from "@/redux/api/doctorApi";
import { IDoctor } from "@/types/doctor";

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
    className: " text-md text-gray-600 font-medium",
  },
  {
    title: "Speciality",
    dataIndex: "speciality",
    key: "speciality",
    className: " text-md text-gray-600 font-medium",
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
  const { data, isLoading, isError } = useGetDoctorsQuery();
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
      title={<h2 className="text-lg font-semibold">Doctors List</h2>}
      className="rounded-none"
      bodyStyle={{ padding: 0 }}
    >
      <div className="overflow-x-auto">
        <Table
          columns={allColumns}
          dataSource={transformedData?.slice(0,6)}
          pagination={false}
        />
      </div>
    </Card>
  );
}
