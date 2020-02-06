const users = require('express').Router()
const{getAllUsers, getSingleUsers, addSingleUser, deleteSingleUser} = require("../../queries/users")


users.get("/",getAllUsers)

users.get("/users/:id",getSingleUsers)

users.post("/", addSingleUser)

users.delete("/users/:id",deleteSingleUser)

module.exports = users