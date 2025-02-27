// ? API CALL FOR PRODUCTION TEAM

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getProduction(currentService) {
  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=1017822&per_page=50`,
    requestOptions
  )
  return res.json()
}
