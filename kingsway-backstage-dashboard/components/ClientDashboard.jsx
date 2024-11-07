"use client"
import PersonCard from "@/components/ui/PersonCard"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewServiceForm from "@/components/ui/NewServiceForm"
import SmallCardBackground from "@/components/ui/SmallCardBackground"
import VerticalCardBackground from "@/components/ui/VerticalCardBackground"
import LargeCardBackground from "@/components/ui/LargeCardBackground"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import otherstyles from "@/styles/otherstyles.module.css"
import Image from "next/image"
import backImage from "@/public/backstagebackground.png"

import { useEffect, useState } from "react"
import { revalidateDashboard } from "@/app/actions/revalidate"

export default function ClientComponent({
  initialPlan,
  initialWorship,
  initialBand,
  initialOrchestra,
  initialProduction,
  initialCampus,
}) {
  const [plan, setPlans] = useState(initialPlan)
  const [worship, setWorship] = useState(initialWorship)
  const [band, setBand] = useState(initialBand)
  const [orchestra, setOrchestra] = useState(initialOrchestra)
  const [production, setProduction] = useState(initialProduction)
  const [campus, setCampus] = useState(initialCampus)

  // console.log(initialPlan)
  let worshipPCOData = worship
  let bandPCOData = band
  let orchestraPCOData = orchestra
  let campusPeopleData = campus
  let productionPCOData = production
  let currentService = plan
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
    }, 30000) // 5 minutes in milliseconds | 10 minutes =  10 * 60 * 1000 | 5 minutes = 5 * 60 * 1000 | 1 min 1/2 = 90000 | 30 seconds = 30000 | 10 seconds = 10000
    revalidateDashboard()
    return () => clearInterval(intervalId) // Clear interval on component unmount
  }, [])

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
    }))
    // console.log(worshipPeopleList)
  } else {
    worshipPeopleList = []
    console.error("pcoWORSHIPData is undefined or empty")
  }

  // ! -------------- BAND TEAM DATA ----------------
  if (bandPCOData && bandPCOData.data && bandPCOData.data.length > 0) {
    bandPeopleList = bandPCOData.data.map((member) => ({
      id: member.id,
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
    }))
    // console.log(bandPeopleList)
  } else {
    bandPeopleList = []
    console.error("pcoBANDData is undefined or empty")
  }
  // ! ------------ ORCHESTRA TEAM DATA ----------------
  if (
    orchestraPCOData &&
    orchestraPCOData.data &&
    orchestraPCOData.data.length > 0
  ) {
    orchestraPeopleList = orchestraPCOData.data.map((member) => ({
      id: member.id,
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
    }))
    // console.log(orchestraPeopleList)
  } else {
    orchestraPeopleList = []
    console.error("pcoORCHESTRAData is undefined or empty")
  }

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
    }))
    // console.log(productionPeopleList)
  } else {
    productionPeopleList = []
    console.error("pcoPRODUCTIONData is undefined or empty")
  }

  // ! ----------------- CAMPUS TEAM DATA -----------
  if (
    campusPeopleData &&
    campusPeopleData.data &&
    campusPeopleData.data.length > 0
  ) {
    campusPeopleList = campusPeopleData.data.map((member) => ({
      id: member.id,
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
    }))
    // console.log(campusPeopleList)
  } else {
    campusPeopleList = []
    console.error("pcoCAMPUSData is undefined or empty")
  }

  // ! Establishing VOCALS Declined Folks
  const filteredVocals = worshipPeopleList.filter(
    (item) => item.status !== "D" && item.status !== "U"
  )
  // ? ALPHABETIZING THEM
  let sortedVocalList = filteredVocals.sort((a, b) => {
    // const getNumberFromNotes = (notes) => {
    //   const match = notes.match(/Vox (\d+)/)
    //   return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER
    // }

    // const aNumber = getNumberFromNotes(a.notes)
    // const bNumber = getNumberFromNotes(b.notes)

    // return aNumber - bNumber
    // let aVox = parseInt(a.notes.match(/Vox (\d+)/)?.[1], 10)
    // let bVox = parseInt(b.notes.match(/Vox (\d+)/)?.[1], 10)
    // console.log(aVox)

    // // Compare the Vox numbers
    // if (aVox < bVox) return -1
    // if (aVox > bVox) return 1

    if (a.notes > b.notes) return -1
    if (a.notes < b.notes) return 1
    return 0
  })

  // ! Establishing BAND Declined Folks
  const filteredBand = bandPeopleList.filter(
    (item) => item.status !== "D" && item.status !== "U"
  )
  const sortedBand = filteredBand.sort((a, b) => {
    if (a.position < b.position) return -1
    if (a.position > b.position) return 1
    return 0
  })

  // ! Establishing ORCHESTRA Declined Folks
  const filteredOrchestra = orchestraPeopleList.filter(
    (item) => item.status !== "D" && item.status !== "U"
  )

  // ! Establishing PRODUCTION Declined Folks
  const filteredProduction = productionPeopleList.filter(
    (item) => item.status !== "D" && item.status !== "U"
  )

  // ! Establishing CAMPUS Declined Folks
  const filteredCampus = campusPeopleList.filter(
    (item) => item.status !== "D" && item.status !== "U"
  )
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

  campusPeopleList = campusPeopleList.filter(
    (person) => !getRidCampusVals.includes(person.position)
  )

  // console.log(vocalList)

  console.log(vocalList)

  return (
    <div>
      <div className="max-h-screen">
        {/* Header Component */}
        <header className=" text-[#00bbe4] text-5xl font-black flex flex-col lg:flex-row justify-between mx-10 py-9 lg:px-8">
          <h1 className="text-3xl text-center lg:font-extrabold lg:text-5xl">
            Kingsway Church Worship Dashboard
          </h1>
          {dateOfService.map((dispDate) => (
            <h2
              key={dispDate}
              className="text-2xl text-center lg:font-extrabold lg:text-5xl">
              {dispDate.todayDate}
            </h2>
          ))}
        </header>
        {/* Dashboard Entire Component */}
        <div
          className="flex flex-col lg:grid lg:gap-1 lg:grid-rows-2 lg:grid-cols-3 lg:mx-8 lg:mt-5 lg:px-6 lg:mb-10
      ">
          {/* <h2 className="text-center text-white text-[32px] font-medium">
            Production Team
          </h2> */}

          {/* IN ROOM TEAM CHART */}
          <div className="row-start-2 col-start-1 flex flex-col order-4">
            <h3 className="text-[32px] text-center text-[#00bbe4] lg:text-[32px] font-bold">
              In Room
            </h3>
            <Table className="">
              <TableHeader>
                <TableRow className="font-normal text-2xl">
                  <TableHead>Person</TableHead>
                  <TableHead className="text-center">Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedInRoomProductionPeopleList.map((person) => (
                  <TableRow key={person.id} className="font-normal text-2xl">
                    <TableCell className="font-normal ">
                      {person.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {person.position}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* BROADCAST TEAM CHART */}
          <div className="row-start-2 col-start-2 flex shrink flex-col order-5">
            <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-bold justify-items-center mx-auto">
              Broadcast
            </h2>
            <Table className="h-[100px] ">
              <TableHeader>
                <TableRow className="font-normal text-2xl">
                  <TableHead>Person</TableHead>
                  <TableHead className="text-center">Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedBroadcastProductionPeopleList.map((person) => (
                  <TableRow key={person.id} className="font-normal text-2xl">
                    <TableCell className="font-normal text-2xl">
                      {person.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {person.position}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* ONLINE TEAM CHART */}
          <div className=" row-start-2 col-start-3 flex shrink flex-col order-6">
            <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-bold justify-items-center mx-auto">
              Online
            </h2>
            <Table>
              <TableHeader className="font-normal text-2xl">
                <TableRow>
                  <TableHead>Person</TableHead>
                  <TableHead className="text-center">Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedOnlineProductionPeopleList.map((person) => (
                  <TableRow key={person.id} className="font-normal text-2xl">
                    <TableCell className="font-normal text-2xl">
                      {person.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {person.position}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* WORSHIP TEAM CHART */}
          <div className="row-start-1 col-start-1 flex shrink flex-col order-2">
            <h2 className=" text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
              Vocals
            </h2>
            <Table className="">
              <TableHeader>
                <TableRow className="font-normal text-2xl">
                  <TableHead>Person</TableHead>
                  {/* <TableHead>Role</TableHead> */}
                  <TableHead className="text-center">VOX|IEM|MD</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vocalList.map((person) => (
                  <TableRow key={person.id} className="font-normal text-2xl">
                    <TableCell className="font-normal text-2xl">
                      {person.name}
                    </TableCell>
                    {/* <TableCell>{person.position}</TableCell> */}
                    <TableCell className="text-center">
                      {person.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* BAND INFO CHART */}
          <div className="row-start-1 col-start-2 flex shrink flex-col order-3">
            <h2 className="text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
              Band
            </h2>
            <Table className="">
              <TableHeader>
                <TableRow className="font-normal text-2xl">
                  <TableHead>Person</TableHead>
                  <TableHead className="text-center">Instrument</TableHead>
                  <TableHead className="text-center">
                    IEM|MD|Inst Pack
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedBand.map((person) => (
                  <TableRow key={person.id} className="font-normal text-2xl ">
                    <TableCell className="font-normal ">
                      {person.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {person.position}
                    </TableCell>
                    <TableCell className="text-center">
                      {person.notes}
                    </TableCell>
                  </TableRow>
                ))}
                {filteredOrchestra.map((person) => (
                  <TableRow key={person.id} className="font-normal text-2xl">
                    <TableCell className="font-normal text-2xl">
                      {person.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {person.position}
                    </TableCell>
                    <TableCell className="text-center">
                      {person.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* SERVICE INFO CHART */}
          <div className="row-start-1 col-start-3 flex shrink flex-col  order-1">
            <h2 className=" text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
              Service Info
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                </TableRow>
                {/* <TableRow className="font-normal text-lg">
                <TableHead>Category</TableHead>
                <TableHead>Info</TableHead>
              </TableRow> */}
              </TableHeader>
              <TableBody className="font-normal text-2xl">
                <TableRow className="font-normal ">
                  <TableCell>Sermon Series</TableCell>
                  <TableCell className="text-center">
                    {currentService.data[0].attributes.series_title}
                  </TableCell>
                </TableRow>
                <TableRow className="font-normal ">
                  <TableCell>Sermon Title</TableCell>
                  <TableCell className="text-center">
                    {currentService.data[0].attributes.title}
                  </TableCell>
                </TableRow>
                {filteredCampus.map((person) => (
                  <TableRow key={person.name} className="font-normal ">
                    <TableCell>{person.position}</TableCell>
                    <TableCell className="text-center">{person.name}</TableCell>
                    <TableCell>{person.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* MD Assignments Component */}

          {/* Vocal Assignments Component */}

          {/* In Ear Monitors Assignments Component */}

          {/* Production Team Component */}

          {/* Wired IEMs Component */}

          {/* Lower 3rd Row */}
        </div>
      </div>
    </div>
  )
}
