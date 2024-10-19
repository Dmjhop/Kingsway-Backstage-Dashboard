// server.js
const { WebSocketServer } = require("ws")

const wss = new WebSocketServer({ port: 3001 })

wss.on("connection", (ws) => {
  console.log("Client connected")

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`)
  })

  ws.on("close", () => {
    console.log("Client disconnected")
  })
})

// Make the WebSocket server globally accessible
global.wss = wss

module.exports = wss
