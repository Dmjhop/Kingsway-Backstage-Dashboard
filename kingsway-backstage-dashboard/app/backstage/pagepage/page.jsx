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
  let campusPeopleData
  let productionPCOData
  let worshipPeopleList
  let campusPeopleList
  let productionPeopleList
  let currentService
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
    console.log(currentService)
  } catch (error) {
    console.error(error)
  }
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

  // ! WORSHIP TEAM DATA
  if (worshipPCOData && worshipPCOData.data && worshipPCOData.data.length > 0) {
    worshipPeopleList = worshipPCOData.data.map((member) => ({
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
    }))
    console.log(worshipPeopleList)
  } else {
    console.error("pcoWORSHIPData is undefined or empty")
  }
  // ! PRODUCTION TEAM DATA
  if (
    productionPCOData &&
    productionPCOData.data &&
    productionPCOData.data.length > 0
  ) {
    productionPeopleList = productionPCOData.data.map((member) => ({
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
    }))
    console.log(productionPeopleList)
  } else {
    console.error("pcoPRODUCTIONData is undefined or empty")
  }

  // ! CAMPUS TEAM DATA
  if (
    campusPeopleData &&
    campusPeopleData.data &&
    campusPeopleData.data.length > 0
  ) {
    campusPeopleList = campusPeopleData.data.map((member) => ({
      name: member.attributes.name,
      position: member.attributes.team_position_name,
      notes: member.attributes.notes,
    }))
    console.log(campusPeopleList)
  } else {
    console.error("pcoCAMPUSData is undefined or empty")
  }

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

  inRoomProductionPeopleList = productionPeopleList.filter(
    (person) => !getRidinRoomVals.includes(person.position)
  )

  broadcastProductionPeopleList = productionPeopleList.filter(
    (person) => !getRidBroadcastVals.includes(person.position)
  )

  onlineProductionPeopleList = productionPeopleList.filter(
    (person) => !getRidOnlineVals.includes(person.position)
  )

  campusPeopleList = campusPeopleList.filter(
    (person) => !getRidCampusVals.includes(person.position)
  )

  // scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex flex-row items-center basis-1/5

  return (
    <div>
      {/* Header Component */}
      <header className="w-[731px] h-[68px] text-white text-5xl font-black ">
        <h1 className="font-extrabold lg:text-5xl">
          Kingsway Worship Dashboard
        </h1>
      </header>
      {/* Dashboard Entire Component */}
      <div
        className="grid grid-rows-2 grid-cols-3 justify-center mx-8
      ">
        <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium justify-items-center mx-auto">
          Production Team
        </h2>
        <div className="row-start-2 col-span-3 col-start-1 flex flex-row">
          <div>
            <h3 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-medium justify-items-center mx-auto">
              In Room
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role</TableHead>
                  <TableHead>Person</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inRoomProductionPeopleList.map((person) => (
                  <TableRow key={person} className="font-normal text-lg">
                    <TableCell>{person.position}</TableCell>
                    <TableCell>{person.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="w-[10px]"></div>
          <div>
            <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-medium justify-items-center mx-auto">
              Broadcast
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role</TableHead>
                  <TableHead>Person</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {broadcastProductionPeopleList.map((person) => (
                  <TableRow key={person} className="font-normal text-lg">
                    <TableCell>{person.position}</TableCell>
                    <TableCell>{person.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="w-[10px]"></div>
          <div>
            <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-medium justify-items-center mx-auto">
              Online
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role</TableHead>
                  <TableHead>Person</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {onlineProductionPeopleList.map((person) => (
                  <TableRow key={person} className="font-normal text-lg">
                    <TableCell>{person.position}</TableCell>
                    <TableCell>{person.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="row-start-1 row-span-2 col-start-1">
          <h2 className="w-[500px] h-[50px] text-center text-white text-[32px] font-medium justify-items-center mx-auto">
            Worship Team
          </h2>
          <Table>
            <TableHeader>
              <TableRow className="font-normal text-lg">
                <TableHead>Role</TableHead>
                <TableHead>Person</TableHead>
                <TableHead>VOX/IEM/MD Info</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {worshipPeopleList.map((person) => (
                <TableRow key={person} className="font-normal text-lg">
                  <TableCell>{person.position}</TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="row-start-2 row-span-1 ">
          <h2 className="w-[500px] h-[50px] text-center text-[#00bbe4] text-[32px] font-medium justify-items-center mx-auto">
            Service Info
          </h2>
          <Table>
            <TableHeader>
              <TableRow className="font-normal text-lg">
                <TableHead>Role</TableHead>
                <TableHead>Person</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="font-normal text-lg">
                <TableCell>Sermon Series</TableCell>
                <TableCell>
                  {currentService.data[0].attributes.series_title}
                </TableCell>
              </TableRow>
              <TableRow className="font-normal text-lg">
                <TableCell>Sermon Title</TableCell>
                <TableCell>{currentService.data[0].attributes.title}</TableCell>
              </TableRow>
              {campusPeopleList.map((person) => (
                <TableRow key={person} className="font-normal text-lg">
                  <TableCell>{person.position}</TableCell>
                  <TableCell>{person.name}</TableCell>
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

        <div className="flex flex-row mx-auto gap-3">
          {/* Stage Layout Component */}
        </div>
      </div>
    </div>
  )
}
export const fetchCache = "force-no-store"
