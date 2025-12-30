const express = require("express")
const routes = require("./routes")

const logger = require("./middlewares/loggerMiddleware") // register the middleware globally

const app = express()

// Parse incoming JSON
app.use(express.json())

// Global Middleware
app.use(logger)

// Routes
app.use("/", routes)

module.exports = app