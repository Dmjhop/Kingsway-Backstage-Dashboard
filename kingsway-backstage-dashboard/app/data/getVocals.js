// ? API CALL FOR WORSHIP TEAM = VOCALS SPECIFICALLY

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getVocals(currentService) {
  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=5767747&per_page=50`,
    requestOptions
  )
  return res.json()
}
