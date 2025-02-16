import {
  CalendarOutlined,
  ClockCircleFilled,
  HeartFilled,
  PinterestFilled,
} from "@ant-design/icons";
import { Badge, Button, Card, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import Doctor from "../../../public/assets/hero-1.png";
export default function BestDoctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Michael Brown",
      specialty: "Psychologist",
      specialtyColor: "indigo",
      rating: "5.0",
      location: "Minneapolis, MN",
      duration: "30 Min",
      fee: "$650",
      image: "/placeholder.svg?height=400&width=300",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Nicholas Tello",
      specialty: "Pediatrician",
      specialtyColor: "pink",
      rating: "4.6",
      location: "Ogden, IA",
      duration: "30 Min",
      fee: "$400",
      image: "/placeholder.svg?height=400&width=300",
      available: true,
    },
    {
      id: 3,
      name: "Dr. Harold Bryant",
      specialty: "Neurologist",
      specialtyColor: "emerald",
      rating: "4.8",
      location: "Winona, MS",
      duration: "30 Min",
      fee: "$500",
      image: "/placeholder.svg?height=400&width=300",
      available: true,
    },
    {
      id: 4,
      name: "Dr. Sandra Jones",
      specialty: "Cardiologist",
      specialtyColor: "blue",
      rating: "4.8",
      location: "Beckley, WV",
      duration: "30 Min",
      fee: "$550",
      image: "/placeholder.svg?height=400&width=300",
      available: true,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <span className="bg-blue-600 text-gray-50 rounded-full px-4 text-sm py-1 mb-6">
          . Featured Doctors .
        </span>
        <h1 className="text-3xl font-bold text-[#1a1c3b] mt-4">
          Our Highlighted Doctors
        </h1>
      </div>

      <Row gutter={[16, 8]}>
        {doctors.map((doctor) => (
          <Col span={6} key={doctor.id}>
            <Card
              key={doctor.id}
              className="relative shadow-sm"
              size="small"
              styles={{ body: { padding: 0 } }}
            >
              <div className="relative w-full h-[200px] bg-sky-50">
                <Image
                  src={Doctor || "/placeholder.svg"}
                  alt={doctor.name}
                  fill
                  className="object-contain rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-blue-600">
                    <span> ★ {doctor.rating} </span>
                  </span>
                </div>
                {/* <Button
                  variant="outlined"
                  className="absolute top-4 right-4 text-white hover:text-white hover:bg-white/20"
                >
                  <HeartFilled className="w-5 h-5" />
                </Button> */}
              </div>
              <div className="pt-4 p-4">
                <div className="flex items-start gap-2 mb-2">
                  <div
                    className={`w-1 h-6 bg-${doctor.specialtyColor}-500 rounded-full`}
                  />
                  <div className="flex-1">
                    <p
                      className={`text-${doctor.specialtyColor}-500 font-medium`}
                    >
                      {doctor.specialty}
                    </p>
                    <Badge className="bg-green-50 text-green-600 rounded-full">
                      Available
                    </Badge>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1a1c3b] mb-2">
                  {doctor.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <PinterestFilled className="w-4 h-4" />
                  <span>{doctor.location}</span>
                  <span>•</span>
                  <ClockCircleFilled className="w-4 h-4" />
                  <span>{doctor.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Consultation Fees</p>
                    <p className="text-orange-500 font-bold">{doctor.fee}</p>
                  </div>
                  <Button style={{background: '#1a1c3b' , color: '#fff' , borderRadius:'15px' }} className="bg-[#1a1c3b] hover:bg-[#2d305f]">
                    <CalendarOutlined /> Book Now
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
