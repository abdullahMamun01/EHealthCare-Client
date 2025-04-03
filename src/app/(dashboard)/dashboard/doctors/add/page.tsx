'use client';
import React, { useState } from 'react';
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
  message 
} from 'antd';
import { 
  UserOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  UploadOutlined,
  IdcardOutlined,
  BankOutlined,
  DollarOutlined
} from '@ant-design/icons';
import type { UploadProps } from 'antd';
import 'antd/dist/reset.css';

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
  'Cardiologist',
  'Dermatologist',
  'Neurologist',
  'Pediatrician',
  'Orthopedic',
  'Gynecologist',
  'Psychiatrist',
  'Dentist',
  'General Physician'
];

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

function AddDoctorPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: DoctorFormData) => {
    setLoading(true);
    console.log('Form values:', values);
    
    // Simulate API call
    setTimeout(() => {
      message.success('Doctor added successfully!');
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  const uploadProps: UploadProps = {
    name: 'avatar',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <Card  className="w-full mx-auto shadow-md">
      <p className="text-lg text-gray-700 font-semibold my-2 border-b pb-2">Add Doctor</p>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="mt-4"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Please enter first name' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Enter first name" size='large'/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Please enter last name' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Enter last name" size='large'/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Enter email" size='large' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter phone number' }]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Enter phone number" size='large' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="specialization"
                label="Specialization"
                rules={[{ required: true, message: 'Please select specialization' }]}
              >
                <Select placeholder="Select specialization">
                  {specializations.map(spec => (
                    <Option key={spec} value={spec}>{spec}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="experience"
                label="Years of Experience"
                rules={[{ required: true, message: 'Please enter years of experience' }]}
              >
                <Input prefix={<IdcardOutlined />} placeholder="Enter years of experience" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="qualification"
                label="Qualification"
                rules={[{ required: true, message: 'Please enter qualification' }]}
              >
                <Input prefix={<BankOutlined />} placeholder="Enter qualification" size='large' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="consultationFee"
                label="Consultation Fee"
                rules={[{ required: true, message: 'Please enter consultation fee' }]}
              >
                <Input prefix={<DollarOutlined />} type="number" placeholder="Enter consultation fee" size='large' />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="clinicAddress"
            label="Clinic Address"
            rules={[{ required: true, message: 'Please enter clinic address' }]}
          >
            <TextArea rows={4} placeholder="Enter clinic address"  size='large'/>
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="availableDays"
                label="Available Days"
                rules={[{ required: true, message: 'Please select available days' }]}
              >
                <Select mode="multiple" placeholder="Select available days" size='large'>
                  {daysOfWeek.map(day => (
                    <Option key={day} value={day}>{day}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="workingHours"
                label="Working Hours"
                rules={[{ required: true, message: 'Please select working hours' }]}
              >
                <TimePicker.RangePicker className="w-full"  size='large'/>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="about"
            label="About"
            rules={[{ required: true, message: 'Please enter about information' }]}
          >
            <TextArea rows={4} placeholder="Enter about information" size='large' />
          </Form.Item>

          <Form.Item
            name="avatar"
            label="Profile Picture"
            rules={[{ required: true, message: 'Please upload profile picture' }]}
          >
            <Upload {...uploadProps} listType="picture">
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} className="w-full">
              Add Doctor
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default AddDoctorPage;