const users = require('express').Router()
const{getAllUsers, getSingleUsers, addSingleUser, deleteSingleUser} = require("../../queries/users")


users.get("/",getAllUsers)


// get /users/:id - get single user

users.get("/users/:id",getSingleUsers)





// post /users- add sungle user

users.post("/", addSingleUser)


// delete /users/:id- delete user with corresponding id

users.delete("/users/:id",deleteSingleUser)

module.exports = users