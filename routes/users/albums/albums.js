const usersAlbums = require('express').Router({mergeParams: true})
const { getAlbumsByUser, createAlbum } = require("../../../queries/albums/albums.js")
​
usersAlbums.get("/:id", getAlbumsByUser)
usersAlbums.post("/", createAlbum)


​
module.exports = usersAlbums;
