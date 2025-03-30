import { Card } from "antd";
import { Users, Calendar, Clock } from "lucide-react";

export default function DoctorOverView() {
  return (
    <div className="grid grid-cols-1 gap-2 mb-0 col-span-3">
      <Card className="p-4 shadow-sm !border !border-sky-200 h-[130px] !m-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 mb-1">Total Patient</p>
            <h3 className="text-2xl font-semibold">978</h3>
            <p className="text-green-500 text-sm mt-1">↑ 15% From Last Week</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <Users className="h-6 w-6 text-[#4096FE]" />
          </div>
        </div>
      </Card>

      <Card className="p-6 !border !border-sky-200 h-[130px]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 mb-1">Patients Today</p>
            <h3 className="text-2xl font-semibold">80</h3>
            <p className="text-red-500 text-sm mt-1">↓ 15% From Yesterday</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <Clock className="h-6 w-6 text-[#4096FE]" />
          </div>
        </div>
      </Card>

      <Card className="p-6 !border !border-sky-200 h-[130px]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 mb-1">Appointments Today</p>
            <h3 className="text-2xl font-semibold">50</h3>
            <p className="text-green-500 text-sm mt-1">↑ 20% From Yesterday</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <Calendar className="h-6 w-6 text-[#4096FE]" />
          </div>
        </div>
      </Card>

      <Card className="p-4 shadow-sm !border !border-sky-200 h-[130px] !m-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 mb-1">Total Patient</p>
            <h3 className="text-2xl font-semibold">978</h3>
            <p className="text-green-500 text-sm mt-1">↑ 15% From Last Week</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <Users className="h-6 w-6 text-[#4096FE]" />
          </div>
        </div>
      </Card>
    </div>
  );
}
