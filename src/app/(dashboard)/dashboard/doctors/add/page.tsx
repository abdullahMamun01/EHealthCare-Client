"use client";
import { Card, Row, Col } from "antd";

import { useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import ImageUploadField from "@/components/form/ImageUploadField";

import { doctorRegisterSchema, TDoctorRegister } from "@/zod/doctorValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import doctorFormFields from "./_components/DoctorFiledItems";
import SubmitButton from "@/components/SubmitButton";
import TextAreaField from "@/components/form/TextAreaField";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { useToast } from "@/provider/ToastProvider";

function AddDoctorPage() {
  const [creteDoctor, { isLoading }] = useCreateDoctorMutation();
  const form = useForm({
    resolver: zodResolver(doctorRegisterSchema),
  });
  const { control, handleSubmit } = form;
  const { successToast, errorToast } = useToast();
  const onSubmit = async (data: TDoctorRegister) => {
    const formData = new FormData();
    const transformedData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      gender: data.gender,
      contactNo: data.contactNo,
      address: data.address,
      yearsOfExperience: data.yearsOfExperience.toString(),
      country: data.country,
      licenseNo: data.licenseNo,
    };
  
    // Append non-file fields
    Object.entries(transformedData).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    // Append file
    const avatarFile = data.avatar?.[0]?.originFileObj || data.avatar?.[0];
    if (avatarFile) {
      formData.append("file", avatarFile);
    }

    try {
      await creteDoctor(formData).unwrap();
      successToast("Doctor created successfully");
    } catch (error) {
      const err = error as Error;
      console.log(err, "error");
      errorToast(err.message);
    }
  };
  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <Card className="w-full mx-auto  px-4">
        <p className="text-lg text-gray-700 font-semibold my-2 border-b pb-2">
          Add Doctor
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={16} className="">
            {doctorFormFields.map((field) => {
              switch (field.component) {
                case "input":
                  return (
                    <Col span={12} key={field.name} className="mb-4">
                      <InputField {...field} control={control} />
                    </Col>
                  );
                case "select":
                  return (
                    <Col span={12} key={field.name} className="mb-4 ">
                      <SelectField
                        control={control}
                        {...field}
                        options={field.options || []}
                      />
                    </Col>
                  );
                case "textarea":
                  return (
                    <Col span={24} key={field.name} className="mb-4">
                      <TextAreaField
                        control={control}
                        name={field.name}
                        label="Clinic Address"
                        rows={4}
                        placeholder={field.placeholder}
                        size={field.size}
                      />
                    </Col>
                  );
                case "upload":
                  return (
                    <Col span={24} key={field.name} className="mt-2">
                      <ImageUploadField
                        control={control}
                        name="avatar"
                        rules={field.rules}
                      />
                    </Col>
                  );
                default:
                  return null;
              }
            })}
          </Row>
          <SubmitButton
            loading={isLoading}
            loadingText="Submitting..."
            buttonText="Submit"
          />
        </form>
      </Card>
    </div>
  );
}

export default AddDoctorPage;
