import React, { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import ImageUploadField from "./ImageUploadField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const specialitySchema = z.object({
  name: z.string().min(1, "Name is required"),
  icon: z.any({required_error: "Please upload an icon"}),
});

const SpecialityForm = forwardRef(({ onSubmit }: { onSubmit: (data: any) => Promise<void> }, ref) => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(specialitySchema),
  });

  useImperativeHandle(ref, () => ({
    submitForm: () => handleSubmit(onSubmit)(),
  }));

  return (
    <form>
      <div className="space-y-5">
        <ImageUploadField
          control={control}
          name="icon"
          rules={{ required: "Please upload an icon" }}
        />
        <InputField
          name="name"
          label="Name"
          placeholder="Enter name"
          control={control}
          type="text"
        />
      </div>
    </form>
  );
});

// ✅ Set displayName for better debugging
SpecialityForm.displayName = "SpecialityForm";

export default SpecialityForm;
