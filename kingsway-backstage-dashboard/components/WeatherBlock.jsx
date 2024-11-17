"use client"
import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import vari from "../next.config"
import Image from "next/image"
import weaStyles from "@/styles/otherstyles.module.css"
import "dotenv/config"
import { Skeleton } from "./ui/skeleton"

require("dotenv").config()

export default function WeatherBlock(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  // const apiiiikey = apiKey

  useEffect(() => {
    const fetchData = async () => {
      let weatherLAT = ""
      let weatherLON = ""
      let key = "dec365eb0deebfdfb48e07c1ae6ba480"

      if (props.title === `CHL`) {
        weatherLAT = "39.92766879306311"
        weatherLON = "-75.01340043044847"
      } else if (props.title === `GLB`) {
        weatherLAT = `39.68428434246347`
        weatherLON = `-75.100563296308567`
      }
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${weatherLAT}&lon=${weatherLON}&appid=${key}&units=imperial`
      )
      setData(res.data)
      setLoading(false)
    }

    fetchData()
    console.log(data)
  }, [])

  if (loading)
    return (
      <div className="align-middle justify-center">
        <Skeleton className="w-[200px] h-[200px] rounded-lg align-middle justify-center" />
      </div>
    )
  let weatherCondition = data.weather[0].icon

  return (
    <div className={weaStyles.container}>
      <h2 className="font-normal text-2xl">
        <strong>{props.title}</strong>
      </h2>
      <Image
        src={`https://openweathermap.org/img/wn/${weatherCondition}@2x.png`}
        width={80}
        height={80}
        alt={`Pic of ${data.weather.main}`}></Image>
      <h4 className="font-normal text-2xl">
        {Math.round(data.main.temp) + `\u00B0`}
      </h4>
      <p>
        H:{Math.round(data.main.temp_max) + `\u00B0`} L:
        {Math.round(data.main.temp_min) + `\u00B0`}
      </p>
    </div>
  )
}
