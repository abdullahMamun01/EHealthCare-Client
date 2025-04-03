// app/appointments/page.tsx

import { Suspense } from "react";
import HeavyComponents from "./_components/HeavyComponents";
import Image from "next/image";

// Simulate a delay before fetching data


export default async function AppointmentsPage() {


  return (
    <div>
      <h1>Appointments Page</h1>
      <Suspense fallback={<div>Loading Heavy...</div>}>
        <HeavyComponents />
      </Suspense>

    </div>
  );
}
