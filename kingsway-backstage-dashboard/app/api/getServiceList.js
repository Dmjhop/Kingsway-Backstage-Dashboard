//? API CALL FOR THE LIST OF SERVICE TYPES

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getServiceList() {
  let serviceTypeList = {}
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
  return serviceTypeList
}
