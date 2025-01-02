// ? API CALL FOR SPEAKER | SERVICE HOST | POINT PERSON (CAMPUS TEAM)

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getChrCampus(currentService) {
  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/1301420/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=5207291&per_page=30`,
    requestOptions
  )
  return res.json()
}