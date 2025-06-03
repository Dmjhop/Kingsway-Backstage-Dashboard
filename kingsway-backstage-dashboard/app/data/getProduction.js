// ? API CALL FOR PRODUCTION TEAM

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getProduction(currentService, teamId = "1017822") {
  const serviceTypeId = process.env.SUNDAY_SERVICE_TYPE_ID
  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/${serviceTypeId}/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=${teamId}&per_page=30`,
    {
      ...requestOptions,
      next: { tags: [`dashboard-${serviceTypeId}`], revalidate: 60 },
    }
  )
  return res.json()
}
