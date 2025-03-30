import AppointmentScheduler from '@/components/dashboard/doctor/AppointmentScheduler'
import DoctorOverView from '@/components/dashboard/doctor/DoctorOverView'
import UpcomingAppoitnmetn from '@/components/dashboard/doctor/UpcomingAppoitnmetn'
import React from 'react'

export default function page() {
  return (
    <div className='px-5 grid grid-cols-12 gap-2 py-4 bg-sky-50'>
        <DoctorOverView/>
        <AppointmentScheduler/>
        <div className="col-span-6">
            <UpcomingAppoitnmetn/>
        </div>
    </div>
  )
}
