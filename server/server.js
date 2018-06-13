const express = require("express"),
  session = require("express-session"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0"),
  massive = require("massive"),
  bodyParser = require("body-parser")
require("dotenv").config()
const timerC = require("./timer_controller.js"),
  tagC = require("./tag_controller.js")

const {
  SERVER_PORT,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  CONNECTION_STRING,
  REACT_APP_LOGIN,
  REACT_APP_SUCCESS_REDIRECT
} = process.env

const app = express()
app.use(bodyParser.json())
app.use( express.static( `${__dirname}/../build` ) );

massive(CONNECTION_STRING).then(db => app.set("db", db))
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: "openid profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get("db")
        .users.check_if_user([profile.user_id])
        .then(resp => {
          console.log(profile.user_id, "profile")
          if (resp[0]) {
            console.log("resp[0]!!! ", profile.user_id)
            return done(null, resp[0].user_id)
          } else {
            console.log("in else ", profile.user_id)
            app
              .get("db")
              .users.create_user([profile.user_id])
              .then(resp => {
                return done(null, resp[0].user_id)
              })
          }
        })
    }
  )
)

passport.serializeUser(function(id, done) {
  console.log(id, "Auth_id")
  done(null, id)
})
passport.deserializeUser(function(id, done) {
  done(null, id)
})
// AUTH ENDPOINTS---------------------
app.get("/auth", passport.authenticate("auth0"))
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: REACT_APP_SUCCESS_REDIRECT,
    failureRedirect: REACT_APP_LOGIN
  })
)
app.get("/auth/me", function(req, res) {
  if (req.user) {
    console.log(req.session)
    res.status(200).send(req.user)
  } else {
    res.sendStatus(401)
  }
})

//OTHER ENDPOINTS---------------------
app.get("/api/tags", tagC.getAll)
app.post("/api/tag", tagC.create)
app.put("/api/tag", tagC.update)

app.get("/api/timers", timerC.getAll)
app.post("/api/timer", timerC.create)
app.put("/api/timer-name", timerC.updateName)
app.put("/api/timer-start", timerC.updateStartEnd)
app.delete("/api/timer", timerC.delete)

app.listen(SERVER_PORT, () => {
  console.log(`Here on Port ${SERVER_PORT}`)
})
