// Creating a route file

const express = require("express")
const router = express.Router()

// Cleaning the routes - Should not contain business logic
const userController = require("../controllers/userController")

// GET - fetch users
// router.get("/", (req, res) => {
//     res.json({message: "Get all users"})
// })
router.get("/", userController.getUsers)

// POST - Create user
router.post("/", userController.createUser)

// PUT - update user
router.put("/", userController.updateUser)

// DELETE - delete user
router.delete("/", userController.deleteUser)

module.exports = router