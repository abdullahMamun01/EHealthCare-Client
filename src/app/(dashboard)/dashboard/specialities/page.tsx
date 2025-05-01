import React from "react";
import SpecialtiesTable from "./_components/SpecialtiesTable";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Breadcrumb, Button } from "antd";
import SpecialityModal from "@/components/dashboard/speciality/SpecialityModal";

export default function page() {
  return (
    <div>
      <Content style={{ margin: "24px 16px", padding: 24, background: "#fff" }}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <Title level={4} style={{ margin: 0 }}>
              Specialities
            </Title>
            <Breadcrumb
              items={[{ title: "Dashboard" }, { title: "Specialities" }]}
            />
          </div>
          {/* <Button type="primary">Add</Button> */}
          <SpecialityModal />
        </div>
        <SpecialtiesTable />
      </Content>
    </div>
  );
}
