"use server"
import { revalidateTag } from "next/cache"

export async function updateDashboardData(serviceType) {
  // Revalidate specific data instead of full page reload
  revalidateTag(`dashboard-${serviceType}`)
  return { success: true }
}
