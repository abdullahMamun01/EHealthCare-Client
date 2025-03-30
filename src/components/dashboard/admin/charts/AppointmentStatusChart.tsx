"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { ApexOptions } from "apexcharts"

// Import ApexCharts dynamically to avoid SSR issues
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

const statusData = [
  { month: "Jan", completed: 100, cancelled: 40, pending: 30 },
  { month: "Feb", completed: 80, cancelled: 60, pending: 50 },
  { month: "Mar", completed: 90, cancelled: 80, pending: 70 },
  { month: "Apr", completed: 70, cancelled: 120, pending: 90 },
  { month: "May", completed: 50, cancelled: 80, pending: 100 },
  { month: "Jun", completed: 120, cancelled: 150, pending: 80 },
]

export function AppointmentStatusChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const series = [
    {
      name: "Completed",
      data: statusData.map((item) => item.completed),
    },
    {
      name: "Cancelled",
      data: statusData.map((item) => item.cancelled),
    },
    {
      name: "Pending",
      data: statusData.map((item) => item.pending),
    },
  ]

  const options : ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      fontFamily: "inherit",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#3b82f6", "#ef4444", "#f59e0b"],
    markers: {
      size: 4,
      strokeWidth: 0,
      hover: {
        size: 6,
      },
    },
    grid: {
      borderColor: "#f1f1f1",
      row: {
        colors: ["transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: statusData.map((item) => item.month),
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
          fontFamily: "inherit",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
          fontFamily: "inherit",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
      fontSize: "13px",
      fontFamily: "inherit",
    },
    tooltip: {
      theme: "light",
    },
  }

  if (!mounted) return <div className="h-full w-full flex items-center justify-center">Loading chart...</div>

  return (
    <div className="h-[300px] w-full">
      <ApexChart options={options} series={series} type="line" height="100%" />
    </div>
  )
}

