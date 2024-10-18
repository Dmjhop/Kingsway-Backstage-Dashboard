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

export default async function BackstageView() {
  const myHeaders = new Headers()
  myHeaders.append(
    "Authorization",
    "Basic NmQzZTFjNWUyYzQ1ZjM5ZjVhZjUzMTlkZTM5MzFiOTlkZTczOTc1OGEyMDUzOTY3MjFiZjc4MmZlMzExZDI4OTpwY29fcGF0X2UxZGY1YzZmNmUxODBmNDEwNmI5YmI2YTI3ZmFjMmNmNjNkMmQxZDk0NDc3ZTZjYTZhNmI4ODI5NzMzZTA4OGQxY2FmM2EyNQ=="
  )

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }

  let worshipPCOData
  let bandPCOData
  let orchestraPCOData
  let campusPeopleData
  let productionPCOData
  let worshipPeopleList
  let bandPeopleList
  let orchestraPeopleList
  let campusPeopleList
  let productionPeopleList
  let currentService
  let dateOfService
  let inRoomProductionPeopleList
  let broadcastProductionPeopleList
  let onlineProductionPeopleList

  //? API CALL FOR THE CURRENT SERVICE ID IN THE LIST
  try {
    const response = await fetch(
      "https://api.planningcenteronline.com/services/v2/service_types/285406/plans?filter=future&per_page=1",
      requestOptions
    )
    currentService = await response.json()
    // console.log(currentService)
  } catch (error) {
    console.error(error)
  }

  // let bookName
  //   for (let i = 0; i < booksOfBible.length; i++) {
  //     if (booksOfBible[i].value === book) {
  //       bookName = booksOfBible[i].label
  //     }
  //   }
  // ? API CALL FOR WORSHIP TEAM
  try {
    const response = await fetch(
      `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=5767747`,
      requestOptions
    )
    worshipPCOData = await response.json()
  } catch (error) {
    console.error(error)
  }

  // ? API CALL FOR BAND TEAM
  try {
    const response = await fetch(
      `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=1017818`,
      requestOptions
    )
    bandPCOData = await response.json()
  } catch (error) {
    console.error(error)
  }
  // ? API CALL FOR ORCHESTRA TEAM
  try {
    const response = await fetch(
      `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=5674102`,
      requestOptions
    )
    orchestraPCOData = await response.json()
  } catch (error) {
    console.error(error)
  }

  // ? API CALL FOR PRODUCTION TEAM
  try {
    const response = await fetch(
      `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=1017822`,
      requestOptions
    )
    productionPCOData = await response.json()
  } catch (error) {
    console.error(error)
  }

  // ? API CALL FOR SPEAKER | SERVICE HOST | POINT PERSON
  try {
    const response = await fetch(
      `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=2620409`,
      requestOptions
    )
    campusPeopleData = await response.json()
  } catch (error) {
    console.error(error)
  }

  // 5674102

  if (currentService && currentService.data && currentService.data.length > 0) {
    dateOfService = currentService.data.map((item) => ({
      todayDate: item.attributes.dates,
    }))
    console.log(dateOfService)
  } else {
    console.error("pcoDateData is undefined or empty")
  }

  // ! WORSHIP TEAM DATA
  if (worshipPCOData && worshipPCOData.data && worshipPCOData.data.length > 0) {
    worshipPeopleList = worshipPCOData.data.map((member) => ({
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
    }))
    console.log(worshipPeopleList)
  } else {
    console.error("pcoWORSHIPData is undefined or empty")
  }

  // ! -------------- BAND TEAM DATA ----------------
  if (bandPCOData && bandPCOData.data && bandPCOData.data.length > 0) {
    bandPeopleList = bandPCOData.data.map((member) => ({
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
    }))
    console.log(bandPeopleList)
  } else {
    console.error("pcoBANDData is undefined or empty")
  }
  // ! ------------ ORCHESTRA TEAM DATA ----------------
  if (
    orchestraPCOData &&
    orchestraPCOData.data &&
    orchestraPCOData.data.length > 0
  ) {
    orchestraPeopleList = orchestraPCOData.data.map((member) => ({
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
    }))
    console.log(orchestraPeopleList)
  } else {
    console.error("pcoORCHESTRAData is undefined or empty")
  }

  // ! ---------------- PRODUCTION TEAM DATA---------------
  if (
    productionPCOData &&
    productionPCOData.data &&
    productionPCOData.data.length > 0
  ) {
    productionPeopleList = productionPCOData.data.map((member) => ({
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
    }))
    // console.log(productionPeopleList)
  } else {
    console.error("pcoPRODUCTIONData is undefined or empty")
  }

  // ! ----------------- CAMPUS TEAM DATA -----------
  if (
    campusPeopleData &&
    campusPeopleData.data &&
    campusPeopleData.data.length > 0
  ) {
    campusPeopleList = campusPeopleData.data.map((member) => ({
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
      status: member.attributes.status,
    }))
    console.log(campusPeopleList)
  } else {
    console.error("pcoCAMPUSData is undefined or empty")
  }

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

  campusPeopleList = campusPeopleList.filter(
    (person) => !getRidCampusVals.includes(person.position)
  )

  // scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex flex-row items-center basis-1/5

  return (
    <div>
      {/* Header Component */}
      <header className=" text-[#00bbe4] text-5xl font-black flex flex-row justify-between mx-8 py-8">
        <h1 className="font-extrabold lg:text-5xl">
          Kingsway Worship Dashboard
        </h1>
        {dateOfService.map((dispDate) => (
          <h2 key={dispDate} className="font-extrabold lg:text-5xl">
            {dispDate.todayDate}
          </h2>
        ))}
      </header>
      {/* Dashboard Entire Component */}
      <div
        className="grid gap-1 grid-rows-2 grid-cols-3 mx-8 mt-5
      ">
        {/* <h2 className="text-center text-white text-[32px] font-medium">
            Production Team
          </h2> */}

        {/* IN ROOM TEAM CHART */}
        <div className="row-start-2 col-start-1 flex flex-col">
          <h3 className="text-center text-[#00bbe4] text-[32px] font-bold">
            In Room
          </h3>
          <Table className="">
            <TableHeader>
              <TableRow className="font-normal text-xl">
                <TableHead>Person</TableHead>
                <TableHead className="text-center">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inRoomProductionPeopleList.map((person) => (
                <TableRow key={person} className="font-normal text-xl">
                  <TableCell className="font-normal ">{person.name}</TableCell>
                  <TableCell className="text-center">
                    {person.position}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* BROADCAST TEAM CHART */}
        <div className="row-start-2 col-start-2 flex shrink flex-col">
          <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-bold justify-items-center mx-auto">
            Broadcast
          </h2>
          <Table className="">
            <TableHeader>
              <TableRow className="font-normal text-xl">
                <TableHead>Person</TableHead>
                <TableHead className="text-center">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {broadcastProductionPeopleList.map((person) => (
                <TableRow key={person} className="font-normal text-xl">
                  <TableCell className="font-normal text-xl">
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
        <div className=" row-start-2 col-start-3">
          <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-bold justify-items-center mx-auto">
            Online
          </h2>
          <Table>
            <TableHeader className="font-normal text-xl">
              <TableRow>
                <TableHead>Person</TableHead>
                <TableHead className="text-center">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedOnlineProductionPeopleList.map((person) => (
                <TableRow key={person} className="font-normal text-xl">
                  <TableCell className="font-normal text-xl">
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
        <div className="row-start-1 col-start-1 flex shrink flex-col">
          <h2 className=" text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
            Vocals
          </h2>
          <Table className="">
            <TableHeader>
              <TableRow className="font-normal text-xl">
                <TableHead>Person</TableHead>
                {/* <TableHead>Role</TableHead> */}
                <TableHead className="text-center">VOX/IEM/MD</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vocalList.map((person) => (
                <TableRow key={person} className="font-normal text-xl">
                  <TableCell className="font-normal text-xl">
                    {person.name}
                  </TableCell>
                  {/* <TableCell>{person.position}</TableCell> */}
                  <TableCell className="text-center">{person.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* BAND INFO CHART */}
        <div className="row-start-1 col-start-2 flex shrink flex-col">
          <h2 className="text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
            Band
          </h2>
          <Table className="">
            <TableHeader>
              <TableRow className="font-normal text-xl">
                <TableHead>Person</TableHead>
                <TableHead className="text-center">Instrument</TableHead>
                <TableHead className="text-center">IEM/Inst Pack</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedBand.map((person) => (
                <TableRow key={person} className="font-normal text-xl ">
                  <TableCell className="font-normal ">{person.name}</TableCell>
                  <TableCell className="text-center">
                    {person.position}
                  </TableCell>
                  <TableCell className="text-center">{person.notes}</TableCell>
                </TableRow>
              ))}
              {filteredOrchestra.map((person) => (
                <TableRow key={person} className="font-normal text-xl">
                  <TableCell className="font-normal text-xl">
                    {person.name}
                  </TableCell>
                  <TableCell className="text-center">
                    {person.position}
                  </TableCell>
                  <TableCell className="text-center">{person.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* SERVICE INFO CHART */}
        <div className="row-start-1 col-start-3 ">
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
            <TableBody className="font-normal text-xl">
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
              {campusPeopleList.map((person) => (
                <TableRow key={person} className="font-normal ">
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
  )
}
export const fetchCache = "force-no-store"
