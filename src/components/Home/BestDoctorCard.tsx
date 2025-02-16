import { Star } from "lucide-react"
import Image from "next/image"
import Doctor from '../../../public/assets/doctor.png'
import Card from "antd/es/card/Card"
import { Button } from "antd"
interface DoctorCardProps {
  name: string
  image: string
  credentials: string
  location: string
  consultations: number
  rating: number
  priceRange: string
}

export function BestDoctorCard({ name, credentials, location, consultations, rating, priceRange }: DoctorCardProps) {
  return (
    <Card variant="outlined" styles={{
        body: {
            padding: '10px'
        }
    }} className="flex flex-col rounded-lg bg-white p-4 shadow-md relative">
      <div className="relative mb-4 bg-sky-50 px-10">
        <Image src={ Doctor} alt={name} width={300} height={400} className="h-64 w-full rounded-lg object-contain" />
        <span className="absolute right-2 top-2 rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white">
          {priceRange}
        </span>
      </div>

      <div className="flex items-center gap-1 px-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />    
        ))}
        <span className="ml-2 rounded-full bg-purple-600 px-2 py-0.5 text-sm text-white">{rating}</span>
      </div>

      <h3 className="mt-3 text-xl font-bold text-gray-900 px-2">{name}</h3>
      <p className="text-sm text-gray-600 px-2">{credentials}</p>

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 line-clamp-1 px-1">
        <svg className="h-4 w-4 text-blue-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="line-clamp-1">{location}</span>
        <span className="ml-auto flex items-center gap-1">
          <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {consultations} Consultations
        </span>
      </div>

      <div className="mt-4 flex gap-3 px-2 pb-2">
        <Button className="!flex-1 !rounded-md !bg-[#252A30] !py-2 !text-sm !font-medium !text-white !hover:bg-navy-800 ">
          View Profile
        </Button>
        <Button className="!flex-1 !rounded-md !bg-blue-500 !px-4 !py-2 text-sm font-medium !text-white hover:bg-blue-600">
          Book Now
        </Button>
      </div>
    </Card>
  )
}

