const express = require("express")
const router = express.Router()

const homeController = require("../controllers/homeController")
const userRoutes = require("./users")

router.get("/", homeController.home)

// REST users endpoint
router.use("/users", userRoutes)

module.exports = router