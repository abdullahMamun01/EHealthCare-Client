import Image from "next/image";

import DoctorImage from "../../../public/assets/doctor.png";
import {
  CalendarFilled,
  MessageFilled,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function HowItWorks() {
  const steps = [
    {
      icon: <SearchOutlined className="text-blue-500 text-3xl"/>,
      title: "Search Doctor",
      description:
        "Search for a doctor based on specialization, location, or availability.",
    },
    {
      icon: <UserOutlined className="text-blue-500 text-3xl"/>,
      title: "Check Doctor Profile",
      description:
        "Explore detailed doctor profiles on our platform to make informed healthcare decisions.",
    },
    {
      icon: <CalendarFilled className="text-blue-500 text-3xl"/>,
      title: "Schedule Appointment",
      description:
        "After choose your preferred doctor, select a convenient time slot, & confirm your appointment.",
    },
    {
      icon: <MessageFilled className="text-blue-500 text-3xl"/>,
      title: "Get Your Solution",
      description:
        "Discuss your health concerns with the doctor and receive personalized advice & solution.",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjVsNi42NS0xMS41NUw0NSAyMGwtNi42NS0xMS41NUwzMS43IDIwbC02LjY1LTExLjU1TDE4LjM1IDIwbC02LjY1LTExLjU1TDUgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')] opacity-10" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12  items-center">
          <div className="relative w-full h-full mx-auto my-auto col-span-4">
            <div className="absolute inset-0 bg-blue-100 rounded-full scale-125 blur-3xl opacity-20" />
            <Image
              src={DoctorImage}
              alt="Doctor"
              width={500}
              height={500}
              className="relative rounded-full"
            />
          </div>

          <div className="col-span-8">
            <div className="r mb-12">
              <h2 className="text-lg text-blue-500 font-medium mb-2">
                How it Works
              </h2>
              <h3 className="text-4xl font-bold text-navy-900">
                4 easy steps to get your solution
                <span className="text-blue-500 ml-2">+</span>
              </h3>
            </div>
            <div className="grid gap-8 grid-cols-2">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-blue-50 p-3.5 w-[60px] h-[60px] rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-navy-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 font-semibold leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
