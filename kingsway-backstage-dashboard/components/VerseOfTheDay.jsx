"use client"
import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import verseStyles from "@/styles/otherstyles.module.css"
import { Skeleton } from "./ui/skeleton"

export default function VerseOfTheDay() {
  const [vdata, setVData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://beta.ourmanna.com/api/v1/get?format=json"
      )
      setVData(res.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading)
    return (
      <div className="align-middle justify-center">
        {" "}
        <Skeleton className="w-full h-[200px] rounded-lg align-middle justify-center" />
      </div>
      //   <div className={verseStyles.vContainer}>
      //     &nbsp;
      //     <h2 className="text-center font-bold text-xl">Loading...</h2>
      //     <p className="text-center">Loading...</p>
      //   </div>
    )

  return (
    <div className={verseStyles.vContainer}>
      &nbsp;
      <h2 className="text-center font-bold text-2xl">
        {vdata.verse.details.reference}
        &nbsp;{vdata.verse.details.version}
      </h2>
      <p className="text-center text-2xl">{vdata.verse.details.text}</p>
    </div>
  )
}
