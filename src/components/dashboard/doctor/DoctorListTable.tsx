"use client";
import Image from "next/image";
import { Avatar, Card, Table } from "antd";
import { ColumnType } from "antd/es/table";
interface IDoctor {
  key: string;
  name: string;
  speciality: string;
  email: string;
  phone?: string;
  rating: number;
  image: string;
}
const doctors = [
  {
    key: "1",
    name: "Dr. Ruby Perrin",
    speciality: "Dental",
    email: "ruby.perrin@example.com",
    phone: "+1 234 567 890",
    rating: 4,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "2",
    name: "Dr. Darren Elder",
    speciality: "Dental",
    email: "darren.elder@example.com",
    rating: 4,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "3",
    name: "Dr. Deborah Angel",
    speciality: "Cardiology",
    email: "deborah.angel@example.com",
    phone: "+1 987 654 321",
    rating: 4,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "4",
    name: "Dr. Sofia Brient",
    speciality: "Urology",
    email: "sofia.brient@example.com",
    rating: 4,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "5",
    name: "Dr. Marvin Campbell",
    speciality: "Orthopaedics",
    email: "marvin.campbell@example.com",
    phone: "+1 555 666 777",
    rating: 4,
    image: "/placeholder.svg?height=40&width=40",
  },
];

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
              src={record.image}
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
    title: "Speciality",
    dataIndex: "speciality",
    key: "speciality",
    className: " text-md text-gray-600 font-medium",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    className: " text-md text-gray-600 font-medium",
  }
];
interface PatientTableListProps {
  columns?: ColumnType<IDoctor>[];
  data?: IDoctor[];
}
export default function DoctorListTable({
  columns,
  data = doctors,
}: PatientTableListProps) {
  const allColumns = [...defaultColumns, ...(columns || [])].reduce(
    (acc: ColumnType<IDoctor>[], col) => {
      if (col.key === "key") {
        return [col, ...acc]; // Place "Patient ID" first
      }
      return [...acc, col]; // Keep other columns in order
    },
    []
  );;
  return (
    <Card>
      <h1 className="pb-2 text-2xl text-gray-700 font-semibold mb-4">
        Doctors List
      </h1>
      <div className="overflow-x-auto">
        <Table columns={allColumns} dataSource={data} pagination={false} />;
      </div>
    </Card>
  );
}
