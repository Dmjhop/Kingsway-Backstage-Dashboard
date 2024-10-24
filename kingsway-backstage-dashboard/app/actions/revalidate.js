"use server"

import { revalidatePath } from "next/cache"

export async function revalidateDashboard() {
  try {
    await revalidatePath("/backstage/pagepage")
    console.log("Path revalidated successfully")
  } catch (error) {
    console.error("Error revalidating path:", error)
  }
}
