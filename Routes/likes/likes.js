const likes = require('express').Router();
const { getAllLikes, addSingleLike, deleteSingleLike} = require('../../queries/likes');

likes.get("/:post_id", getAllLikes);

likes.post("/:post_id", addSingleLike);

likes.delete("/:id", deleteSingleLike);


module.exports = likes;
