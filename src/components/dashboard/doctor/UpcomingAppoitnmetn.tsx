import { Avatar, Button, Card } from "antd";
import { Video } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function UpcomingAppoitnmetn() {
  return (
    <Card className="!bg-[#0F81FD] !text-white">
      <div className="">
        <h3 className="text-xl font-semibold mb-4">Upcoming Appointment</h3>
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zATO0W2Ug6bZ2UffKUA1cbHonXP8Vt.png"
              width={100}
              height={100}
              className="rounded-full"
              alt="Adrian Marshall"
            />
          </Avatar>
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2">
              <span className="opacity-80 font-semibold ">#Apt0001</span>
              <h4 className="font-medium text-[17px]">Adrian Marshall</h4>
            </div>
            <div className="text-center w-1/2">
              <p className="text-sm opacity-90 text-[17px] mb-1 ml-14">General visit</p>
              <p className="text-sm opacity-90 text-[17px] ml-14">Today, 10:45 AM</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center justify-between gap-2">
            <Video className="h-5 w-5" />
            <span className="text-[16px] font-semibold">Video Appointment</span>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 !bg-white !text-black !font-semibold hover:bg-white/90 !py-5 !rounded-3xl">
              Start Appointment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
