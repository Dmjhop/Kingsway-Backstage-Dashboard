import { getServiceConfig } from "../../../lib/getServiceConfig"
import { getServicePlan } from "../../data/getServicePlan"
import { getBand } from "@/app/data/getBand"
import { getCampus } from "@/app/data/getCampus"
import { getOrchestra } from "@/app/data/getOrchestra"
import { getProduction } from "@/app/data/getProduction"
import { getVocals } from "@/app/data/getVocals"
import { getLayout } from "@/app/data/getLayout"
import ClientDashboard from "../../../components/pageui/ClientDashboard"

export default async function BackstageView({ params }) {
  const { serviceType } = await params
  const serviceConfig = await getServiceConfig(serviceType)

  const currentService = await getServicePlan(
    serviceConfig.planningCenterTypeId
  )
  const vocalPCOData = await getVocals(
    currentService,
    serviceConfig.teamIds.vocals
  )
  const bandPCOData = await getBand(currentService, serviceConfig.teamIds.band1)
  const orchestraPCOData = await getOrchestra(
    currentService,
    serviceConfig.teamIds.orchestra
  )
  const productionPCOData = await getProduction(
    currentService,
    serviceConfig.teamIds.production
  )
  const campusPeopleData = await getCampus(
    currentService,
    serviceConfig.teamIds.campus
  )
  const stageMap = await getLayout(currentService)

  return (
    <ClientDashboard
      initialPlan={currentService}
      initialWorship={vocalPCOData}
      initialBand={bandPCOData}
      initialOrchestra={orchestraPCOData}
      initialProduction={productionPCOData}
      initialCampus={campusPeopleData}
      initialLayout={stageMap}
    />
  )
}
