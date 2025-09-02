import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    // Process the webhook payload
    const event = body.data[0]
    if (!event) {
      return NextResponse.json({ error: "No event found" }, { status: 400 })
    }

    const name = event.attributes.name
    const attempt = event.attributes.attempt

    //payload itself
    const payloadString = event.attributes.payload
    const payload = payloadString ? JSON.parse(payloadString) : null

    // console.log(
    //   `This is the Body: ${JSON.parse(body)}`,
    //   `This is the Event: ${event}`
    // )

    const plan = payload?.data
    const planId = plan?.id
    const planDate = plan?.attributes?.dates
    const planTitle = plan?.attributes?.title
    const planUrl = plan?.attributes?.planning_center_url

    console.log("Event:", name)
    console.log("Attempt:", attempt)
    console.log("Plan ID:", planId)
    console.log("Plan Date:", planDate)
    console.log("Plan Title:", planTitle)
    console.log("Plan URL:", planUrl)

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }
}

// ngrok http --url=forcibly-engaging-urchin.ngrok-free.app 80

//How did I get here?
// Deploy the usual node.js run => "npm run dev"
// Then use "ngrok http 3000" to start a web tunnel at port 3000
// Then use the web interface to get the temporary web link
// Then inside PCO API put whatever link was generated followed by the correct / URL "https://5501881211b2.ngrok-free.app/api/webhooks/planning-center"
// services.v2.events.plan.updated is the option you want!
// Go from there to test things out more!
