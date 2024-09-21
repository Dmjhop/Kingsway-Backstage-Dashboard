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
    "Basic OWY3YzNhNzhjZGUwN2EyN2Y2MTJiNTZhY2Y2ODZhYzk1OTYzYmVhMDEyN2E3NGRiZDNmMDYwYjcxYjYzMzFiNzplMWMxYzEyN2Y1MzZmYWIwZmNlMWNhZGJjNTA4ZmMyYzZhMmFjYTEwNzUwNDYxNWJhMzA2ZDU5ZDY2NmIzZmNi"
  )

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }

  let worshipPCOData
  let worshipPeopleList
  let productionPCOData
  let productionPeopleList
  // ? API CALL FOR WORSHIP TEAM
  try {
    const response = await fetch(
      "https://api.planningcenteronline.com/services/v2/service_types/1536328/plans/75552321/team_members?include=team&where[team_id]=6206998",
      requestOptions
    )
    worshipPCOData = await response.json()
  } catch (error) {
    console.error(error)
  }
  // ? API CALL FOR PRODUCTION TEAM
  try {
    const response = await fetch(
      "https://api.planningcenteronline.com/services/v2/service_types/1536328/plans/75552321/team_members?where[team_id]=6206999",
      requestOptions
    )
    productionPCOData = await response.json()
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
    console.error("pcoData is undefined or empty")
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
    console.error("pcoData is undefined or empty")
  }

  // ! Takes out Positions Unnecessary to the Dashboard
  const getRidVals = ["Camera", "Video Switcher", "10:30am Mod", "8:30am Mod"]

  productionPeopleList = productionPeopleList.filter(
    (person) => !getRidVals.includes(person.position)
  )

  return (
    <div>
      {/* Header Component */}
      <header className="w-[731px] h-[68px] text-center text-white text-5xl font-black ">
        Kingsway Worship Dashboard
      </header>
      {/* Dashboard Entire Component */}
      <div
        className="grid grid-rows-2 grid-cols-3 justify-center mx-8
      ">
        <div>
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium justify-items-center mx-auto">
            Production Team
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Person</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productionPeopleList.map((person) => (
                <TableRow key={person}>
                  <TableCell>{person.position}</TableCell>
                  <TableCell>{person.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium justify-items-center mx-auto">
            Worship Team
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Person</TableHead>
                <TableHead>VOX/IEM/MD Info</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {worshipPeopleList.map((person) => (
                <TableRow key={person}>
                  <TableCell>{person.position}</TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* MD Assignments Component */}
        <div className="row-start-1 row-span-1 col-start-1">
          <p>skdlhjfkjd</p>
        </div>

        {/* Vocal Assignments Component */}
        <div className="col-start-1 row-start-1 row-span-2 justify-self-center">
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium justify-items-center mx-auto">
            Vocals
          </h2>
        </div>

        {/* In Ear Monitors Assignments Component */}
        <div className="col-start-2 row-start-1 row-span-2 justify-self-center">
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium justify-self-center mx-auto">
            In Ear Monitors
          </h2>
        </div>

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
