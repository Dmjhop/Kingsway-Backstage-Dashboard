// custom-server.js
const { createServer } = require("http")
const next = require("next")
const wss = require("./server")

const app = next({ dev: process.env.NODE_ENV !== "production" })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(3000, (err) => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })
})
