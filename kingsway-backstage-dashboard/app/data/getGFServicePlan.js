//? API CALL FOR THE CURRENT SERVICE ID IN THE LIST OF SERVICE TYPES

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getGFServicePlan() {
  const res = await fetch(
    "https://api.planningcenteronline.com/services/v2/service_types/285406/plans/78601524",
    requestOptions
  )
  return res.json()
}
