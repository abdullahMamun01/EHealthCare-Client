"use client";
import React from "react";

import { Button } from "antd";
import Image from "next/image";
import { CheckOutlined } from "@ant-design/icons";
import HeroImage from "../../../public/assets/hero-2.png";
import HeroBgImage from "../../../public/assets/Vector.png";
export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-blue-500 text-lg">Welcome to MadiFax</div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              We Are Committed
              <br />
              To Your <span className="text-blue-500 font-bold">Helath</span>
            </h1>
            <p className="text-gray-600 text-lg">
              It is a established fact that a reader will be distracted by the
              content of a page when looking at this layout.
            </p>
            <Button
              size="large"
              color="blue"
              style={{
                padding: "25px 36px",
                borderRadius: "31px",
                fontSize: "16px",
              }}
              className="text-lg px-8 !text-white !bg-blue-500"
            >
              Start a Consult
            </Button>

            {/* Search Section */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { title: "Recovered Patients", value: "355k+" },
                { title: "Good Review", value: "98%" },
                { title: "Popular Doctors", value: "120+" },
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="relative w-5/6 h-5/6 mx-auto">
              <Image
                src={HeroBgImage}
                alt="Doctor"
                width={600}
                height={600}
                className="w-full h-full object-contain absolute top-[58%] left-[55%] transform -translate-x-1/2 -translate-y-1/2"
              />

              <Image
                src={HeroImage}
                alt="Doctor"
                width={600}
                height={600}
                className="w-full h-full relative object-cover"
              />
              {/* Floating Card */}
              <div className="absolute top-1/2 left-0 bg-white p-4 rounded-lg shadow-lg max-w-[250px]">
                <div className="mt-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="bg-blue-500 w-5 h-5 flex items-center justify-center rounded-md">
                      <CheckOutlined className="text-gray-200 font-bold" />
                    </span>
                    <span>Regular Check-up</span>
                  </div>
                  <Button variant="outlined" className="w-full mt-2 text-sm">
                    Book Now
                  </Button>
                </div>
              </div>

              {/* Meet Our Doctors */}
              <div className="absolute bottom-4 right-0 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Meet Our Doctors</h4>
                  <span className="text-blue-500 text-sm">12k+</span>
                </div>
                <div className="flex -space-x-2 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
