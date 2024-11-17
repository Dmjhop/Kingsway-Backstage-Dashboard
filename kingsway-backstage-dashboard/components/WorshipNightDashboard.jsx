"use client"
import Image from "next/image"
import backImage from "@/public/backstagebackground.png"
import ClockComp from "@/components/ClockComp"
import InRoomProdTable from "@/components/InRoomProdTable"
import VocalsTable from "@/components/VocalsTable"
import OnlineProdTable from "@/components/OnlineProdTable"
import BandTable from "@/components/BandTable"
import BroadcastProdTable from "@/components/BroadcastProdTable"
import BroadcastProdTable2 from "@/components/BroadcastProdTable2"
import ServiceInfoTable from "@/components/ServiceInfoTable"
import WeatherBlock from "@/components/WeatherBlock"
import VerseOfTheDay from "@/components/VerseOfTheDay"
import WNVocalsTable from "@/components/WNVocalsTable"
import WNBandTable from "@/components/WNBandTable"
import OtherWNBand from "@/components/OtherWNBand"
import WNInRoomProdTable from "@/components/WNInRoomProdTable"

import { useEffect, useState } from "react"
import { revalidateDashboard } from "@/app/actions/revalidate"
import defaultLayoutImg from "@/public/No Current Layout.png"

// React Server Components
import * as motion from "framer-motion/client"
import "dotenv/config"
require("dotenv").config()

