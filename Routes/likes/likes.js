const likes = require('express').Router();
const { getAllLikes, addSingleLike, deleteSingleLike} = require('');
// these are my queries 

const likesRouter = require('../likes/likes.js')
likes.use('/:id/likes', likesRouter);

// api endpoints

// get all likes for a single post

likes.get("/posts/:post_id", getAllLikes);

// add a single like
likes.post("/posts/:post_id", addSingleLike);

// delete a like
likes.delete("/:post_id/:liker_id", deleteSingleLike);


module.exports = likes;
