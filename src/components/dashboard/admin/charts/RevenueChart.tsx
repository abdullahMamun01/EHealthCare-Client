"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { ApexOptions } from "apexcharts" // Import ApexCharts options type

// Import ApexCharts dynamically to avoid SSR issues
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

interface RevenueData {
  month: string
  revenue: number
}

const revenueData: RevenueData[] = [
  { month: "Jan", revenue: 65 },
  { month: "Feb", revenue: 90 },
  { month: "Mar", revenue: 240 },
  { month: "Apr", revenue: 130 },
  { month: "May", revenue: 80 },
  { month: "Jun", revenue: 100 },
  { month: "Jul", revenue: 300 },
]

export function RevenueChart() {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const series = [
    {
      name: "Revenue",
      data: revenueData.map((item) => item.revenue),
    },
  ]

  const options: ApexOptions = {
    chart: {
      type: "area",
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
    colors: ["#3b82f6"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
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
      categories: revenueData.map((item) => item.month),
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
        formatter: (value) => `$${value}k`,
        style: {
          colors: "#64748b",
          fontSize: "12px",
          fontFamily: "inherit",
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value}k`,
      },
      theme: "light",
    },
  }

  if (!mounted) return <div className="h-full w-full flex items-center justify-center">Loading chart...</div>

  return (
    <div className="h-[310px] w-full py-1">
      <ApexChart options={options} series={series} type="area" height="100%" />
    </div>
  )
}
