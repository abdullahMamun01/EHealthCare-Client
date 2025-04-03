"use client";
import React from "react";
import { Table, Avatar, Tag, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Edit2, Trash2 } from "lucide-react";

interface DataType {
  key: string;
  invoiceNumber: string;
  patientId: string;
  patientName: string;
  patientImage: string;
  totalAmount: number;
  status: "Paid" | "Pending" | "Failed";
}
const columns: ColumnsType<DataType> = [
  {
    title: "Invoice Number",
    dataIndex: "invoiceNumber",
    key: "invoiceNumber",
    sorter: (a, b) => a.invoiceNumber.localeCompare(b.invoiceNumber),
    render: (text) => <a className="text-blue-500">{text}</a>,
  },
  {
    title: "Patient ID",
    dataIndex: "patientId",
    key: "patientId",
    sorter: (a, b) => a.patientId.localeCompare(b.patientId),
  },
  {
    title: "Patient Name",
    dataIndex: "patientName",
    key: "patientName",
    sorter: (a, b) => a.patientName.localeCompare(b.patientName),
    render: (_, record) => (
      <Space>
        <Avatar src={record.patientImage} />
        {record.patientName}
      </Space>
    ),
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    key: "totalAmount",
    sorter: (a, b) => a.totalAmount - b.totalAmount,
    render: (amount) => `$${amount.toFixed(2)}`,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (status) => {
      let color = "green";
      if (status === "Pending") {
        color = "gold";
      } else if (status === "Failed") {
        color = "red";
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Actions",
    key: "actions",
    render: () => <div>
         <Button
        type="text"
        danger
        icon={<Trash2 size={16} />}
        onClick={() => console.log("Delete clicked")}
      />
       <Button
        type="text"
        icon={<Edit2 size={16} />}
        onClick={() => console.log("Delete clicked")}
      />
      
    </div>,
  },
];
const data: DataType[] = [
  {
    key: "1",
    invoiceNumber: "#IN0001",
    patientId: "#PT001",
    patientName: "Charlene Reed",
    patientImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    totalAmount: 100.0,
    status: "Paid",
  },
  {
    key: "2",
    invoiceNumber: "#IN0002",
    patientId: "#PT002",
    patientName: "Travis Trimble",
    patientImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    totalAmount: 200.0,
    status: "Paid",
  },
  {
    key: "3",
    invoiceNumber: "#IN0003",
    patientId: "#PT003",
    patientName: "Carl Kelly",
    patientImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    totalAmount: 250.0,
    status: "Paid",
  },
  {
    key: "4",
    invoiceNumber: "#IN0004",
    patientId: "#PT004",
    patientName: "Michelle Fairfax",
    patientImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    totalAmount: 150.0,
    status: "Paid",
  },
  {
    key: "5",
    invoiceNumber: "#IN0005",
    patientId: "#PT005",
    patientName: "Gina Moore",
    patientImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    totalAmount: 350.0,
    status: "Paid",
  },
];
export default function TransactionTableList() {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        showSizeChanger: true,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        pageSizeOptions: ["10", "20", "50", "100"],
      }}
    />
  );
}
