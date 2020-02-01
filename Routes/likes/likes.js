const likes = require('express').Router()
const { getAllLikes, addSingleLike, deleteSingleLike} = require('')
// these are my queries 

const likesRouter = require('../likes/likes.js')
likes.use('/:id/likes', likesRouter);

// api endpoints

// get a single like

likes.get("/posts/:post_id", (req, res) => {
    res.send("I've made a get request!")
})

// add a single like
likes.post("/posts/:post_id", (req, res) => {
})

// delete a like
likes.delete("/:post_id/:liker_id", (req, res) => {
})


module.exports = likes;
