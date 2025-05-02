import React from "react";
import { Form, TimePicker } from "antd";
import dayjs from "dayjs";

const TimeRangeSelector = ({ form }) => {
  const format = "HH:mm";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Form.Item
          name="startTime"
          label={<span className="text-gray-700 font-medium">Start Time</span>}
          rules={[
            {
              required: true,
              message: "Please select a start time",
            },
          ]}
          initialValue={dayjs("09:00", format)}
        >
          <div>
            <TimePicker
              size="large"
              format={format}
              className="w-full shadow-sm border border-gray-200 rounded-lg transition-all duration-200"
              placeholder="Start Time"
              minuteStep={15}
              showNow={false}
            />
          </div>
        </Form.Item>

        <Form.Item
          name="endTime"
          label={<span className="text-gray-700 font-medium">End Time</span>}
          rules={[
            {
              required: true,
              message: "Please select an end time",
            },
          ]}
          initialValue={dayjs("15:00", format)}
        >
          <div>
            <TimePicker
              size="large"
              format={format}
              className="w-full shadow-sm border border-gray-200 rounded-lg transition-all duration-200"
              placeholder="End Time"
              minuteStep={15}
              showNow={false}
            />
          </div>
        </Form.Item>
      </div>

      <div className="bg-green-50 p-4 rounded-lg text-sm text-gray-600">
        <p className="font-medium text-green-700 mb-1">
          📌 Time Slot Information
        </p>
        <p>
          The schedule will create appointment slots based on your clinic's
          standard appointment duration.
        </p>
        <p className="mt-2">
          Standard appointment length:{" "}
          <span className="font-medium">30 minutes</span>
        </p>
      </div>
    </div>
  );
};

export default TimeRangeSelector;
