import React from 'react'
import { Form, DatePicker } from 'antd'
import dayjs from 'dayjs'


const { RangePicker } = DatePicker

const DateRangeSelector = ({ form }) => {
  return (
    <div className="space-y-4">
      <Form.Item
        name="dateRange"
        label={
          <span className="text-gray-700 font-medium">Schedule Period</span>
        }
        rules={[
          {
            required: true,
            message: 'Please select the date range for your schedule',
          },
        ]}
        initialValue={[
          dayjs('2025-02-15'),
          dayjs('2025-02-18')
        ]}
      >
        <div 

        >
          <RangePicker 
            size="large"
            format="YYYY-MM-DD"
            className="w-full shadow-sm border border-gray-200 rounded-lg transition-all duration-200"
            placeholder={['Start Date', 'End Date']}
            disabledDate={(current) => {
              // Can't select days before today
              return current && current < dayjs().startOf('day');
            }}
          />
        </div>
      </Form.Item>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="font-medium text-blue-700">🗓️ Schedule Tip</p>
          <p>Create recurring schedules for predictable availability patterns.</p>
        </div>
        <div className="bg-amber-50 p-3 rounded-lg">
          <p className="font-medium text-amber-700">⚠️ Important</p>
          <p>Date ranges cannot include past dates.</p>
        </div>
      </div>
    </div>
  )
}

export default DateRangeSelector