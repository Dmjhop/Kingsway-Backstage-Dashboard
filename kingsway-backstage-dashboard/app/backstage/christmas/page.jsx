"use server"
import backImage from "@/public/backstagebackground.png"
import { revalidateDashboard } from "@/app/actions/revalidate"
import ChristmasDashboard from "@/components/pageui/ChristmasDashboard"
import "dotenv/config"
import { getChristmasServicePlan } from "@/app/christmasdata/getChristmasServicePlan"
import { getChrBand } from "@/app/christmasdata/getChrBand"
import { getChrCampus } from "@/app/christmasdata/getChrCampus"
import { getChrOrchestra } from "@/app/christmasdata/getChrOrchestra"
import { getChrProduction } from "@/app/christmasdata/getChrProduction"
import { getChrVocals } from "@/app/christmasdata/getChrVocals"
import { getChrLayout } from "@/app/christmasdata/getChrLayout"
require("dotenv").config()

// CHRISTMAS PAGE

// 1301420 SERVICE ID

let worshipPCOData = []
let bandPCOData = []
let orchestraPCOData = []
let campusPeopleData = []
let productionPCOData = []
let trueAttachment

export default async function Christmas() {
  const currentService = await getChristmasServicePlan()

  worshipPCOData = await getChrVocals(currentService)

  bandPCOData = await getChrBand(currentService)

  orchestraPCOData = await getChrOrchestra(currentService)

  productionPCOData = await getChrProduction(currentService)

  campusPeopleData = await getChrCampus(currentService)

  trueAttachment = await getChrLayout(currentService)

  // await revalidateDashboard()

  return (
    <ChristmasDashboard
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
