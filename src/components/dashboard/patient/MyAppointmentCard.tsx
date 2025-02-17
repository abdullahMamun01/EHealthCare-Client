"use client";
import { VideoCameraOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { MessageSquare, MoreVertical } from "lucide-react";

type MyAppointmentCardProps = {
  appointment: {
    id: string;
    doctor: {
      name: string;
      image: string;
    };
    date: string;
    types: string[];
    contact: {
      email: string;
      phone: string;
    };
  };
};

const MyAppointmentCard = ({ appointment }: MyAppointmentCardProps) => (
  <div
    key={appointment.id}
    className="bg-white rounded-xl p-4 flex items-center justify-between"
  >
    <div className="flex items-center gap-4">
      <Image
        src={appointment.doctor.image || "/placeholder.svg"}
        alt={appointment.doctor.name}
        className="w-12 h-12 rounded-xl"
      />
      <div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500">#{appointment.id}</span>
          <h3 className="font-semibold">{appointment.doctor.name}</h3>
          {appointment.doctor && (
            <span className="px-2 py-0.5 bg-purple-100 text-purple-600 rounded text-xs">
              New
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">{appointment.date}</span>
        </div>
        <div className="flex gap-2 mt-2">
          {appointment.types.map((type, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="flex items-center gap-8">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-4 h-4 flex items-center justify-center">📧</span>
          {appointment.contact.email}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-4 h-4 flex items-center justify-center">📞</span>
          {appointment.contact.phone}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outlined" className="">
          <VideoCameraOutlined className="!text-blue-500" />
        </Button>
        <Button variant="outlined">
          <MessageSquare className=" text-blue-500 w-4 h-4" />
        </Button>
        <Button variant="outlined">
          <MoreVertical className=" text-blue-500 w-4 h-4" />
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600">Attend</Button>
      </div>
    </div>
  </div>
);

export default MyAppointmentCard;
