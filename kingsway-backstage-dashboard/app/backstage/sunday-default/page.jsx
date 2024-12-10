"use server"
import backImage from "@/public/backstagebackground.png"
import { revalidateDashboard } from "@/app/actions/revalidate"
import ClientDashboard from "@/components/ClientDashboard"
import "dotenv/config"
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

  await revalidateDashboard()

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
