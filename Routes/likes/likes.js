const likes = require('express').Router()

likes.get("/posts/:post_id", (req, res) => {
    res.send("I've made a get request!")
})

likes.post("/posts/:post_id", (req, res) => {

})

likes.delete("/:post_id/:liker_id", (req, res) => {

})


module.exports = likes;
