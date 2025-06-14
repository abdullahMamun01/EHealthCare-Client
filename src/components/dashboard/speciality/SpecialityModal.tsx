"use client";

import SpecialityForm from "@/components/form/SpecialityForm";
import Modal from "@/components/Modal/Modal";

import { useToast } from "@/provider/ToastProvider";
import { useCreateSpecialityMutation } from "@/redux/api/speciality";
import { Button } from "antd";
import { Plus } from "lucide-react";
import React, { useRef, useState } from "react";
export default function SpecialityModal() {
  const [createSpeciality, { isLoading }] = useCreateSpecialityMutation();
  const [open, setOpen] = useState(false);
  const formRef = useRef<{ submitForm: () => void }>(null);
  const { successToast, errorToast } = useToast();
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("file", data.icon?.[0]?.originFileObj || data.icon?.[0]);

    try {
      await createSpeciality(formData).unwrap(); // ✅ Pass FormData, not `data`
      successToast("Speciality created successfully");
      setOpen(false)
    } catch (error) {
      const err = error as Error;
      errorToast(err.message);
    }
  };

  const handleSubmit = async () => {
    // form submission logic here
    formRef.current?.submitForm();
  };
  return (
    <div>
      <Modal
        title="Add New Speciality"
        content={<SpecialityForm ref={formRef} onSubmit={onSubmit} />}
        onOk={handleSubmit}
        open={open}
        onOpenChange={setOpen}
        okText="Submit"
        confirmLoading={isLoading}
      >
        <Button type="primary">
          <Plus className="mr-0 w-4 h-4" />
          Add{" "}
        </Button>
      </Modal>
    </div>
  );
}
