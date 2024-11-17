import ServiceSettings from "@/components/ServiceSettings"

export default async function Settings() {
  let serviceTypeList = {}

  const myHeaders = new Headers({
    Authorization: process.env.API_SECRET,
  })

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    // cache: "force-cache",
  }

  try {
    const response = await fetch(
      "https://api.planningcenteronline.com/services/v2/service_types/",
      requestOptions
    )
    serviceTypeList = await response.json()
    // console.log(serviceTypeList)
  } catch (error) {
    console.error(error)
  }

  //   console.log(serviceTypeList)

  return (
    <>
      <h1>Settings</h1>
      <ServiceSettings serviceList={serviceTypeList} />
    </>
  )
}
