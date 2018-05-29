const express = require('express')
    , massive = require('massive');
const bodyParser = require('body-parser')

require('dotenv').config();
const tagc = require('./tag_controller.js')
const timerc = require('./timer_controller.js')

const port = 3005

app = express()

const {
    CONNECTION_STRING,
} = process.env;

app.use(bodyParser.json())
massive(CONNECTION_STRING).then( db=> {
    app.set('db', db);
    console.log("Database connected")
})

app.get("/api/tags", tagc.getAll)
app.post("/api/tag", tagc.create)
app.put("/api/tag", tagc.update)

app.get("/api/timers", timerc.getAll)
app.post("/api/timer", timerc.create)
app.put("/api/timer-name", timerc.updateName)
app.put("/api/timer-start", timerc.updateStartEnd)
app.delete("/api/timer", timerc.delete)

app.listen(port, ()=> console.log("Done Listening!"));
