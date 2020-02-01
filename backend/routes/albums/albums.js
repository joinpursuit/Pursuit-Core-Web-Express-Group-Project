const albums = require("express").Router();

const { getAlbums, newAlbum } = require("../../queries/albums/albums.js");

albums.get("/", getAlbums);
albums.post("/", newAlbum);

module.exports = albums;
