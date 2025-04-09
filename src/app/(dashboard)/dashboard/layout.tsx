import Sidebar from "@/components/dashboard/admin/Sidebar";
import React from "react";
import DashboardHeader from "./DashboardHeader";
import CustomBreadcrumb from "@/components/ui/CustomBreadcrumb";
import { Layout } from "antd";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
   
      <Layout style={{ minHeight: "100vh" }}>
        <div >
          <Sidebar />
        </div>

        <div className="w-full">
          <DashboardHeader />
          <CustomBreadcrumb />
          {children}
        </div>
      </Layout>

  );
}
