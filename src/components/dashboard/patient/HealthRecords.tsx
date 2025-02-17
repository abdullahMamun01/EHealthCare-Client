
import { Card } from "antd"
import { Heart, Thermometer, Activity, Weight } from "lucide-react"

export function HealthRecords() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <h1 className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h2 className="text-sm font-medium">Heart Rate</h2>
          <Heart className="h-4 w-4 text-red-500" />
        </h1>
        <div>
          <div className="text-2xl font-bold">140 Bpm</div>
          <p className="text-xs text-green-500">+2% from last reading</p>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h1 className="text-sm font-medium">Body Temperature</h1>
          <Thermometer className="h-4 w-4 text-yellow-500" />
        </div>
        <div>
          <div className="text-2xl font-bold">37.5 °C</div>
          <p className="text-xs text-muted-foreground">Normal</p>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h1 className="text-sm font-medium">Blood Pressure</h1>
          <Activity className="h-4 w-4 text-blue-500" />
        </div>
        <div>
          <div className="text-2xl font-bold">100 mg/dl</div>
          <p className="text-xs text-green-500">+2% from last reading</p>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h1 className="text-sm font-medium">BMI</h1>
          <Weight className="h-4 w-4 text-purple-500" />
        </div>
        <div>
          <div className="text-2xl font-bold">20.1 kg/m²</div>
          <p className="text-xs text-muted-foreground">Normal weight</p>
        </div>
      </Card>
    </div>
  )
}

