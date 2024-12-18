// ? API CALL FOR BAND TEAM SPECIFICALLY INSTRUMENTALISTS

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

export async function getChrBand(currentService) {
  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/1301420/plans/${currentService.data[0].id}/team_members?include=team&where[team_id]=5207292&per_page=30`,
    requestOptions
  )
  return res.json()
}
