import { StatCard } from "@/components/dashboard/admin/StatsCard";
import React from "react";
import { Calendar, FileText, Users } from "lucide-react";
import { Card } from "antd";
import { RevenueChart } from "@/components/dashboard/admin/charts/RevenueChart";
import { AppointmentStatusChart } from "@/components/dashboard/admin/charts/AppointmentStatusChart";
import DoctorListTable from "@/components/dashboard/doctor/DoctorListTable";
import PatientTableList from "@/components/dashboard/patient/PatientTableList";
import AppointmentTableList from "@/components/dashboard/appointments/AppointmentTableList";

export default function AdminDashboardPage() {
  return (
    <div className="p-4 px-8 bg-[#F1F5F6]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700  uppercase">
          Welcome Admin!
        </h1>
        <p className="text-gray-600 font-medium">Dashboard</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Doctors"
          value="168"
          icon={<Users className="h-6 w-6" />}
          color="bg-blue-100 text-blue-500"
          progress={60}
          progressColor="bg-blue-400"
        />

        <StatCard
          title="Patients"
          value="487"
          icon={<Users className="h-6 w-6" />}
          color="bg-green-100 text-green-500"
          progress={70}
          progressColor="bg-green-400"
        />

        <StatCard
          title="Appointment"
          value="485"
          icon={<Calendar className="h-6 w-6" />}
          color="bg-red-100 text-red-500"
          progress={65}
          progressColor="bg-red-400"
        />

        <StatCard
          title="Revenue"
          value="$62523"
          icon={<FileText className="h-6 w-6" />}
          color="bg-yellow-100 text-yellow-500"
          progress={80}
          progressColor="bg-yellow-400"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1 my-4 rounded-none">
          <h2 className="text-gray-700 text-2xl font-semibold">Revenue</h2>
          <RevenueChart />
        </Card>

        <Card className="col-span-1 my-4  rounded-none">
          <h3>Status</h3>
          <div className="h-[300px]">
            <AppointmentStatusChart />
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <DoctorListTable />
        </div>
        <div className="col-span-1">
          <PatientTableList />
        </div>
      </div>

      <div className="mt-4">
        <AppointmentTableList/>
      </div>
    </div>
  );
}
