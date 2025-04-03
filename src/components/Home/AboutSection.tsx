import { CheckCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/assets/about-1.png";

export default function AboutSection() {
  const services = [
    ["24/7 Online Consultations", "Video Appointments"],
    ["Specialist Doctors", "Secure Health Records"],
    ["Digital Prescriptions", "Instant Chat Support"],
  ];

  return (
    <section className="container py-12 mx-auto">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="relative bg-blue-100">
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <Image
              src={AboutImage}
              alt="Online Doctor Consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-500">
            Virtual Healthcare
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-700">
            Your Health, Our Priority - Anytime, Anywhere
          </h2>
          <p className="text-gray-600 font-normal">
            Experience healthcare reimagined with E-HEALTHEASE is online doctor
            appointment system. Connect with qualified healthcare professionals
            from the comfort of your home. Our platform offers secure video
            consultations, instant appointment booking, and comprehensive
            digital health services available 24/7.
          </p>

          <div className="grid gap-4">
            {services.map((row, i) => (
              <div key={i} className="flex gap-8">
                {row.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircleFilled className="h-5 w-5 text-blue-500" />
                    <span className="font-medium text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <Button
            size="large"
            className=" hover:!bg-blue-600 hover:!text-white"
            style={{
              color: " rgb(59 130 246 / var(--tw-bg-opacity, 1))",
              border: "1px solid rgb(59 130 246 / var(--tw-bg-opacity, 1))",
            }}
          >
            Book Your First Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
