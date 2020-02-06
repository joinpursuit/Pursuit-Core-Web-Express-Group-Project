const pictures = require('express').Router();
const {postPicture, getAllAlbumPictures, deletePictures} = require("../../queries/pictures.js")

pictures.get("/albums/:album_id", getAllAlbumPictures)
pictures.post("/albums/:album_id", postPicture)
pictures.delete("/:pic_id", deletePictures )

module.exports = pictures