/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Trash2 } from "lucide-react";

import { Space } from "antd";
import Modal from "@/components/Modal/Modal";

import { useToast } from "@/provider/ToastProvider";

import { ISpecialty } from "@/types/speciality";
import { useDeleteSpecialityMutation } from "@/redux/api/speciality";

type Props = {
  sepecaility: ISpecialty;
};

const SpecialityActionButtons = ({ sepecaility }: Props) => {
  const [deleteSpeciality, { isLoading }] = useDeleteSpecialityMutation();

  const [open, setOpen] = useState(false);
  const { successToast, errorToast } = useToast();

  const handleDelete = async () => {
    try {
      await deleteSpeciality(sepecaility.id).unwrap();
      successToast("Speciality deleted successfully");
      setOpen(false);
    } catch (error) {
      const err = error as any;
      errorToast(err.data.message);
      setOpen(false);
    }
  };

  return (
    <Space>
      <EyeOutlined className="text-blue-500 cursor-pointer" />
      <Modal
        onOpenChange={setOpen}
        open={open}
        content={
          <span>
            Are you sure you want to delete this{" "}
            <span className="text-blue-500 text-lg px-1 font-medium">
              {sepecaility.name}
            </span>{" "}
            sepecaility?
          </span>
        }
        title="Delete Speciality"
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

export default SpecialityActionButtons;
