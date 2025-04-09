"use client";

import React, { useState } from "react";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Trash2 } from "lucide-react";

import { IPatient } from "@/types/patient";

import { Space } from "antd";
import Modal from "@/components/Modal/Modal";
import { useDeletePatientMutation } from "@/redux/api/patientApi";
import { useToast } from "@/provider/ToastProvider";


type Props = {
  patient: IPatient;
};

const PatientActionButtons = ({ patient }: Props) => {
  const [deletePatient, { isLoading, isSuccess, isError }] =
    useDeletePatientMutation();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { successToast, errorToast } = useToast();

  const handleDelete = async () => {
    try {
     const res = await deletePatient(patient.id).unwrap();
     console.log(res , 'res');
      successToast("Patient deleted successfully");
      setOpen(false);
    } catch (error) {
      const err = error as any
      errorToast(err.data.message);
      console.log(error);
      setOpen(false);
    }
  };

  return (
    <Space>
      <EditOutlined
        className="text-green-500 cursor-pointer"
        onClick={handleDelete}
      />
      <EyeOutlined className="text-blue-500 cursor-pointer" />
      <Modal
        onOpenChange={setOpen}
        open={open}
        content={
          <span>
            Are you sure you want to delete this{" "}
            <span className="text-blue-500 text-lg px-1 font-medium">
              {patient.name}
            </span>{" "}
            patient?
          </span>
        }
        title="Delete Patient"
        onOk={handleDelete}
        confirmLoading={isLoading}
        cancelText="Cancel"
        okText="Delete"
      >
        <Trash2
          className="text-red-500 cursor-pointer w-4 h-4"
        />
      </Modal>
    </Space>
  );
};

export default PatientActionButtons;
