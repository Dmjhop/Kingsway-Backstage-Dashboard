//? API CALL FOR THE CURRENT SERVICE ID IN THE LIST OF SERVICE TYPES

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getChristmasServicePlan() {
  const res = await fetch(
    "https://api.planningcenteronline.com/services/v2/service_types/1301420/plans?filter=future&per_page=1",
    requestOptions
  )
  return res.json()
}
