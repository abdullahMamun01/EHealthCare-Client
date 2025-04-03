import { Button, Card } from "antd";
import React from "react";
import Cardiology from "../../../public/icons/cardiology.png";
import Neurology from "../../../public/icons/Neurology.png";
import Physician from "../../../public/icons/physician.png";
import Orthopedic from "../../../public/icons/Orthopedics.png";
import Dermatology from "../../../public/icons/Dermatology.png";
import Pulmonology from "../../../public/icons/Pulmonology.png";
// import  Psychiatry from "../../public/icons/Psychiatry.png";
// import Gynecology from "../../public/icons/Gynecology.png";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import Image from "next/image";
// import Ophthalmology from '../../public/icons/assets/ophthalmology.png'

export default function Specialities() {
  const specialties = [
    {
      icon: Cardiology,
      title: "Cardiology",
    },
    {
      icon: Neurology,
      title: "Neurology",
    },
    {
      icon: Physician,
      title: "physician",
    },
    {
      icon: Orthopedic,
      title: "Orthopedic",
    },
    {
      icon: Dermatology,
      title: "Dermatology",
    },
    {
      icon: Pulmonology,
      title: "Pulmonology",
    },
  ];

  return (
    <div className="my-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 ">
          <h2 className="text-2xl font-bold text-gray-700">
            Specialities <span className="text-blue-500">+</span>
          </h2>
          <div className="flex gap-2">
            <Button shape="circle">
              <LeftCircleFilled className="" />
            </Button>
            <Button shape="circle" className="rounded-full">
              <RightCircleFilled />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer shadow-sm"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-blue-50 text-blue-500">
                  <Image
                    src={specialty.icon}
                    alt={specialty.title}
                    width={70}
                    height={70}
                    className="object-contain "
                  />
                </div>
                <h3 className="font-semibold text-gray-700 text-lg ">
                  {specialty.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button className="rounded-full !bg-gradient-to-r !from-blue-400 !to-blue-600 !text-white !px-6 !py-6 !text-semibold">
            See All Specialities
          </Button>
        </div>
      </div>
    </div>
  );
}
