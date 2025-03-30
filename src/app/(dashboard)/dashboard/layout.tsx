import Sidebar from "@/components/dashboard/admin/Sidebar";
import React from "react";
import DashboardHeader from "./DashboardHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 relative">

        <Sidebar />

      <div className="col-span-10">
        <DashboardHeader/>
        {children}</div>
    </div>
  );
}
