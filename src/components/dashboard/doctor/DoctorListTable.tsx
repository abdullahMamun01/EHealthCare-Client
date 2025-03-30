'use client'
import Image from "next/image";
import { Avatar, Card, Table } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
interface Doctor {
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

const columns = [
  {
    title: "Doctor Name",
    dataIndex: "name",
    key: "name",
    className: " text-md text-gray-600 font-medium",
    render: (text: string, record: Doctor) => (
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

  },
  {
    title: "Reviews",
    dataIndex: "rating",
    key: "rating",
    className: "text-center text-lg font-semibold",
    render: (rating: number) => (
      <div>
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <StarFilled key={i} className="text-yellow-400" />
          ) : (
            <StarOutlined key={i} className="text-gray-300" />
          )
        )}
      </div>
    ),
  },
];

export default function DoctorListTable() {
  return (
    <Card>
      <h1 className="pb-2 text-2xl text-gray-700 font-semibold mb-4">Doctors List</h1>
      <div className="overflow-x-auto">
        <Table columns={columns} dataSource={doctors} pagination={false} />;
      </div>
    </Card>
  );
}
