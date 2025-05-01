/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Trash2 } from "lucide-react";

import { Space } from "antd";
import Modal from "@/components/Modal/Modal";

import { useToast } from "@/provider/ToastProvider";
import Link from "next/link";
import { useDeleteDoctorMutation } from "@/redux/api/doctorApi";
import { IDoctor } from "@/types/doctor";

type Props = {
  doctor: IDoctor;
};

const DoctorActionButtons = ({ doctor }: Props) => {
  const [deleteDoctor, { isLoading }] = useDeleteDoctorMutation();

  const [open, setOpen] = useState(false);
  const { successToast, errorToast } = useToast();

  const handleDelete = async () => {
    try {
      const res = await deleteDoctor(doctor.id).unwrap();
      console.log(res, "res");
      successToast("Patient deleted successfully");
      setOpen(false);
    } catch (error) {
      const err = error as any;
      errorToast(err.data.message);
      console.log(error);
      setOpen(false);
    }
  };

  return (
    <Space>
      <Link href={`/dashboard/doctors/${doctor.id}/edit`}>
        <EditOutlined
          className="text-green-500 cursor-pointer"
        />
      </Link>
      <EyeOutlined className="text-blue-500 cursor-pointer" />
      <Modal
        onOpenChange={setOpen}
        open={open}
        content={
          <span>
            Are you sure you want to delete this{" "}
            <span className="text-blue-500 text-lg px-1 font-medium">
              {doctor.name}
            </span>{" "}
            doctor?
          </span>
        }
        title="Delete Patient"
        onOk={handleDelete}
        confirmLoading={isLoading}
        cancelText="Cancel"
        okText="Delete"
      >
        <Trash2 className="text-red-500 cursor-pointer w-4 h-4" />
      </Modal>
    </Space>
  );
};

export default DoctorActionButtons;
