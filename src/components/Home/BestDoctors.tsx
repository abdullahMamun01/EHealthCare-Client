import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BestDoctorCard } from "./BestDoctorCard";

import { Col, Row } from "antd";
const doctors = [
  {
    name: "Dr. Matthew Ruiz",
    image: "/placeholder.svg?height=400&width=300",
    credentials: "BDS, MDS - Oral & Maxillofacial Surgery",
    location: "Georgia, USA",
    consultations: 450,
    rating: 4.0,
    priceRange: "$20 - $50",
  },
  {
    name: "Dr. Ruby Perrin",
    image: "/placeholder.svg?height=400&width=300",
    credentials: "BDS, MDS - Oral & Maxillofacial Surgery",
    location: "Georgia, USA",
    consultations: 450,
    rating: 3.5,
    priceRange: "$20 - $50",
  },
  {
    name: "Dr. Lisa Graham",
    image: "/placeholder.svg?height=400&width=300",
    credentials: "MBBS, MD - Cardiologist",
    location: "San Diego, USA",
    consultations: 120,
    rating: 3.0,
    priceRange: "$30 - $60",
  },
  {
    name: "Dr. Carrie Soderberg",
    image: "/placeholder.svg?height=400&width=300",
    credentials: "MBBS, DNB - Neurology",
    location: "Dallas, USA",
    consultations: 300,
    rating: 3.0,
    priceRange: "$15 - $30",
  },
];

export default function BestDoctors() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-700">
              Book Our Best Doctor
            </h2>
            <p className="mt-2 text-gray-600 font-medium">Meet our experts & book online</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full bg-blue-100 p-2 text-blue-500 hover:bg-blue-200">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="rounded-full bg-blue-100 p-2 text-blue-500 hover:bg-blue-200">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <Row gutter={[8, 0]}>
          {doctors.map((doctor) => (
            <Col key={doctor.name} className="w-[300px] flex-none">
              <BestDoctorCard {...doctor} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
