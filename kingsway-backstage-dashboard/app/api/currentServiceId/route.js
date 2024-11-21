export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.planningcenteronline.com/services/v2/service_types/285406/plans?filter=future&per_page=1",
      requestOptions
    )
    const currentService = await response.json()
    res.status(200).json(data)
    // console.log(currentService)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" })
  }
}
