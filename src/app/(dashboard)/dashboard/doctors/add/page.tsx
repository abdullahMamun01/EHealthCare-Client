"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  TimePicker,
  Card,
  Row,
  Col,
  message,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  UploadOutlined,
  IdcardOutlined,
  BankOutlined,
  DollarOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import "antd/dist/reset.css";
import { useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import { Contact2, Phone } from "lucide-react";

const { Option } = Select;
const { TextArea } = Input;

interface DoctorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
  qualification: string;
  clinicAddress: string;
  consultationFee: number;
  availableDays: string[];
  workingHours: [string, string];
  about: string;
}

const specializations = [
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic",
  "Gynecologist",
  "Psychiatrist",
  "Dentist",
  "General Physician",
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function AddDoctorPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: DoctorFormData) => {
    setLoading(true);
    console.log("Form values:", values);

    // Simulate API call
    setTimeout(() => {
      message.success("Doctor added successfully!");
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  const uploadProps: UploadProps = {
    name: "avatar",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const { control } = useForm();

  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <Card className="w-full mx-auto shadow-md">
        <p className="text-lg text-gray-700 font-semibold my-2 border-b pb-2">
          Add Doctor
        </p>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="mt-4"
        >
          <Row gutter={16}>
            <Col span={12}>
              <InputField
                prefix={<UserOutlined />}
                control={control}
                name="firstName"
                label="First Name"
                placeholder="Enter first name"
                size="large"
              />
            </Col>
            <Col span={12} className="mb-4">
              <InputField
                prefix={<UserOutlined />}
                control={control}
                name="lastName"
                label="Last Name"
                placeholder="Enter first name"
                size="large"
              />
            </Col>
          </Row>

          <Row gutter={16} className="mb-4">
            <Col span={12}>
              <InputField
                prefix={<MailOutlined />}
                control={control}
                name="email"
                type="email"
                label="Email"
                placeholder="Enter email"
                size="large"
              />
            </Col>
            <Col span={12}>
              <InputField
                prefix={<PhoneOutlined />}
                control={control}
                name="contactNo"
                type="phone"
                label="Phone"
                placeholder="Enter phone number"
                size="large"
              />
            </Col>
          </Row>
          <Row gutter={16} className="mb-4">
            <Col span={12}>
            <InputField
                prefix={<EyeInvisibleOutlined />}
                placeholder="Enter Password"
                control={control}
                name="password"
                type="password"
                label="Password"
                size="large"
              />
            </Col>
            <Col span={12}>
              <InputField
                prefix={<EyeInvisibleOutlined  />}
                placeholder="Enter confirm Password"
                control={control}
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                size="large"
              />
            </Col>
          </Row>
          <Row gutter={16} className="mb-4">
            <Col span={12}>
              <SelectField
                control={control}
                name="specialization"
                label="Specialization"
                placeholder="Please select specialization"
                size="large"
                options={specializations.map((spec) => ({
                  label: spec,
                  value: spec,
                }))}
              />
            </Col>
            <Col span={12}>
              <InputField
                prefix={<IdcardOutlined />}
                placeholder="Enter years of experience"
                control={control}
                name="yearsOfExperience"
                type="text"
                label="Years of Experience"
                size="large"
              />
            </Col>
          </Row>

         
          <Row gutter={16}>
            <label htmlFor="" className="mt-4">Address</label>
            <TextArea
              rows={4}
              placeholder="Enter clinic address"
              size="large"
              className="my-4"
            />
          </Row>

       

          <Form.Item
            name="avatar"
            label="Profile Picture"
            rules={[
              { required: true, message: "Please upload profile picture" },
            ]}
          >
            <Upload {...uploadProps} listType="picture">
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full"
            >
              Add Doctor
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default AddDoctorPage;
