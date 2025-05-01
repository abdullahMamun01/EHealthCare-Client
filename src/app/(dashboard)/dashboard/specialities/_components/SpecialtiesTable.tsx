"use client";

import { useSpecialitesQuery } from "@/redux/api/speciality";
import { ISpecialty } from "@/types/speciality";
import { Button, Space, Table } from "antd";

import { Heart, Brain, Bone, Activity, Bluetooth as Tooth } from "lucide-react";
import Image from "next/image";

// const specialtiesData = [
//   { key: "SP001", specialty: "Urology", icon: <Heart size={24} /> },
//   { key: "SP002", specialty: "Neurology", icon: <Brain size={24} /> },
//   { key: "SP003", specialty: "Orthopedic", icon: <Bone size={24} /> },
//   { key: "SP004", specialty: "Cardiologist", icon: <Activity size={24} /> },
//   { key: "SP005", specialty: "Dentist", icon: <Tooth size={24} /> },
// ];

const columns = [
  {
    title: "S.N",
    key: "slNo",
    render: (_: any, __: ISpecialty, index: number) => <span>#{index + 1}</span>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "Specialities",
    dataIndex: "name",
    key: "name",
    render: (text: string, record: ISpecialty) => (
      <Space>
        <Image
          src={record.icon}
          alt="icon"
          width={50}
          height={50}
          className="mr-2"
        />
        {text}
      </Space>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <Space size="middle">
        <Button type="primary" ghost size="small">
          Edit
        </Button>
        <Button danger size="small">
          Delete
        </Button>
      </Space>
    ),
  },
];
export default function SpecialtiesTable() {
  const { data } = useSpecialitesQuery();
  const specialtiesData = data?.data || [];
  return (
    <Table
      columns={columns}
      dataSource={specialtiesData}
      pagination={{
        total: 5,
        pageSize: 10,
        showSizeChanger: true,
        showTotal: (total) => `Showing 1 to ${total} of ${total} entries`,
      }}
    />
  );
}
