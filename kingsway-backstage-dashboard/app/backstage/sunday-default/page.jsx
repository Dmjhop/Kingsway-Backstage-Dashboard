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
import { revalidateDashboard } from "@/app/actions/revalidate"
import ClientDashboard from "@/components/ClientDashboard"
import "dotenv/config"
import defaultLayoutImg from "@/public/No Current Layout.png"
import { getServicePlan } from "@/app/data/getServicePlan"
import { getBand } from "@/app/data/getBand"
import { getCampus } from "@/app/data/getCampus"
import { getOrchestra } from "@/app/data/getOrchestra"
import { getProduction } from "@/app/data/getProduction"
import { getVocals } from "@/app/data/getVocals"
import { getLayout } from "@/app/data/getLayout"
require("dotenv").config()

let worshipPCOData = []
let bandPCOData = []
let orchestraPCOData = []
let campusPeopleData = []
let productionPCOData = []
let trueAttachment

export default async function BackstageView() {
  const currentService = await getServicePlan()

  worshipPCOData = await getVocals(currentService)

  bandPCOData = await getBand(currentService)

  orchestraPCOData = await getOrchestra(currentService)

  productionPCOData = await getProduction(currentService)

  campusPeopleData = await getCampus(currentService)

  trueAttachment = await getLayout(currentService)

  // await revalidateDashboard()

  return (
    <ClientDashboard
      initialPlan={currentService}
      initialWorship={worshipPCOData}
      initialBand={bandPCOData}
      initialOrchestra={orchestraPCOData}
      initialProduction={productionPCOData}
      initialCampus={campusPeopleData}
      initialLayout={trueAttachment}
    />
  )
}
