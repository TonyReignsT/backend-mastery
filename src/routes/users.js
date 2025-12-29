// Creating a route file

const express = require("express")
const router = express.Router()

// GET - fetch users
router.get("/", (req, res) => {
    res.json({message: "Get all users"})
})

// POST - Create user
router.post("/", (req, res) => {
    res.json({message: "Create a new user"})
})

// PUT - update user
router.put("/", (req, res) => {
    res.json({message: `Update user ${req.params.id}`})
})

module.exports = router