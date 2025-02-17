import { Button, Input, Space, Tabs } from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import MyAppointmentCard from "./MyAppointmentCard";

const appointments = [
  {
    id: "Apt0001",
    doctor: {
      name: "Dr Edalin",
      image: "/placeholder.svg?height=48&width=48",
    },
    date: "11 Nov 2024 10.45 AM",
    types: ["General Visit", "Video Call"],
    contact: {
      email: "edalin@example.com",
      phone: "+1 504 368 6874",
    },
  },
  {
    id: "Apt0002",
    doctor: {
      name: "Dr.Shanta",
      image: "/placeholder.svg?height=48&width=48",
      isNew: true,
    },
    date: "05 Nov 2024 11.50 AM",
    types: ["General Visit", "Audio Call"],
    contact: {
      email: "shanta@example.com",
      phone: "+1 832 891 8403",
    },
  },
  {
    id: "Apt0003",
    doctor: {
      name: "Dr.John",
      image: "/placeholder.svg?height=48&width=48",
    },
    date: "27 Oct 2024 09.30 AM",
    types: ["General Visit", "Video Call"],
    contact: {
      email: "john@example.com",
      phone: "+1 749 104 6291",
    },
  },
  {
    id: "Apt0004",
    doctor: {
      name: "Dr.Susan",
      image: "/placeholder.svg?height=48&width=48",
    },
    date: "18 Oct 2024 12.20 PM",
    types: ["General Visit", "Direct Visit"],
    contact: {
      email: "susan@example.com",
      phone: "+1 584 920 7183",
    },
  },
];

export default function MyAppointment() {
  return (
    <div className="p-6 bg-[#F7F7F7] min-h-screen">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <Space>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
          />
          <Button icon={<CalendarOutlined />} />
          <Button icon={<AppstoreOutlined />} type="primary" />
        </Space>
      </div>

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Upcoming (21)" key="1" />
        <Tabs.TabPane tab="Cancelled (16)" key="2" />
        <Tabs.TabPane tab="Completed (214)" key="3" />
      </Tabs>

      <div className="space-y-2">
        {appointments.map((appointment) => (
          <MyAppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
}
