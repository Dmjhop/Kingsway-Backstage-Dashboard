import { NextResponse } from "next/server"

export async function GET(param) {
  const myHeaders = new Headers({
    Authorization: process.env.API_SECRET,
  })

  const requestOptions = {
    headers: myHeaders,
    redirect: "follow",
    // cache: "force-cache",
  }
  //   try {
  //     const response = await fetch(
  //       "https://api.planningcenteronline.com/services/v2/service_types/",
  //       requestOptions
  //     )
  //     serviceTypeList = await response.json()
  //     console.log(serviceTypeList)
  //   } catch (error) {
  //     console.error(error)
  //   }

  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/${param}/teams`,
    requestOptions
  )
  const data = await res.json()

  if (!res.ok) {
    return { message: "Please enter a valid email" }
  }

  return Response.json({ data })
}
