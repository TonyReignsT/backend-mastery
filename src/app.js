const express = require("express")
const routes = require("./routes")

const app = express()

// Parse incoming JSON
app.use(express.json())

// Routes
app.use("/", routes)

module.exports = app