export default function WorshipNightClientDashboard({
  initialPlan,
  initialWorship,
  initialBand,
  initialOrchestra,
  initialProduction,
  initialCampus,
  initialLayout,
}) {
  const [plan, setPlans] = useState(initialPlan)
  const [worship, setWorship] = useState(initialWorship)
  //   const [band, setBand] = useState(initialBand)
  //   const [orchestra, setOrchestra] = useState(initialOrchestra)
  const [production, setProduction] = useState(initialProduction)
  //   const [campus, setCampus] = useState(initialCampus)
  let [stage, setStage] = useState(initialLayout)
  const [isVisible, setIsVisible] = useState(false)

  // console.log(initialPlan)
  let worshipPCOData = worship
  //   let bandPCOData = band
  //   let orchestraPCOData = orchestra
  //   let campusPeopleData = campus
  let productionPCOData = production
  let currentService = plan
  let stageLayout = stage
  // console.log(stageLayout)
  let defaultStageLayout =
    "https://ik.imagekit.io/kingswaychurch/No%20Current%20Layout.png?updatedAt=1731007921807"
  let stageLaidOut
  let worshipPeopleList
  let bandPeopleList
  let orchestraPeopleList
  let campusPeopleList
  let productionPeopleList
  let dateOfService = []
  let inRoomProductionPeopleList
  let broadcastProductionPeopleList
  let onlineProductionPeopleList
  let todayDate = []

  useEffect(() => {
    const intervalId = setInterval(() => {
      location.reload()
    }, 35000) // 5 minutes in milliseconds | 10 minutes =  10 * 60 * 1000 | 5 minutes = 5 * 60 * 1000 | 1 min 1/2 = 90000 | 30 seconds = 30000 | 10 seconds = 10000
    revalidateDashboard()
    return () => clearInterval(intervalId) // Clear interval on component unmount
  }, [])
  // * COMMENT/UNCOMMENT THIS vvBELOWvv WHENEVER YOU WANT TO EDIT THE TABLES OF THE DASHBOARD

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible)
    }, 17500)

    // Clean up the interval on component unmount
    return () => clearInterval(interval)
  }, [])

  // * COMMENT/UNCOMMENT THIS ^^ABOVE^^ WHENEVER YOU WANT TO EDIT THE TABLES OF THE DASHBOARD
  if (currentService && currentService.data && currentService.data.length > 0) {
    dateOfService = currentService.data.map((item) => ({
      todayDate: item.attributes.dates,
    }))
    // console.log(dateOfService)
  } else {
    todayDate = []
    console.error("pcoDateData is undefined or empty")
  }

  // ! WORSHIP TEAM DATA
  if (worshipPCOData && worshipPCOData.data && worshipPCOData.data.length > 0) {
    worshipPeopleList = worshipPCOData.data.map((member) => ({
      id: member.id,
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
      photo: member.attributes.photo_thumbnail,
    }))
    // console.log(worshipPeopleList)
  } else {
    worshipPeopleList = []
    console.error("pcoWORSHIPData is undefined or empty")
  }

  // ! -------------- BAND TEAM DATA ----------------

  //   if (bandPCOData && bandPCOData.data && bandPCOData.data.length > 0) {
  //     bandPeopleList = bandPCOData.data.map((member) => ({
  //       id: member.id,
  //       name: member.attributes.name,
  //       position: member.attributes.team_position_name,
  //       notes: member.attributes.notes,
  //       status: member.attributes.status,
  //       photo: member.attributes.photo_thumbnail,
  //     }))
  //     // console.log(bandPeopleList)
  //   } else {
  //     bandPeopleList = []
  //     console.error("pcoBANDData is undefined or empty")
  //   }

  // ! ------------ ORCHESTRA TEAM DATA ----------------

  //   if (
  //     orchestraPCOData &&
  //     orchestraPCOData.data &&
  //     orchestraPCOData.data.length > 0
  //   ) {
  //     orchestraPeopleList = orchestraPCOData.data.map((member) => ({
  //       id: member.id,
  //       name: member.attributes.name,
  //       position: member.attributes.team_position_name,
  //       notes: member.attributes.notes,
  //       status: member.attributes.status,
  //       photo: member.attributes.photo_thumbnail,
  //     }))
  //     // console.log(orchestraPeopleList)
  //   } else {
  //     orchestraPeopleList = []
  //     console.error("pcoORCHESTRAData is undefined or empty")
  //   }

  // ! ---------------- PRODUCTION TEAM DATA---------------
  if (
    productionPCOData &&
    productionPCOData.data &&
    productionPCOData.data.length > 0
  ) {
    productionPeopleList = productionPCOData.data.map((member) => ({
      id: member.id,
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
      photo: member.attributes.photo_thumbnail,
    }))
    // console.log(productionPeopleList)
  } else {
    productionPeopleList = []
    console.error("pcoPRODUCTIONData is undefined or empty")
  }

  // ! ----------------- CAMPUS TEAM DATA -----------

  //   if (
  //     campusPeopleData &&
  //     campusPeopleData.data &&
  //     campusPeopleData.data.length > 0
  //   ) {
  //     campusPeopleList = campusPeopleData.data.map((member) => ({
  //       id: member.id,
  //       name: member.attributes.name,
  //       position: member.attributes.team_position_name,
  //       notes: member.attributes.notes,
  //       status: member.attributes.status,
  //       photo: member.attributes.photo_thumbnail,
  //     }))
  //     // console.log(campusPeopleList)
  //   } else {
  //     campusPeopleList = []
  //     console.error("pcoCAMPUSData is undefined or empty")
  //   }

  // ! Establishing VOCALS Declined Folks
  const filteredVocals = worshipPeopleList.filter(
    (item) => item.status !== "D" && item.status !== "U"
  )
  // ? ALPHABETIZING THEM
  let sortedVocalList = filteredVocals.sort((a, b) => {
    if (a.notes < b.notes) return -1
    if (a.notes > b.notes) return 1
    return 0
  })

  // ! Establishing BAND Declined Folks

  //   const filteredBand = bandPeopleList.filter(
  //     (item) => item.status !== "D" && item.status !== "U"
  //   )
  //   const sortedBand = filteredBand.sort((a, b) => {
  //     if (a.position < b.position) return -1
  //     if (a.position > b.position) return 1
  //     return 0
  //   })

  // ! Establishing ORCHESTRA Declined Folks

  //   const filteredOrchestra = orchestraPeopleList.filter(
  //     (item) => item.status !== "D" && item.status !== "U"
  //   )

  // ! Establishing PRODUCTION Declined Folks
  const filteredProduction = productionPeopleList.filter(
    (item) => item.status !== "D" && item.status !== "U"
  )

  // ! Establishing CAMPUS Declined Folks

  //   const filteredCampus = campusPeopleList.filter(
  //     (item) => item.status !== "D" && item.status !== "U"
  //   )

  // ! Takes out Positions Unnecessary to the Dashboard
  const getRidinRoomVals = [
    "Broadcast Coordinator",
    "Video Switcher",
    "10:30am Mod",
    "8:30am Mod",
    "Broadcast Audio",
    "Camera",
    "Sermon Upload",
  ]
  const getRidBroadcastVals = [
    "In Room Tech Coordinator",
    "FOH Sound",
    "10:30am Mod",
    "8:30am Mod",
    "Sermon Upload",
    "ProPresenter",
    "Lights",
    "Production Tech",
  ]
  const getRidOnlineVals = [
    "Camera",
    "Video Switcher",
    "In Room Tech Coordinator",
    "FOH Sound",
    "ProPresenter",
    "Lights",
    "Production Tech",
    "Broadcast Coordinator",
    "Video Switcher",
    "Broadcast Audio",
  ]
  const getRidCampusVals = ["Team Rally Leader"]

  const getRidVocalVals = ["Choir"]
  let vocalList = []

  inRoomProductionPeopleList = filteredProduction.filter(
    (person) => !getRidinRoomVals.includes(person.position)
  )

  broadcastProductionPeopleList = filteredProduction.filter(
    (person) => !getRidBroadcastVals.includes(person.position)
  )

  onlineProductionPeopleList = filteredProduction.filter(
    (person) => !getRidOnlineVals.includes(person.position)
  )

  vocalList = sortedVocalList.filter(
    (person) => !getRidVocalVals.includes(person.position)
  )

  // ? ALPHABETIZING THEM
  const sortedOnlineProductionPeopleList = onlineProductionPeopleList.sort(
    (a, b) => {
      if (a.position > b.position) return -1
      if (a.position < b.position) return 1
      return 0
    }
  )

  const broadcastPositions = [
    "Broadcast Coordinator",
    "Broadcast Audio",
    "Video Switcher",
    "Camera",
  ]

  const inRoomPositions = [
    "In Room Tech Coordinator",
    "FOH Sound",
    "ProPresenter",
    "Lights",
  ]

  const sortedBroadcastProductionPeopleList =
    broadcastProductionPeopleList.sort((a, b) => {
      const posA = broadcastPositions.indexOf(a.position)
      const posB = broadcastPositions.indexOf(b.position)
      return posA - posB
    })

  const sortedInRoomProductionPeopleList = inRoomProductionPeopleList.sort(
    (a, b) => {
      const posA = inRoomPositions.indexOf(a.position)
      const posB = inRoomPositions.indexOf(b.position)
      return posA - posB
    }
  )

  //   campusPeopleList = campusPeopleList.filter(
  //     (person) => !getRidCampusVals.includes(person.position)
  //   )

  // console.log(vocalList)

  // console.log(vocalList)

  const picStyles = {
    borderRadius: "50%",
    boxShadow: `0px 0px 16px 3px rgb(0,187,228, 0.7)`,
  }

  const layoutStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  }

  return (
    <div>
      <div className="max-h-screen">
        {/* Header Component */}
        <header className=" text-[#00bbe4] text-5xl font-black flex flex-col lg:flex-row justify-between mx-10 py-9 lg:px-8">
          <h1 className="text-3xl text-center lg:font-extrabold lg:text-5xl">
            Kingsway Church Worship Dashboard
          </h1>
          <ClockComp />
          {dateOfService.map((dispDate) => (
            <h2
              key={dispDate}
              className="text-2xl text-center lg:font-extrabold lg:text-5xl">
              {dispDate.todayDate}
            </h2>
          ))}
        </header>
        {/* Dashboard Entire Component */}
        {/* {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: 100, opacity: 1 }}
            transition={{ type: "spring" }}>
            <div style={layoutStyles}>
              <Image
                src={stageLayout}
                width={1920}
                height={1080}
                alt="This is the stage layout"
              />
            </div>
          </motion.div>
        )} */}
        {isVisible && (
          <div style={layoutStyles}>
            <Image
              src={stageLayout}
              width={1920}
              height={1080}
              alt="This is the stage layout"
            />
          </div>
        )}
        <div
          className="flex flex-col lg:grid lg:gap-1 lg:grid-cols-4 lg:mx-8 lg:mt-5 lg:px-6 lg:mb-10 lg:grid-rows-[700px_minmax(900px,_1fr)]
      ">
          {/* VOCALS TEAM CHART */}
          <WNVocalsTable people={vocalList} styles={picStyles} />
          <OtherWNBand people={vocalList} styles={picStyles} />
          {/* BAND TEAM CHART */}
          {/* <WNBandTable
            band1={vocalList}
            band2={filteredOrchestra}
            styles={picStyles}
          /> */}

          {/* SERVICE INFO TEAM CHART */}
          {/* IN ROOM PRODUCTION TEAM CHART */}
          <WNInRoomProdTable
            people={sortedInRoomProductionPeopleList}
            styles={picStyles}
          />
          <div>
            <div>
              <h2 className=" text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
                Weather
              </h2>
              &nbsp;
              <div className="flex flex-row justify-evenly">
                <WeatherBlock title={`CHL`}></WeatherBlock>
                <WeatherBlock title={`GLB`}></WeatherBlock>
              </div>
            </div>
            &nbsp;
            <div>
              <h2 className=" text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
                Verse Of The Day
              </h2>
              <VerseOfTheDay />
            </div>
          </div>

          {/* BROADCAST PRODUCTION TEAM CHART */}
          {/* <BroadcastProdTable
            people={sortedBroadcastProductionPeopleList}
            styles={picStyles}
          /> */}
          {/* <BroadcastProdTable2
            people={sortedBroadcastProductionPeopleList}
            styles={picStyles}
          /> */}
          {/* ONLINE PRODUCTION TEAM CHART */}
          {/* <OnlineProdTable
            people={sortedOnlineProductionPeopleList}
            styles={picStyles}
          /> */}
        </div>
      </div>
    </div>
  )
}
