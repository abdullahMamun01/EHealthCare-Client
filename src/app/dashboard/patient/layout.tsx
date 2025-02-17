import { Sidebar } from "@/components/dashboard/patient/PatientSidebar";
import { Col, Row } from "antd";
import React from "react";

export default function PatientDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-10">
      <Row>
        <Col span={5}>
          <Sidebar />
        </Col>
        <Col span={19}>{children}</Col>
      </Row>
    </div>
  );
}
