"use client"
import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import verseStyles from "@/styles/otherstyles.module.css"
import { Skeleton } from "./ui/skeleton"

export default function ChrVOTD() {
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
    <div className="pb-5 px-5">
      &nbsp;
      <h2 className="text-center font-bold text-2xl">Luke 2:10-12&nbsp;NIV</h2>
      <p className="text-lg lg:font-normal lg:text-2xl text-center">
        But the angel said to them, “Do not be afraid. I bring you good news
        that will cause great joy for all the people. Today in the town of David
        a Savior has been born to you; he is the Messiah, the Lord. This will be
        a sign to you: You will find a baby wrapped in cloths and lying in a
        manger.”
      </p>
    </div>
  )
}
