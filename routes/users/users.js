const users = require('express').Router()
const{getAllUsers, getSingleUser, addSingleUser, deleteSingleUser} = require("../../queries/users")


users.get("/",getAllUsers)

users.get("/:id",getSingleUser)

users.post("/", addSingleUser)

users.delete("/:id",deleteSingleUser)

module.exports = users