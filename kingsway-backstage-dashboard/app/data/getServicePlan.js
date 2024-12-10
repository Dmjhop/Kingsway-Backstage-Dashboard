//? API CALL FOR THE CURRENT SERVICE ID IN THE LIST OF SERVICE TYPES

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getServicePlan() {
  const res = await fetch(
    "https://api.planningcenteronline.com/services/v2/service_types/285406/plans/74391473",
    requestOptions
  )
  return res.json()
}

// 74391473
// https://api.planningcenteronline.com/services/v2/service_types/285406/plans?filter=future&per_page=1
