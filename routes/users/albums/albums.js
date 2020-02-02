const usersAlbums = require('express').Router({mergeParams: true})
const { getAlbumsByUser, createAlbum } = require("../../../queries/users")
​
usersAlbums.get("/:id", getAlbumsByUser)
usersAlbums.post("/", createAlbum)


​
module.exports = usersAlbums;
