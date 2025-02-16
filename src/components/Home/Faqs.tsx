"use client";
import { MinusSquareOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import Image from "next/image";
import React from "react";
import FaqImage from "../../../public/faqs.png";
export default function Faqs() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const faqItems = [
    {
      label: "How do I book an appointment with a doctor?",
      children: (
        <h1 className="font-semibold text-[16px] text-gray-600">
          To book an appointment with a doctor, visit our website and select the
          desired doctor and date/time. You can then proceed to the payment page
          to complete the booking process.
        </h1>
      ),
      style: {
        paddingbottom: "10px",
      },
    },

    {
      label: "Can I request a specific doctor when booking my appointment?",
      children: (
        <h1 className="font-semibold text-[16px] text-gray-600">
          Yes, you can select a specific doctor when booking your appointment.
          You can search for doctors by name, read their profiles, and choose
          the one that best suits your needs.
        </h1>
      ),
      paddingbottom: "10px",
    },
    {
      label:
        "What should I do if I need to cancel or reschedule my appointment?",
      children: (
        <h1 className="font-semibold text-[16px] text-gray-600">
          You can cancel or reschedule your appointment through our website or
          app. Please do so at least 24 hours before your scheduled appointment
          to avoid any cancellation fees.
        </h1>
      ),
      paddingbottom: "10px",
    },
    {
      label: "What if I'm running late for my appointment?",
      children: (
        <h1 className="font-semibold text-[16px] text-gray-600">
          If you're running late, please contact the clinic as soon as possible.
          We'll try to accommodate you, but if you're more than 15 minutes late,
          you may need to reschedule.
        </h1>
      ),
      paddingbottom: "10px",
    },
    {
      label: "Can I book appointments for family members or dependents?",
      children: (
        <h1 className="font-semibold text-[16px] text-gray-600">
          Yes, you can book appointments for family members or dependents after
          adding them to your profile. You'll need to provide their basic
          information and medical history.
        </h1>
      ),
      paddingbottom: "20px",
    },
  ];

  return (
    <div className=" py-12 relative">
      <div className="w-full mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            FAQ'S
          </span>
          <h1 className="text-3xl font-bold text-[#1a1c3b]">
            Your Questions are Answered
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <Collapse
              style={{
                backgroundColor: "white",
                border: "none",
                padding: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              expandIcon={({ isActive }) =>
                isActive ? (
                  <MinusSquareOutlined
                    className="!text-white  !font-bold !text-xl !border-blue-500 !bg-blue-500"
                    style={{
                      backgroundColor: "rgb(59 130 246)", // Tailwind blue-500
                      borderRadius: "4px",
                      padding: "4px", // Optional: To create some spacing around the icon
                    }}
                  />
                ) : (
                  <PlusOutlined className="!text-blue-500 !font-bold !text-xl" />
                )
              }
              expandIconPosition="end"
              onChange={onChange}
              items={faqItems}
            />
          </div>
          <div className="col-span-6">
            <Image
              src={FaqImage}
              alt="faq"
              placeholder="blur"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
