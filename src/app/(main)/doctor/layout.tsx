
import { UserSidebar } from "@/components/dashboard/sidebar/UserSidebar/UserSidebar";
import { Col, Row } from "antd";
import React from "react";

export default function DoctorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-10 py-5 rounded-md">
      <Row>
        <Col span={5} >
          <UserSidebar role="doctor" />
        </Col>
        <Col span={19}>{children}</Col>
      </Row>
    </div>
  );
}
