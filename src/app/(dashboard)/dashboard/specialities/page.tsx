import React from "react";
import SpecialtiesTable from "./_components/SpecialtiesTable";
import { Content } from "antd/es/layout/layout";

import SpecialityModal from "@/components/dashboard/speciality/SpecialityModal";

export default function page() {
  return (
    <div>
      <Content style={{ margin: "24px 16px", padding: 24, background: "#fff" }}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-700">Specialities</h1>
          {/* <Button type="primary">Add</Button> */}
          <SpecialityModal />
        </div>
        <SpecialtiesTable />
      </Content>
    </div>
  );
}
