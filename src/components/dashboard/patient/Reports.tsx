/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Tabs, Table, Tag, Avatar } from "antd";

const { TabPane } = Tabs;

const reports = [
  {
    id: "AP1236",
    doctor: {
      name: "Dr. Robert Womack",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "21 Mar 2024, 10:30 AM",
    type: "Video call",
    status: "Upcoming",
  },
  {
    id: "AP3656",
    doctor: {
      name: "Dr. Patricia Cassidy",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "28 Mar 2024, 11:40 AM",
    type: "Clinic Visit",
    status: "Completed",
  },
  {
    id: "AP1246",
    doctor: {
      name: "Dr. Kevin Evans",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "02 Apr 2024, 09:20 AM",
    type: "Audio Call",
    status: "Completed",
  },
  {
    id: "AP6985",
    doctor: {
      name: "Dr. Lisa Keating",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "15 Apr 2024, 04:10 PM",
    type: "Clinic Visit",
    status: "Cancelled",
  },
  {
    id: "AP3659",
    doctor: {
      name: "Dr. John Hammer",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "10 May 2024, 06:00 PM",
    type: "Video Call",
    status: "Upcoming",
  },
];

const statusColors = {
  Upcoming: "blue",
  Completed: "green",
  Cancelled: "red",
};

export default function Reports() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text: string) => `#${text}`,
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
      render: (doctor: any) => (
        <div className="flex items-center gap-3">
          <Avatar src={doctor.image} size={40} alt={doctor.name} />
          <span>{doctor.name}</span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={statusColors[status as keyof typeof statusColors]}>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold text-[#1B2559] mb-6">Reports</h2>

      <Tabs defaultActiveKey="appointments" >
        <TabPane tab="Appointments" key="appointments" >
          <Table
         
            columns={columns}
            dataSource={reports}
            rowKey="id"
            pagination={false}
          />
        </TabPane>
        <TabPane tab="Medical Records" key="medical-records">
          <p>Medical Records content...</p>
        </TabPane>
        <TabPane tab="Prescriptions" key="prescriptions">
          <p>Prescriptions content...</p>
        </TabPane>
        <TabPane tab="Invoices" key="invoices">
          <p>Invoices content...</p>
        </TabPane>
      </Tabs>
    </div>
  );
}
