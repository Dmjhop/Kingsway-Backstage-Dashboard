// app/api/webhook/route.js
import { NextResponse } from "next/server"

export async function POST(request) {
  const payload = await request.json()

  // Handle the webhook payload here, e.g., updating your database

  // Example: Notify WebSocket clients (assuming you have a WebSocket server setup)
  if (global.wss) {
    global.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(payload))
      }
    })
  }

  return NextResponse.json({ success: true })
}
