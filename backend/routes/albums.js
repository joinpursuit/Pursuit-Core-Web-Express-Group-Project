const albums = require("express").Router()
const {getAllAlbums, getAllAlbumsThatBelongToUser, createNewEmptyAlbumForUser} = require("../queries/albumsQueries.js")

albums.get("/", getAllAlbums);
albums.get("/:owner_id", getAllAlbumsThatBelongToUser)
albums.post("/:owner_id", createNewEmptyAlbumForUser)

module.exports = albums;