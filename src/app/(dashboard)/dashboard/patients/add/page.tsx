"use client";
import React from "react";
import { Form, Input, Select, DatePicker, Button, Card } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

function App() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <div className="w-full mx-auto">
        <Card
          title={
            <h1 className="text-2xl font-semibold text-gray-700">
              Patient Registration Form
            </h1>
          }
          className="shadow-lg"
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: "Please enter first name" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter first name"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: "Please enter last name" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter last name"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="dateOfBirth"
                label="Date of Birth"
                rules={[
                  { required: true, message: "Please select date of birth" },
                ]}
              >
                <DatePicker className="w-full" />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: "Please select gender" }]}
              >
                <Select placeholder="Select gender" size="large">
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>

              {/* Contact Information */}
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  { required: true, message: "Please enter phone number" },
                  {
                    pattern: /^\d{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="Enter phone number"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter email"
                  size="large"
                />
              </Form.Item>

              {/* Medical Information */}
              <Form.Item
                name="bloodGroup"
                label="Blood Group"
                rules={[
                  { required: true, message: "Please select blood group" },
                ]}
              >
                <Select
                  prefix={<HeartOutlined />}
                  placeholder="Select blood group"
                  size="large"
                >
                  <Select.Option value="A+">A+</Select.Option>
                  <Select.Option value="A-">A-</Select.Option>
                  <Select.Option value="B+">B+</Select.Option>
                  <Select.Option value="B-">B-</Select.Option>
                  <Select.Option value="O+">O+</Select.Option>
                  <Select.Option value="O-">O-</Select.Option>
                  <Select.Option value="AB+">AB+</Select.Option>
                  <Select.Option value="AB-">AB-</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="weight"
                label="Weight (kg)"
                rules={[{ required: true, message: "Please enter weight" }]}
              >
                <Input
                  type="number"
                  placeholder="Enter weight in kg"
                  size="large"
                />
              </Form.Item>
            </div>

            {/* Address */}
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "Please enter address" }]}
            >
              <TextArea
                size="large"
                placeholder="Enter complete address"
                rows={4}
              />
            </Form.Item>

            {/* Medical History */}
            <Form.Item name="medicalHistory" label="Medical History">
              <TextArea
                placeholder="Enter any previous medical conditions, surgeries, or ongoing treatments"
                rows={4}
                size='large'
              />
            </Form.Item>

            {/* Emergency Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="emergencyContactName"
                label="Emergency Contact Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter emergency contact name",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter emergency contact name"
                  size='large'
                />
              </Form.Item>

              <Form.Item
                name="emergencyContactPhone"
                label="Emergency Contact Phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter emergency contact phone",
                  },
                  {
                    pattern: /^\d{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="Enter emergency contact phone"
                  size='large'
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-600 w-full"
              >
                Register Patient
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default App;
