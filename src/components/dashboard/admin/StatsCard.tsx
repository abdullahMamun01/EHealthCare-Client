import type { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string
  icon: ReactNode
  color: string
  progress: number
  progressColor: string
}

export function StatCard({ title, value, icon, color, progress, progressColor }: StatCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 font-semibold">{title}</p>
          <h3 className="mt-1 text-3xl font-bold text-gray-700">{value}</h3>
        </div>
        <div className={`rounded-full p-3 ${color}`}>{icon}</div>
      </div>
      <div className="mt-4 h-2 w-full rounded-full bg-gray-200">
        <div className={`h-full rounded-full ${progressColor}`} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}
