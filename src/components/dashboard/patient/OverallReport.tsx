"use client";
import { Progress } from "antd";

export default function OverallReport() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Overall Report</h2>
      <div className="relative w-[100px] h-[100px] aspect-square mx-auto">
        {/* <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-xs text-gray-500">Last visit 25</div>
          <div className="text-xs text-gray-500">Mar 2024</div>
        </div> */}
        <Progress
          type="circle"
          width={80}
          // height={100}
          percent={75}
          
        />
      </div>
      <div className="text-center ">
        <p className="text-gray-500">Your health is</p>
        <p className="text-sm font-semibold text-gray-700">95% Normal</p>
      </div>
      <button className="w-full mt-4 bg-[#1B2559] text-white py-2 rounded-lg hover:bg-blue-900">
        View Details
      </button>
    </div>
  );
}
