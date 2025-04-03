"use client";
import { Table, Avatar, Card } from "antd";
import { ColumnType } from "antd/es/table";
import Image from "next/image";

export interface Patient {
  key: string;
  name: string;
  age: number;
  email: string;
  phone?: string;
  image: string;
}

const patientData: Patient[] = [
  {
    key: "1",
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890",
    image: "/placeholder.svg",
  },
  {
    key: "2",
    name: "Jane Smith",
    age: 25,
    email: "jane.smith@example.com",
    phone: undefined,
    image: "/placeholder.svg",
  },
  {
    key: "3",
    name: "Michael Johnson",
    age: 40,
    email: "michael.johnson@example.com",
    phone: "987-654-3210",
    image: "/placeholder.svg",
  },
];

const defaultColumns = [
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
    className: " text-md text-gray-600 font-medium",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    className: " text-md text-gray-600 font-medium",
  },
];

interface PatientTableListProps {
  columns?: ColumnType<Patient>[];
  data?: Patient[];
}

const PatientTableList = ({
  columns,
  data = patientData,
}: PatientTableListProps) => {
  const allColumns = [...defaultColumns, ...(columns || [])].reduce(
    (acc: ColumnType<Patient>[], col) => {
      if (col.key === "key") {
        return [col, ...acc]; // Place "Patient ID" first
      }
      return [...acc, col]; // Keep other columns in order
    },
    []
  );
  return (
    <Card
      title={
        <h1 className="pb-2 text-2xl text-gray-700 font-semibold my-4">
          Patient List
        </h1>
      }
    >
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <Table columns={allColumns} dataSource={data} />
      </div>
    </Card>
  );
};

export default PatientTableList;
