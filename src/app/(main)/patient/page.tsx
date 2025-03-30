import AppointmentScheduler from "@/components/dashboard/patient/AppointmentScheduler";
import { HealthMetrics } from "@/components/dashboard/patient/HealthMetrics";
import OverallReport from "@/components/dashboard/patient/OverallReport";
import PastAppointments from "@/components/dashboard/patient/PastAppointments";
import Reports from "@/components/dashboard/patient/Reports";
import { Button } from "antd";

import React from "react";

export default function page() {
  return (
    <div className=" min-h-screen bg-sky-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#1B2559]">Dashboard</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <span>Patient</span>
              <span>/</span>
              <span>Dashboard</span>
            </div>
          </div>
          <Button
            className="!bg-blue-600 !text-white  !rounded-lg flex items-center gap-2 hover:bg-blue-700"
            style={{ padding: "20px 20px" }}
          >
            Book a new Appointment
            <span className="text-lg">+</span>
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-[#1B2559] mb-4">
                Health Records
              </h2>
              <HealthMetrics />
            </div>

            <div className="text-sm text-gray-500 mt-2 mb-0">
              Report generated on last visit : 25 Mar 2024
            </div>
          </div>

          <div className="col-span-4 space-y-6 h-[300px]">
            <OverallReport />
            {/* <Favorites /> */}
          </div>

          <div className="col-span-5 space-y-0">
           <AppointmentScheduler/>
          </div>
          <div className="col-span-7 space-y-6">
           <PastAppointments/>
          </div>
          <div className="col-span-12">
            <Reports />
          </div>
        </div>
      </div>
    </div>
  );
}
