const express = require('express')
const bodyParser = require("body-parser")
const db = require('./db/config')
const logRoute = require('./app/route')

const app = express()

//

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//

app.use('/logs',logRoute )

app.listen(3000, ()=> console.log("3000 is running"))