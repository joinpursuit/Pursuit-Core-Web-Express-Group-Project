const users = require('express').Router()


users.get("/",(req,res)=>{
    res.status(200).json({
        status:"failure",
        message:"Get all Users",
        body:"test"
    })
})



// get /users/:id - get single user

users.get("/users/:id",(req,res)=>{
    res.status(200).json({
        status:"failure",
        message:"Got Single User",
        body:"test"
    })
})





// post /users- add sungle user

users.post("/users",(req,res)=>{
    res.status(200).json({
        status:"failure",
        message:"Got single user",
        body:"test"
    })
})


// delete /users/:id- delete user with corresponding id

users.delete("/users/:id",(req,res)=>{
    res.status(200).json({
        status:"failure",
        message:"Delete User",
        body:"test"
    })
})

module.exports = users