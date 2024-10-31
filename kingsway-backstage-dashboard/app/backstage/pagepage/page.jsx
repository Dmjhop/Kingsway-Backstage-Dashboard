"use server"
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
// import { revalidateDashboard } from "@/app/actions/revalidate"
import ClientDashboard from "@/components/ClientDashboard"
import "dotenv/config"

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

let worshipPCOData = []
let bandPCOData = []
let orchestraPCOData = []
let campusPeopleData = []
let productionPCOData = []
let worshipPeopleList
let bandPeopleList
let orchestraPeopleList
let campusPeopleList
let productionPeopleList
let currentService = []
let dateOfService
let inRoomProductionPeopleList
let broadcastProductionPeopleList
let onlineProductionPeopleList

export default async function BackstageView() {
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
  // ? API CALL FOR WORSHIP TEAM
  try {
    const response = await fetch(
      `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=5767747`,
      requestOptions
    )
    worshipPCOData = await response.json()
    // console.log(worshipPCOData.data[0].id)
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
    // console.log(currentService)
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
    // console.log(currentService)
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
    // console.log(currentService)
  } catch (error) {
    console.error(error)
  }
  // ? API CALL FOR SPEAKER | SERVICE HOST | POINT PERSON (CAMPUS TEAM)
  try {
    const response = await fetch(
      `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=2620409`,
      requestOptions
    )
    campusPeopleData = await response.json()
    // console.log(currentService)
  } catch (error) {
    console.error(error)
  }

  // await revalidateDashboard()

  return (
    <ClientDashboard
      initialPlan={currentService}
      initialWorship={worshipPCOData}
      initialBand={bandPCOData}
      initialOrchestra={orchestraPCOData}
      initialProduction={productionPCOData}
      initialCampus={campusPeopleData}
    />
  )
}
