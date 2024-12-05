//? API CALL FOR THE LIST OF SERVICE TYPES

import { NextRequest, NextResponse } from "next/server"

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function GET(NextRequest) {
  let serviceTypeList = {}
  try {
    const response = await fetch(
      "https://api.planningcenteronline.com/services/v2/service_types/",
      requestOptions
    )
    serviceTypeList = await response
    // console.log(serviceTypeList)
  } catch (error) {
    console.error(error)
  }
  return NextResponse.json(serviceTypeList)
}
