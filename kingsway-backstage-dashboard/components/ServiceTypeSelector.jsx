"use client"

import { useRouter } from "next/navigation"

export default function ServiceTypeSelector({ currentServiceType }) {
  const router = useRouter()

  const serviceTypes = [
    { id: "sunday", name: "Sunday Service" },
    { id: "wednesday", name: "Wednesday Night" },
    { id: "special", name: "Special Events" },
  ]

  return (
    <select
      value={currentServiceType}
      onChange={(e) => router.push(`${e.target.value}`)}
      className="bg-gray-800 text-white p-2 rounded">
      {serviceTypes.map((type) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </select>
  )
}
