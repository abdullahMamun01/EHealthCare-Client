
'use client'
import { Avatar, Button, Card } from "antd"
import { ChevronLeft, ChevronRight, MessageSquare, Video } from "lucide-react"
import Image from "next/image"

const dates = [
  { day: 19, weekday: "Mon" },
  { day: 20, weekday: "Mon" },
  { day: 21, weekday: "Tue", active: true },
  { day: 22, weekday: "Wed", active: true },
  { day: 23, weekday: "Thu" },
]

const appointments = [
  {
    id: 1,
    doctor: "Dr.Edalin Hendry",
    specialty: "Dentist",
    date: "21 Mar 2024",
    time: "10:30 PM",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20104456-RTLsx2CnfQu5zI2TEmvMsqsZdSnJ7E.png",
    type: "chat",
  },
  {
    id: 2,
    doctor: "Dr.Juliet Gabriel",
    specialty: "Cardiologist",
    date: "22 Mar 2024",
    time: "10:30 PM",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20104456-RTLsx2CnfQu5zI2TEmvMsqsZdSnJ7E.png",
    type: "video",
  },
]

export default function AppointmentScheduler() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-sm">
      <div className="flex items-center justify-between p-5 border-b">
        <h1 className="text-xl font-semibold text-[#1A1D1F]">Appointment</h1>
        <div className="flex gap-3">
          <Button  className="h-8 w-8 border rounded-full hover:bg-gray-50">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button  className="h-8 w-8 border rounded-full hover:bg-gray-50">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-between p-5 gap-1">
        {dates.map((date) => (
          <div
            key={`${date.day}-${date.weekday}`}
            className="relative flex flex-col items-center justify-center p-3 rounded-2xl bg-white border min-w-[4.5rem]"
          >
            <span className="text-lg font-medium text-[#1A1D1F]">{date.day}</span>
            <span className="text-sm text-gray-500">{date.weekday}</span>
            {date.active && (
              <div className="absolute -top-1 right-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-5 space-y-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="p-4 border rounded-2xl">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <Avatar className="h-12 w-12 rounded-xl">
                  <Image src={appointment.image} width={100} height={100} className="object-cover" alt={appointment.doctor} />
                  
                </Avatar>
                <div>
                  <h3 className="font-semibold text-[#1A1D1F]">{appointment.doctor}</h3>
                  <p className="text-gray-500 text-sm">{appointment.specialty}</p>
                </div>
              </div>
              <div className="rounded-full p-2.5 bg-gray-50">
                {appointment.type === "video" ? (
                  <Video className="h-5 w-5 text-blue-600" />
                ) : (
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                )}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500 flex items-center gap-1.5">
              <span className="inline-block w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">🕒</span>
              {appointment.date} - {appointment.time}
            </div>

            <div className="flex gap-3 mt-4">
              <Button
                variant="filled"
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl h-11"
               
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat Now
              </Button>
              <Button
                className="flex-1 bg-[#2B63F1] hover:bg-blue-600 rounded-xl h-11 font-medium"
                onClick={() => console.log("Attend clicked")}
              >
                Attend
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

