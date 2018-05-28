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

massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
  })
})
