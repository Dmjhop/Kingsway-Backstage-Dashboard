"use client"
import ServiceSettings from "@/components/ServiceSettings"
import { getServiceList } from "@/app/api/getServiceList"

export default async function Settings() {
  let serviceTypeList = {}

  serviceTypeList = await getServiceList()

  //   console.log(serviceTypeList)

  return (
    <>
      <h1>Settings</h1>
      <div>
        {/* Render your data here */}
        {/* <p>{JSON.stringify(data)}</p> */}
      </div>
      <ServiceSettings serviceList={data} />
    </>
  )
}
