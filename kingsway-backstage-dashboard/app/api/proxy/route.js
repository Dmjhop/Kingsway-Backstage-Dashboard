// Next.js API route (/pages/api/proxy.js or /app/api/proxy/route.js)
export default async function handler(req, res) {
  const myHeaders = new Headers()
  myHeaders.append("Authorization", process.env.API_SECRET)

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    // cache: "force-cache",
  }
  const response = await fetch(
    "https://api.planningcenteronline.com/services/v2/service_types/494212/teams",
    requestOptions
  )
  const data = await response.json()
  res.json(data)
}
