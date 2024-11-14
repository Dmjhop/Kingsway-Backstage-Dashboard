export async function teamListing(team) {
  let teamSearch = team ? team : "285446"
  let teamFullList = []

  const myHeaders = new Headers()
  myHeaders.append("Authorization", process.env.API_SECRET)

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    // cache: "force-cache",
  }

  try {
    const response = await fetch(
      `https://api.planningcenteronline.com/services/v2/service_types/${teamSearch}/teams`,
      requestOptions
    )
    teamFullList = await response.json()
    console.log(teamFullList)
  } catch (error) {
    console.error(error)
  }
  return teamFullList
}
