// ? API CALL FOR SPEAKER | SERVICE HOST | POINT PERSON (CAMPUS TEAM)

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getCampus(currentService) {
  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data.id}/team_members?include=team&where[team_id]=2620409&per_page=30`,
    requestOptions
  )
  return res.json()
}
