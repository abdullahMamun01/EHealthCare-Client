
import { UserSidebar } from "@/components/dashboard/sidebar/UserSidebar/UserSidebar";
import { Col, Row } from "antd";
import React from "react";

export default function PatientDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10 rounded-md">
      <Row>
        <Col span={5} >
          <UserSidebar role="patient" />
        </Col>
        <Col span={19}>{children}</Col>
      </Row>
    </div>
  );
}
