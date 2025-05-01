"use client";
import { usePatientsQuery } from "@/redux/api/patientApi";
import { Table, Avatar, Card } from "antd";
import { ColumnType } from "antd/es/table";
import Image from "next/image";
interface PatientRow {
  key: number;
  name: string;
  age: string | number;
  email: string;
  phone: string;
  country: string;
  photo: string;
}

const defaultColumns : ColumnType<PatientRow>[] = [
  {
    title: "Patient Name",
    dataIndex: "name",
    key: "name",
    className: " text-md text-gray-700 font-medium",
    render: (_: unknown, record : PatientRow) => (
      <div className="flex items-center">
        <Avatar
          src={
            <Image
              src={
                record?.photo ||
                `https://avatar.iran.liara.run/username?username=${record.name.slice(
                  0,
                  1
                )}`
              }
              alt={record.name}
              width={40}
              height={40}
            />
          }
        />
        <span className="ml-3">{record.name}</span>
      </div>
    ),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    className: " text-md text-gray-800 font-normal",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    className: " text-md text-gray-800 font-normal",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    className: " text-md text-gray-800 font-normal",
  },
];

interface PatientTableListProps {
  columns?:  ColumnType<PatientRow>[];
}

const PatientTableList = ({ columns }: PatientTableListProps) => {
  const allColumns = [...defaultColumns, ...(columns || [])].reduce(
    (acc: ColumnType<PatientRow>[], col) => {
      if (col.key === "key") {
        return [col, ...acc]; // Place "Patient ID" first
      }
      return [...acc, col]; // Keep other columns in order
    },
    []
  ) as ColumnType<PatientRow>[];


  const { data: patients, isLoading, isError } = usePatientsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const patientsData =
    patients?.data?.map((patient,idx) => ({
      key: idx,
      id: patient.id,
      name: patient.name,
      age: patient?.age || "N/A",
      email: patient.email,
      phone: patient.contactNo || "N/A",
      country: patient.country || 'N/A',
      photo:
        patient.photo ||
        `https://avatar.iran.liara.run/username?username=${patient.name.slice(
          0,
          1
        )}`,
    })) || [];

  return (
    <Card
      title={<h2 className="text-xl font-semibold pb-2 pt-4"><span className="text-sky-600">Patient</span> List</h2>}
      className="rounded-none  "
      bodyStyle={{ padding: 0 }}
    >
      <div className="bg-[#FBFFFF]  overflow-x-auto">
        <Table columns={allColumns} dataSource={patientsData} className="custom-ant-table px-4" />
      </div>
    </Card>
  );
};

export default PatientTableList;
