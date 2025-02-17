import { Heart, Thermometer, Activity, Droplets, TreesIcon as Lungs, Scale } from "lucide-react"

export function HealthMetrics() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Heart className="h-5 w-5 text-red-500" />
          <span className="text-sm">Heart Rate</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">140</span>
          <span className="text-sm">Bpm</span>
          <span className="text-xs text-green-500 ml-auto">2%</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Thermometer className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">Body Temperature</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">37.5</span>
          <span className="text-sm">°C</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Droplets className="h-5 w-5 text-blue-500" />
          <span className="text-sm">Glucose Level</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">70-90</span>
          <span className="text-xs text-red-500 ml-auto">6%</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Lungs className="h-5 w-5 text-purple-500" />
          <span className="text-sm">SpO2</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">96</span>
          <span className="text-sm">%</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Activity className="h-5 w-5 text-green-500" />
          <span className="text-sm">Blood Pressure</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">100</span>
          <span className="text-sm">mg/dl</span>
          <span className="text-xs text-green-500 ml-auto">2%</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Scale className="h-5 w-5 text-orange-500" />
          <span className="text-sm">BMI</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">20.1</span>
          <span className="text-sm">kg/m2</span>
        </div>
      </div>
    </div>
  )
}

