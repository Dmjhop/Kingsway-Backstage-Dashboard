"use client"
import ServiceSettings from "@/components/ServiceSettings"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Settings() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/serviceType"
        )
        console.log(response.data)
        setData(response.data)
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [])

  if (error) return <div>Error loading data</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <h1>Settings</h1>
      <div>
        {/* Render your data here */}
        {/* <p>{JSON.stringify(data)}</p> */}
      </div>
      <ServiceSettings serviceList={data} />
    </>
  )
}
