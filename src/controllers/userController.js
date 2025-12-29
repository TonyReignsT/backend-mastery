// Users controller 

exports.getUsers = (req, res) => {
    res.json({message: "Get all users"})
}

exports.createUser = (req, res) => {
    res.json({message: "Create a new user"})
}

exports.updateUser = (req, res) => {
    req.json({message: `Update users ${req.params.id}`})
}

exports.deleteUser = (req, res) => {
    res.json({message: `Delete user ${req.params.id}`})
}