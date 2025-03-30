"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { Avatar, Badge, Button, Card } from "antd";

interface Appointment {
  id: string;
  doctor: {
    name: string;
    specialty: string;
    avatar: string;
  };
  date: string;
  time: string;
  duration: string;
  location: string;
}

export default function PastAppointments() {
  const [appointments] = useState<Appointment[]>([
    {
      id: "1",
      doctor: {
        name: "Dr.Edalin Hendry",
        specialty: "Dental Specialist",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      date: "Thursday, Mar 2024",
      time: "04:00 PM - 04:30 PM (30 Min)",
      duration: "30 Min",
      location: "Newyork, United States",
    },
    {
      id: "2",
      doctor: {
        name: "Dr.Sarah Johnson",
        specialty: "Cardiologist",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      date: "Monday, Feb 2024",
      time: "02:15 PM - 03:00 PM (45 Min)",
      duration: "45 Min",
      location: "Newyork, United States",
    },
  ]);

  return (
    <div className="">
      <Card className="col-span-1">
        <div className="flex flex-row items-center justify-between pb-2 mb-4">
          <h1 className="text-xl font-bold text-gray-700">Past Appointments</h1>
          <div className="flex space-x-1">
            <Button className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Avatar
                  src={appointment.doctor.avatar}
                  alt={appointment.doctor.name}
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-primary text-gray-600">
                        {appointment.doctor.name}
                      </h3>
                      <p className="text-sm text-sky-600">
                        {appointment.doctor.specialty}
                      </p>
                    </div>
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      {appointment.duration}
                    </Badge>
                  </div>
                  <h4 className="mt-3 font-medium text-gray-600">{appointment.date}</h4>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-gray-600 font-semibold text-medium">
                      <Clock className="mr-2 h-4 w-4 text-gray-600 font-semibold text-medium" />
                      <span>Time : {appointment.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{appointment.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2 w-1/2">
                    <Button className="flex-1 py-4.5"  shape="round" >Reschedule</Button>
                    <Button className="flex-1 py-4.5  bg-blue-500 hover:bg-blue-600 text-white" shape="round">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
