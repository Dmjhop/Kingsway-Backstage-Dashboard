//? API CALL FOR THE CURRENT SERVICE ID IN THE LIST OF SERVICE TYPES

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getServicePlan(
  serviceTypeId = process.env.SUNDAY_SERVICE_TYPE_ID
) {
  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/${serviceTypeId}/plans?filter=future&per_page=1`,
    {
      ...requestOptions,
      next: { tags: [`dashboard-${serviceTypeId}`], revalidate: 60 },
    }
  )
  return res.json()
}
