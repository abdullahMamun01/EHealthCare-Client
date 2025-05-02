import React, { useState } from "react";
import { Form, Button, Divider, message } from "antd";
import DateRangeSelector from "./DateRangeSelector";
import TimeRangeSelector from "./TimeRangeSelector";

const ScheduleForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values : any) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Schedule created:", values);
      message.success("Schedule created successfully!");
      setLoading(false);

      // Optionally reset form here if needed
      // form.resetFields()
    }, 1500);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        dateRange: ["2025-02-15", "2025-02-18"],
        startTime: "09:00",
        endTime: "15:00",
      }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-4">Date Range</h3>
        <DateRangeSelector form={form} />
      </div>

      <Divider className="my-6" />

      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-4">Daily Hours</h3>
        <TimeRangeSelector form={form} />
      </div>

      <Divider className="my-6" />

      <div className="mt-8 flex justify-end">
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          className="bg-blue-500 hover:bg-blue-600 px-8 py-2 h-auto text-base font-medium transition-colors duration-200 rounded-lg"
        >
          Create Schedule
        </Button>
      </div>
    </Form>
  );
};

export default ScheduleForm;
