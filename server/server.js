require("dotenv")
const express = require("express")
const massive = require("massive")
const bodyParser = require("body-parser")
const session = require("express-session")
const Auth0Strategy = require("passport-auth0")
const cors = require("cors")
const {
  CONNECTION_STRING,
  SESSION_SECRET,
  SERVER_PORT,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL
} = process.env
const app = express()
app.use(bodyParser.json())
app.use(cors())
//change
massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
  })
})

app.get("/api/tags", tagc.getAll)
app.post("/api/tag", tagc.create)
app.put("/api/tag", tagc.update)

app.get("/api/timers", timerc.getAll)
app.post("/api/timer", timerc.create)
app.put("/api/timer-name", timerc.updateName)
app.put("/api/timer-start", timerc.updateStartEnd)
app.delete("/api/timer", timerc.delete)
