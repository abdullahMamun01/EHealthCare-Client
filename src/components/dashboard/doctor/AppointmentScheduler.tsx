import { CheckCircleFilled, CloseOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";

import Image from "next/image";

import React from "react";
const appointments = [
  {
    id: "Apt0001",
    name: "Adrian Marshall",
    time: "11 Nov 2024 10:45 AM",
    type: "General",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yB6RPsQ8MUHKKQ083ZJkeuPFx4N9z2.png",
  },
  {
    id: "Apt0002",
    name: "Kelly Stevens",
    time: "10 Nov 2024 11:00 AM",
    type: "Clinic Consulting",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yB6RPsQ8MUHKKQ083ZJkeuPFx4N9z2.png",
  },
  {
    id: "Apt0003",
    name: "Samuel Anderson",
    time: "03 Nov 2024 02:00 PM",
    type: "General",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yB6RPsQ8MUHKKQ083ZJkeuPFx4N9z2.png",
  },
  {
    id: "Apt0004",
    name: "Catherine Griffin",
    time: "01 Nov 2024 04:00 PM",
    type: "Clinic Consulting",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yB6RPsQ8MUHKKQ083ZJkeuPFx4N9z2.png",
  },
  {
    id: "Apt0005",
    name: "Robert Hutchinson",
    time: "28 Oct 2024 05:30 PM",
    type: "General",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yB6RPsQ8MUHKKQ083ZJkeuPFx4N9z2.png",
  },
];
export default function AppointmentScheduler() {
  return (
    <div className="flex-1 p-2 col-span-9">
      <Card className="">
        <div className="p-2">
          <div className="flex justify-between items-center mb-6 border-b border-blue-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Appointment
            </h3>
          </div>

          <div className="space-y-4 ">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="flex items-center justify-between py-3 bg-wthie px-3 rounded-2xl bg-sky-50"
              >
                <div className="flex items-center gap-4 ">
                  <Avatar className="h-12 w-12">
                    <Image
                      src={apt.image}
                      alt={apt.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </Avatar>
                  <div>
                    <div className=" items-center gap-2 mb-1">
                      <span className="text-[#4096FE] text-sm font-semibold">
                        #{apt.id}
                      </span>
                      <h4 className="font-medium">{apt.name}</h4>
                    </div>
                  </div>
                </div>
                <div className="flex  items-center gap-6">
                  <div className="flex flex-col gap-2 ">
                    <span className="text-gray-700 font-semibold">{apt.time}</span>
                    <span
                      className={`px-3 py-1 rounded-full  text-xs ${
                        apt.type === "General"
                          ? "bg-blue-100 text-[#4096FE]"
                          : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {apt.type}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="default"
                      className="h-8 w-8 !border-none !bg-transparent !text-green-500 hover:text-green-600 hover:bg-green-50"
                    >
                      <CheckCircleFilled className="text-lg" />
                    </Button>
                    <Button
                      type="default"
                      className="h-8 w-8 !bg-transparent !border-none text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <CloseOutlined className="text-xl text-red-500 hover:text-red-600" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
